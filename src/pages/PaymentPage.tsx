import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function PaymentPage() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'instapay' | 'wallet'>('card');
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Get booking data from sessionStorage
    const storedData = sessionStorage.getItem('bookingData');
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    } else {
      // If no booking data, redirect to home
      navigate('/');
    }
  }, [navigate]);

  const validateCard = () => {
    const newErrors: Record<string, string> = {};

    if (!cardData.cardNumber || cardData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'رقم البطاقة لازم يكون 16 رقم';
    }

    if (!cardData.cardName.trim()) {
      newErrors.cardName = 'اكتب الاسم المكتوب على البطاقة';
    }

    if (!cardData.expiryDate || !/^\d{2}\/\d{2}$/.test(cardData.expiryDate)) {
      newErrors.expiryDate = 'الصيغة الصحيحة MM/YY';
    }

    if (!cardData.cvv || cardData.cvv.length !== 3) {
      newErrors.cvv = 'CVV لازم يكون 3 أرقام';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/\D/g, '');
    value = value.substring(0, 16);
    value = value.match(/.{1,4}/g)?.join(' ') || value;
    setCardData({ ...cardData, cardNumber: value });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setCardData({ ...cardData, expiryDate: value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'card' && !validateCard()) {
      return;
    }

    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
      
      // Clear booking data
      sessionStorage.removeItem('bookingData');
      
      // Redirect to success page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (!bookingData) {
    return null;
  }

  const getAmount = () => {
    if (bookingData.itemType === 'session') {
      return bookingData.session?.price || '0 جنيه';
    } else if (bookingData.itemType === 'course') {
      return bookingData.course?.price || '0 جنيه';
    }
    return '0 جنيه';
  };

  const getItemTitle = () => {
    if (bookingData.itemType === 'session') {
      return bookingData.session?.title || 'جلسة إرشاد';
    } else if (bookingData.itemType === 'course') {
      return bookingData.course?.title || 'كورس';
    }
    return 'منتج';
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl mb-4">تم الدفع بنجاح! 🎉</h1>
          <p className="text-lg text-gray-600 mb-6">
            شكرًا ليك! هيوصلك إيميل بتفاصيل الحجز خلال دقائق.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="text-sm text-gray-600 mb-2">رقم الطلب</div>
            <div className="text-2xl">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
          </div>
          <p className="text-sm text-gray-500">
            جاري توجيهك للصفحة الرئيسية...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2D3F60] via-[#253447] to-[#2D3F60] py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#CBA135]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-3 px-4 py-2 bg-[#CBA135]/20 rounded-full border border-[#CBA135]/30">
                <span className="text-[#CBA135] text-sm">الدفع الآمن</span>
              </div>
              <h1 className="text-3xl lg:text-5xl mb-4 text-white">إتمام الدفع</h1>
              <p className="text-lg text-gray-300">
                جميع المعاملات محمية ومشفرة بالكامل
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl">الدفع الآمن</h2>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <label className="block mb-4">اختار طريقة الدفع</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#2D3F60] bg-[#2D3F60]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mx-auto mb-2 text-[#2D3F60]" />
                      <div className="text-sm">بطاقة ائتمان</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('instapay')}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        paymentMethod === 'instapay'
                          ? 'border-[#2D3F60] bg-[#2D3F60]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">💳</div>
                      <div className="text-sm">InstaPay</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wallet')}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        paymentMethod === 'wallet'
                          ? 'border-[#2D3F60] bg-[#2D3F60]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">📱</div>
                      <div className="text-sm">محفظة إلكترونية</div>
                    </button>
                  </div>
                </div>

                <form onSubmit={handlePayment}>
                  {paymentMethod === 'card' && (
                    <div className="space-y-5">
                      {/* Card Number */}
                      <div>
                        <label htmlFor="cardNumber" className="block mb-2">
                          رقم البطاقة <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          value={cardData.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="1234 5678 9012 3456"
                          className={`w-full px-4 py-3 rounded-full border ${
                            errors.cardNumber
                              ? 'border-red-500'
                              : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-[#2D3F60]`}
                        />
                        {errors.cardNumber && (
                          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.cardNumber}</span>
                          </div>
                        )}
                      </div>

                      {/* Card Name */}
                      <div>
                        <label htmlFor="cardName" className="block mb-2">
                          الاسم على البطاقة <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          value={cardData.cardName}
                          onChange={(e) =>
                            setCardData({ ...cardData, cardName: e.target.value })
                          }
                          placeholder="Ahmed Mohamed"
                          className={`w-full px-4 py-3 rounded-full border ${
                            errors.cardName
                              ? 'border-red-500'
                              : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-[#2D3F60]`}
                        />
                        {errors.cardName && (
                          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.cardName}</span>
                          </div>
                        )}
                      </div>

                      {/* Expiry & CVV */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block mb-2">
                            تاريخ الانتهاء <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            value={cardData.expiryDate}
                            onChange={handleExpiryChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            className={`w-full px-4 py-3 rounded-full border ${
                              errors.expiryDate
                                ? 'border-red-500'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-[#2D3F60]`}
                          />
                          {errors.expiryDate && (
                            <div className="text-red-600 text-sm mt-1">
                              {errors.expiryDate}
                            </div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block mb-2">
                            CVV <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            value={cardData.cvv}
                            onChange={(e) =>
                              setCardData({
                                ...cardData,
                                cvv: e.target.value.replace(/\D/g, '').substring(0, 3),
                              })
                            }
                            placeholder="123"
                            maxLength={3}
                            className={`w-full px-4 py-3 rounded-full border ${
                              errors.cvv
                                ? 'border-red-500'
                                : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-[#2D3F60]`}
                          />
                          {errors.cvv && (
                            <div className="text-red-600 text-sm mt-1">
                              {errors.cvv}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'instapay' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">💳</div>
                      <h3 className="text-lg mb-2">الدفع عبر InstaPay</h3>
                      <p className="text-gray-700 mb-4">
                        هيتم توجيهك لصفحة InstaPay لإتمام الدفع
                      </p>
                      <div className="bg-white p-3 rounded-lg inline-block">
                        <div className="text-sm text-gray-600">رقم InstaPay</div>
                        <div className="text-lg">ansaya16@gmail.com</div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'wallet' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#2D3F60] transition-all text-center"
                        >
                          <div className="text-3xl mb-2">💰</div>
                          <div>Vodafone Cash</div>
                        </button>
                        <button
                          type="button"
                          className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#2D3F60] transition-all text-center"
                        >
                          <div className="text-3xl mb-2">💸</div>
                          <div>Fawry</div>
                        </button>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                        اختار المحفظة المفضلة وهيتم توجيهك لإتمام الدفع
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-[#2D3F60] text-white px-8 py-4 rounded-full hover:bg-[#253447] transition-colors flex items-center justify-center gap-3 text-lg mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>جاري المعالجة...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        <span>ادفع {getAmount()} بأمان</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    🔒 معاملة آمنة ومشفرة بالكامل
                  </p>
                </form>
              </div>

              {/* Security Badges */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>SSL مشفر</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>دفع آمن 100%</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h3 className="text-xl mb-6">ملخص الطلب</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">المنتج</div>
                    <div className="font-medium">{getItemTitle()}</div>
                  </div>

                  {bookingData.itemType === 'session' && bookingData.date && (
                    <>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">التاريخ</div>
                        <div>{bookingData.date}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">الوقت</div>
                        <div>{bookingData.time}</div>
                      </div>
                    </>
                  )}

                  {bookingData.customerInfo && (
                    <div>
                      <div className="text-sm text-gray-600 mb-1">الاسم</div>
                      <div>{bookingData.customerInfo.name}</div>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>المبلغ الأساسي</span>
                    <span>{getAmount()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>الضرائب</span>
                    <span>0 جنيه</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="text-lg">الإجمالي</span>
                    <span className="text-2xl text-[#2D3F60]">{getAmount()}</span>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">
                      <div className="font-medium mb-1">ضمان استرجاع المبلغ</div>
                      <div className="text-green-700">
                        إذا لم تكن راضي عن الخدمة، يمكنك استرجاع المبلغ خلال 7 أيام
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(-1)}
                  className="w-full mt-4 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>رجوع</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
