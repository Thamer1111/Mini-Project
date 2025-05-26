import { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "الاسم يجب أن يكون بين 3 و 50 حرفًا";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }
    if (formData.password.length < 8) {
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمتا المرور غير متطابقتين";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("تم إنشاء الحساب بنجاح! الرجاء تسجيل الدخول.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">إنشاء حساب</h2>
        <div className="space-y-4">
          <div>
            <label className="block">الاسم الكامل</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block">كلمة المرور</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label className="block">تأكيد كلمة المرور</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            تسجيل
          </button>

          <Link to="/login" className="text-blue-600 underline">تسجيل الدخول </Link>
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;

