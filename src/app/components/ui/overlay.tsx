import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Dialog = ({ trigger, children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl min-w-[300px] relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
