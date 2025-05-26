import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import underw from "../imge/underw.jpg";
import netrel from "../imge/netrel.jpg";
import upw from "../imge/upw.jpg";
import fat from "../imge/fat.jpg";
import vfat from "../imge/vfat.jpg";

function Bmi() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    }
  }, []);

  const calculateBMI = () => {
    const h = height / 100;
    const bmiValue = weight / (h * h);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setStatus("وزن ناقص");
      setImageSrc(underw);
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus("وزن صحي");
      setImageSrc(netrel);
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus("وزن زائد");
      setImageSrc(upw);
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setStatus("سمنة");
      setImageSrc(fat);
    } else {
      setStatus("سمنة مفرطة");
      setImageSrc(vfat);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-4">حاسبة مؤشر كتلة الجسم</h1>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="الوزن (كجم)"
          className="border p-2 rounded w-full"
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
        <input
          type="number"
          placeholder="الطول (سم)"
          className="border p-2 rounded w-full"
          onChange={(e) => setHeight(parseFloat(e.target.value))}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={calculateBMI}
        >
          احسب
        </button>
      </div>
      {bmi && (
        <div className="mt-6 text-center">
          <p>مؤشر كتلة الجسم: {bmi}</p>
          <p>الحالة: {status}</p>
          {imageSrc && <img src={imageSrc} className="mt-4 w-32" />}
        </div>
      )}
    </div>
  );
}

export default Bmi;
