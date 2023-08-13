"use client";

import { useState } from "react";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity < 2) return;
    else setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center justify-start gap-2 w-1/2">
      <button
        onClick={() => handleDecrement()}
        className="w-12 h-12 flex-grow-0 flex-shrink-0 rounded-full font-medium text-2xl text-white bg-slate-500 hover:bg-slate-600 transition-colors ease-in-out"
      >
        -
      </button>
      <p className="w-[80px] flex-shrink-0 py-2 text-center rounded-full border-2 border-slate-800">
        {quantity}
      </p>
      <button
        onClick={() => handleIncrement()}
        className="w-12 h-12 flex-grow-0 flex-shrink-0 rounded-full font-medium text-2xl text-white bg-slate-500 hover:bg-slate-600 transition-colors ease-in-out"
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
