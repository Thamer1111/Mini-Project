import { useState } from "react";
import { Link, useNavigate } from "react-router";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("بيانات تسجيل الدخول غير صحيحة");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <label className="block">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block">كلمة المرور</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            دخول
          </button>

          <Link to="/signup" className="text-blue-600 underline">انشئ حساب </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

