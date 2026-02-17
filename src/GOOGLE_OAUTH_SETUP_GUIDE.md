# 🔐 دليل إعداد Google OAuth - خطوة بخطوة

## 🎯 نظرة عامة

عشان تسجيل الدخول بـ Google يشتغل، محتاج تعمل setup في:
1. **Google Cloud Console** (عشان تاخد Client ID و Secret)
2. **Supabase Dashboard** (عشان تفعّل Google Provider)

---

## 📋 الخطوات الكاملة

### المرحلة 1️⃣: إعداد Google Cloud Console

#### الخطوة 1: إنشاء مشروع جديد

1. روح على: https://console.cloud.google.com/
2. اضغط على **"Select a project"** في أعلى الصفحة
3. اضغط **"New Project"**
4. اكتب اسم المشروع: مثلاً "Amir Yousry Portfolio"
5. اضغط **"Create"**

#### الخطوة 2: تفعيل Google+ API

1. من القائمة الجانبية، اختار **"APIs & Services"** → **"Library"**
2. دور على **"Google+ API"**
3. اضغط على Google+ API
4. اضغط **"Enable"**

#### الخطوة 3: إنشاء OAuth Consent Screen

1. من القائمة الجانبية: **"APIs & Services"** → **"OAuth consent screen"**
2. اختار **"External"** (عشان أي حد يقدر يسجل)
3. اضغط **"Create"**

4. **في صفحة App Information:**
   - **App name:** Amir Yousry Portfolio
   - **User support email:** ansaya16@gmail.com
   - **App logo:** (اختياري)
   - **Application home page:** رابط موقعك
   - **Authorized domains:** 
     - supabase.co
     - موقعك (لو عندك domain)
   - **Developer contact email:** ansaya16@gmail.com
   - اضغط **"Save and Continue"**

5. **في صفحة Scopes:**
   - اضغط **"Add or Remove Scopes"**
   - اختار:
     - `userinfo.email`
     - `userinfo.profile`
     - `openid`
   - اضغط **"Update"**
   - اضغط **"Save and Continue"**

6. **في صفحة Test users:** (اختياري في البداية)
   - اضغط **"Save and Continue"**

7. **في صفحة Summary:**
   - راجع كل حاجة
   - اضغط **"Back to Dashboard"**

#### الخطوة 4: إنشاء OAuth 2.0 Client ID

1. من القائمة الجانبية: **"APIs & Services"** → **"Credentials"**
2. اضغط **"Create Credentials"** → **"OAuth client ID"**

3. **Application type:** اختار **"Web application"**

4. **Name:** Amir Yousry Web Client

5. **Authorized JavaScript origins:**
   - اضغط **"Add URI"**
   - أضف: `https://<ui-ux-with-amir-480904>.supabase.co`
   - مثال: `https://abcdefghijklmno.supabase.co`

6. **Authorized redirect URIs:**
   - اضغط **"Add URI"**
   - أضف: `https://<ui-ux-with-amir-480904>.supabase.co/auth/v1/callback`
   - مثال: `https://abcdefghijklmno.supabase.co/auth/v1/callback`
   
   ⚠️ **مهم جداً:** الرابط لازم يكون بالظبط كده!

7. اضغط **"Create"**

8. **احفظ البيانات دي:**
   - 📋 **Client ID:** `xxxxxx.apps.googleusercontent.com`
   - 🔑 **Client Secret:** `xxxxxx`
   
   ⚠️ متنساش تنسخهم! هتحتاجهم في الخطوة الجاية.

---

### المرحلة 2️⃣: إعداد Supabase Dashboard

#### الخطوة 1: فتح Supabase Dashboard

1. روح على: https://supabase.com/dashboard
2. سجل دخول
3. اختار مشروعك

#### الخطوة 2: تفعيل Google Provider

1. من القائمة الجانبية: **"Authentication"** → **"Providers"**

2. دور على **"Google"** في القائمة

3. اضغط على **"Google"** عشان تفتح الإعدادات

4. **فعّل Google:**
   - شغّل الزرار **"Enable Sign in with Google"**

5. **أضف البيانات:**
   - **Client ID (for OAuth):** الصقه من Google Cloud Console
   - **Client Secret (for OAuth):** الصقه من Google Cloud Console

6. **Site URL:** (optional)
   - رابط موقعك: مثلاً `https://amiry ousry.com`
   - أو لو لسه مفيش domain، استخدم: `http://localhost:5173`

7. **Redirect URLs:**
   - Default: `https://<project-id>.supabase.co/auth/v1/callback`
   - Additional URLs: (لو عندك production domain)

8. اضغط **"Save"**

---

### المرحلة 3️⃣: اختبار Google OAuth

#### في Development (localhost):

1. ارجع لـ Google Cloud Console
2. روح **Credentials** → اختار الـ OAuth Client اللي عملته
3. في **Authorized JavaScript origins:**
   - أضف: `http://localhost:5173`
4. في **Authorized redirect URIs:**
   - أضف: `https://<project-id>.supabase.co/auth/v1/callback`
5. **Save**

#### جرب التسجيل:

1. شغّل الموقع locally
2. روح `/login` أو `/signup`
3. اضغط زرار "ادخل بحساب جوجل"
4. اختار حساب Google
5. لو كل حاجة تمام، هيتحول لـ `/dashboard` ✅

---

## 🔍 حل المشاكل الشائعة

### مشكلة 1: "Redirect URI mismatch"

**السبب:** الـ Redirect URI مش مطابق بالظبط

**الحل:**
```
✅ الصح:
https://abcdefghijklmno.supabase.co/auth/v1/callback

❌ الغلط:
https://abcdefghijklmno.supabase.co/auth/v1/callback/  (فيه / زيادة)
https://abcdefghijklmno.supabase.co/auth/callback      (مفهوش v1)
http://abcdefghijklmno.supabase.co/auth/v1/callback   (http مش https)
```

### مشكلة 2: "Access blocked: App not verified"

**السبب:** الـ OAuth Consent Screen مش verified

**الحل:**
- في Development: أضف Test Users في Google Cloud Console
- أو: اعمل verification للـ app (بياخد أيام)

### مشكلة 3: "Invalid client"

**السبب:** Client ID أو Secret غلط

**الحل:**
- تأكد إنك نسخت Client ID و Secret صح
- متنساش تضغط Save في Supabase Dashboard

### مشكلة 4: "Provider is not enabled"

**السبب:** مفعلتش Google Provider في Supabase

**الحل:**
- روح Supabase → Authentication → Providers
- فعّل Google و احفظ

---

## 📝 Checklist - تأكد من كل حاجة

قبل ما تجرب Google OAuth، تأكد من:

### Google Cloud Console:
- [ ] عملت مشروع جديد
- [ ] فعّلت Google+ API
- [ ] عملت OAuth Consent Screen
- [ ] عملت OAuth Client ID
- [ ] أضفت Authorized JavaScript origins
- [ ] أضفت Authorized redirect URIs (بالظبط!)
- [ ] نسخت Client ID و Client Secret

### Supabase Dashboard:
- [ ] فتحت مشروعك
- [ ] روحت Authentication → Providers
- [ ] فعّلت Google
- [ ] لصقت Client ID
- [ ] لصقت Client Secret
- [ ] ضغطت Save

### الكود:
- [ ] LoginPage فيها زرار Google OAuth
- [ ] SignupPage فيها زرار Google OAuth
- [ ] الكود بيستخدم `supabase.auth.signInWithOAuth()`
- [ ] الـ redirectTo صح (`/dashboard`)

---

## 🚀 بعد ما تخلص Setup

### الكود هيشتغل أوتوماتيك! ✅

```typescript
// في LoginPage.tsx و SignupPage.tsx:
const handleGoogleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`
    }
  });
  
  if (error) {
    console.error('Google sign-in error:', error);
  }
};
```

### الـ Flow:

```
1. User يضغط "ادخل بحساب جوجل"
2. ينتقل لصفحة Google للتأكيد
3. User يختار الحساب ويوافق
4. Google يرجع للموقع مع access token
5. Supabase يعمل session للـ user
6. User يتحول لـ /dashboard
```

---

## 🎓 ملاحظات مهمة

### 1. في Development:
- استخدم `localhost` في Authorized origins
- ممكن تضيف test users عشان تختبر

### 2. في Production:
- غيّر `localhost` بالـ domain الحقيقي
- تأكد إن الـ redirect URLs صحيحة
- ممكن تحتاج تعمل verification للـ app

### 3. Security:
- Client Secret لازم يكون في Supabase بس (backend)
- متحطوش في Frontend code أبداً
- Supabase بيتعامل مع OAuth flow بشكل آمن

### 4. User Data:
- لما user يسجل بـ Google، Supabase بيحفظ:
  - Email
  - Name
  - Profile picture URL
- ممكن تستخدمهم في الموقع

---

## 🔗 روابط مفيدة

- **Google Cloud Console:** https://console.cloud.google.com/
- **Supabase Dashboard:** https://supabase.com/dashboard
- **Supabase Google OAuth Docs:** https://supabase.com/docs/guides/auth/social-login/auth-google
- **Google OAuth 2.0 Docs:** https://developers.google.com/identity/protocols/oauth2

---

## ✅ خلصت؟ جرب دلوقتي!

1. اعمل كل الخطوات فوق بالترتيب
2. روح `/login`
3. اضغط "ادخل بحساب جوجل"
4. سجل بحساب Google
5. استمتع! 🎉

---

**لو حصلت أي مشكلة، راجع قسم "حل المشاكل الشائعة" فوق! 👆**

تم إعداده بواسطة: AI Assistant 🤖
آخر تحديث: ديسمبر 2024
