import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">مرحبًا {user?.name}</h1>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/bmi")}
      >
        احسب كتلة جسمك
      </button>
    </div>
  );
}

export default Home;

