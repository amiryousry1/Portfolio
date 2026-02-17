import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2ea4e58c/health", (c) => {
  return c.json({ status: "ok" });
});

// ==================== Contact Form ====================
app.post("/make-server-2ea4e58c/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return c.json({ error: "الاسم والإيميل والرسالة مطلوبين" }, 400);
    }

    // Create message ID
    const messageId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Save to KV store
    await kv.set(`message:${messageId}`, {
      id: messageId,
      name,
      email,
      phone: phone || '',
      message,
      timestamp,
      read: false,
    });

    console.log(`Contact message saved: ${messageId} from ${email}`);

    // Note: لإرسال إيميلات فعلية، المستخدم محتاج يعمل configure لـ SMTP في Supabase
    // يمكن استخدام خدمات مثل Resend أو SendGrid
    
    return c.json({ 
      success: true, 
      message: "رسالتك وصلت بنجاح! هنرد عليك قريب",
      messageId 
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return c.json({ error: "حصل خطأ في إرسال الرسالة. جرب تاني" }, 500);
  }
});

// Get all contact messages (for dashboard)
app.get("/make-server-2ea4e58c/messages", async (c) => {
  try {
    // Verify authorization
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: "Unauthorized - يجب تسجيل الدخول أولاً" }, 401);
    }

    // Get all messages
    const messages = await kv.getByPrefix('message:');
    
    // Sort by timestamp (newest first)
    messages.sort((a: any, b: any) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return c.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return c.json({ error: "حصل خطأ في جلب الرسائل" }, 500);
  }
});

// ==================== Booking System ====================
app.post("/make-server-2ea4e58c/booking", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, date, time, service, notes } = body;

    // Validate input
    if (!name || !email || !phone || !date || !time || !service) {
      return c.json({ error: "كل الحقول مطلوبة" }, 400);
    }

    // Create booking ID
    const bookingId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Save to KV store
    await kv.set(`booking:${bookingId}`, {
      id: bookingId,
      name,
      email,
      phone,
      date,
      time,
      service,
      notes: notes || '',
      timestamp,
      status: 'pending', // pending, confirmed, cancelled
    });

    console.log(`Booking created: ${bookingId} for ${email} on ${date} at ${time}`);

    return c.json({ 
      success: true, 
      message: "حجزك تم بنجاح! هنتواصل معاك قريب للتأكيد",
      bookingId 
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return c.json({ error: "حصل خطأ في الحجز. جرب تاني" }, 500);
  }
});

// Get all bookings (for dashboard)
app.get("/make-server-2ea4e58c/bookings", async (c) => {
  try {
    // Verify authorization
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: "Unauthorized - يجب تسجيل الدخول أولاً" }, 401);
    }

    // Get all bookings
    const bookings = await kv.getByPrefix('booking:');
    
    // Sort by date and time
    bookings.sort((a: any, b: any) => 
      new Date(`${b.date} ${b.time}`).getTime() - new Date(`${a.date} ${a.time}`).getTime()
    );

    return c.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return c.json({ error: "حصل خطأ في جلب الحجوزات" }, 500);
  }
});

// Update booking status
app.put("/make-server-2ea4e58c/booking/:id", async (c) => {
  try {
    // Verify authorization
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: "Unauthorized - يجب تسجيل الدخول أولاً" }, 401);
    }

    const bookingId = c.req.param('id');
    const body = await c.req.json();
    const { status } = body;

    // Get existing booking
    const booking = await kv.get(`booking:${bookingId}`);
    
    if (!booking) {
      return c.json({ error: "الحجز غير موجود" }, 404);
    }

    // Update status
    await kv.set(`booking:${bookingId}`, {
      ...booking,
      status,
      updatedAt: new Date().toISOString(),
    });

    return c.json({ 
      success: true, 
      message: "تم تحديث حالة الحجز بنجاح" 
    });
  } catch (error) {
    console.error("Error updating booking:", error);
    return c.json({ error: "حصل خطأ في تحديث الحجز" }, 500);
  }
});

// ==================== User Authentication ====================
app.post("/make-server-2ea4e58c/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      return c.json({ error: "الاسم والإيميل والباسورد مطلوبين" }, 400);
    }

    if (password.length < 6) {
      return c.json({ error: "الباسورد لازم يكون 6 حروف على الأقل" }, 400);
    }

    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.error("Signup error:", error);
      return c.json({ 
        error: error.message === "User already registered" 
          ? "الإيميل ده مسجل قبل كده" 
          : "حصل خطأ في التسجيل. جرب تاني" 
      }, 400);
    }

    // Save additional user data to KV
    if (data.user) {
      await kv.set(`user:${data.user.id}`, {
        id: data.user.id,
        name,
        email,
        createdAt: new Date().toISOString(),
      });
    }

    console.log(`User registered successfully: ${email}`);

    return c.json({ 
      success: true, 
      message: "تم إنشاء الحساب بنجاح!",
      user: data.user 
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return c.json({ error: "حصل خطأ في التسجيل. جرب تاني" }, 500);
  }
});

// Request password reset (send OTP)
app.post("/make-server-2ea4e58c/forgot-password", async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email) {
      return c.json({ error: "من فضلك اكتب الإيميل" }, 400);
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // 10 minutes

    // Save OTP to KV store
    await kv.set(`otp:${email}`, {
      otp,
      email,
      expiresAt: otpExpiry,
      verified: false,
      createdAt: new Date().toISOString(),
    });

    console.log(`OTP generated for ${email}: ${otp} (expires at ${otpExpiry})`);

    // Note: في بيئة production، الـ OTP يتبعت على الإيميل
    // لكن هنا هنرجعه في الـ response للتجربة
    
    return c.json({ 
      success: true, 
      message: "تم إرسال كود التحقق على إيميلك",
      // في production، امسح السطر التالي
      otp: otp // للتجربة بس
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return c.json({ error: "حصل خطأ في إرسال الكود. جرب تاني" }, 500);
  }
});

// Verify OTP
app.post("/make-server-2ea4e58c/verify-otp", async (c) => {
  try {
    const body = await c.req.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return c.json({ error: "الإيميل والكود مطلوبين" }, 400);
    }

    // Get OTP from KV store
    const otpData = await kv.get(`otp:${email}`);

    if (!otpData) {
      return c.json({ error: "الكود مش موجود أو منتهي. جرب تطلب كود جديد" }, 400);
    }

    // Check if OTP is expired
    if (new Date(otpData.expiresAt) < new Date()) {
      await kv.del(`otp:${email}`);
      return c.json({ error: "الكود منتهي. جرب تطلب كود جديد" }, 400);
    }

    // Verify OTP
    if (otpData.otp !== otp) {
      return c.json({ error: "الكود مش صح. جرب تاني" }, 400);
    }

    // Mark OTP as verified
    await kv.set(`otp:${email}`, {
      ...otpData,
      verified: true,
    });

    console.log(`OTP verified successfully for ${email}`);

    return c.json({ 
      success: true, 
      message: "تم التحقق بنجاح!",
      verified: true
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return c.json({ error: "حصل خطأ في التحقق. جرب تاني" }, 500);
  }
});

// Reset password
app.post("/make-server-2ea4e58c/reset-password", async (c) => {
  try {
    const body = await c.req.json();
    const { email, newPassword } = body;

    if (!email || !newPassword) {
      return c.json({ error: "الإيميل والباسورد الجديد مطلوبين" }, 400);
    }

    if (newPassword.length < 6) {
      return c.json({ error: "الباسورد لازم يكون 6 حروف على الأقل" }, 400);
    }

    // Check if OTP was verified
    const otpData = await kv.get(`otp:${email}`);

    if (!otpData || !otpData.verified) {
      return c.json({ error: "لازم تتحقق من الكود الأول" }, 400);
    }

    // Get user by email
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      console.error("Error listing users:", listError);
      return c.json({ error: "حصل خطأ في إيجاد المستخدم" }, 500);
    }

    const user = users.find(u => u.email === email);

    if (!user) {
      return c.json({ error: "المستخدم مش موجود" }, 404);
    }

    // Update password
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      user.id,
      { password: newPassword }
    );

    if (updateError) {
      console.error("Error updating password:", updateError);
      return c.json({ error: "حصل خطأ في تحديث الباسورد" }, 500);
    }

    // Delete OTP after successful reset
    await kv.del(`otp:${email}`);

    console.log(`Password reset successfully for ${email}`);

    return c.json({ 
      success: true, 
      message: "تم تغيير الباسورد بنجاح! ممكن دلوقتي تسجل دخول"
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    return c.json({ error: "حصل خطأ في إعادة تعيين الباسورد. جرب تاني" }, 500);
  }
});

// Get user data
app.get("/make-server-2ea4e58c/user", async (c) => {
  try {
    // Verify authorization
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: "Unauthorized - يجب تسجيل الدخول أولاً" }, 401);
    }

    // Get user data from KV
    const userData = await kv.get(`user:${user.id}`);

    return c.json({ 
      user: {
        id: user.id,
        email: user.email,
        ...userData,
      }
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return c.json({ error: "حصل خطأ في جلب بيانات المستخدم" }, 500);
  }
});

// Get dashboard stats
app.get("/make-server-2ea4e58c/dashboard/stats", async (c) => {
  try {
    // Verify authorization
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user) {
      return c.json({ error: "Unauthorized - يجب تسجيل الدخول أولاً" }, 401);
    }

    // Get all messages and bookings
    const messages = await kv.getByPrefix('message:');
    const bookings = await kv.getByPrefix('booking:');

    // Calculate stats
    const unreadMessages = messages.filter((m: any) => !m.read).length;
    const pendingBookings = bookings.filter((b: any) => b.status === 'pending').length;
    const confirmedBookings = bookings.filter((b: any) => b.status === 'confirmed').length;

    return c.json({
      stats: {
        totalMessages: messages.length,
        unreadMessages,
        totalBookings: bookings.length,
        pendingBookings,
        confirmedBookings,
      }
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return c.json({ error: "حصل خطأ في جلب الإحصائيات" }, 500);
  }
});

Deno.serve(app.fetch);