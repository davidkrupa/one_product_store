"use client";

import { useState } from "react";
import { Multicolumn } from ".";

const Faq = () => {
  const [curentlyOpen, setCurentlyOpen] = useState(false);

  const questions = [
    {
      question: "Are headphones used both for iOS and Android devices?",
      answer:
        "Yes, the headphones are compatible with any Bluetooth-enabled device, including smartphones, tablets, and laptops running iOS, Android, Windows, and macOS operating systems.",
    },
    {
      question: "Can I use the headphones for gaming?",
      answer:
        "While these headphones can be used for gaming, they may not provide the same level of performance and features as dedicated gaming headsets. However, they still offer excellent sound quality, comfort, and noise cancellation suitable for casual gaming experiences.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <h2 className="py-10 text-3xl font-semibold">
        Frequently Asked Questions
      </h2>

      <Multicolumn cols={2}>
        {questions?.map((item) => (
          <div>
            <h5
              onClick={() => setCurentlyOpen((prev) => !prev)}
              className="p-3 rounded-xl bg-slate-400 text-base font-semibold"
            >
              {item.question}
            </h5>
            {curentlyOpen && (
              <p className="p-3 rounded-xl bg-slate-300">{item.answer}</p>
            )}
          </div>
        ))}
      </Multicolumn>
    </div>
  );
};

export default Faq;
