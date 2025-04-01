import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-10 h-5 rounded-full transition ${
          isOn ? "bg-blue-500" : "bg-stone-700"
        }`}
      >
        <div
          className={`absolute top-0 w-5 h-5 bg-white rounded-full transition ${
            isOn ? "translate-x-5 " : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Toggle;
