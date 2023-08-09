"use client";

import { useState } from "react";

const Faq = () => {
  const [curentlyOpen, setCurentlyOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <h2 className="py-10 text-3xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-col md:grid-cols-2 gap-5">
        <div>
          <h5
            onClick={() => setCurentlyOpen((prev) => !prev)}
            className="p-3 rounded-xl bg-slate-400 text-base font-semibold"
          >
            Are headphones used both for iOS and Android devices?
          </h5>
          {curentlyOpen && (
            <p className="p-3 rounded-xl bg-slate-300">
              Yes, the headphones are compatible with any Bluetooth-enabled
              device, including smartphones, tablets, and laptops running iOS,
              Android, Windows, and macOS operating systems.
            </p>
          )}
        </div>
        <div>
          <h5
            onClick={() => setCurentlyOpen((prev) => !prev)}
            className="p-3 rounded-xl bg-slate-400 text-base font-semibold"
          >
            Can I use the headphones for gaming?
          </h5>
          {curentlyOpen && (
            <p className="p-3 rounded-xl bg-slate-300">
              While these headphones can be used for gaming, they may not
              provide the same level of performance and features as dedicated
              gaming headsets. However, they still offer excellent sound
              quality, comfort, and noise cancellation suitable for casual
              gaming experiences.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
