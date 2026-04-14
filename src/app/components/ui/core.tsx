import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({ className, ...props }: any) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-black text-white hover:opacity-80",
        className
      )}
      {...props}
    />
  );
};

export const Input = ({ className, ...props }: any) => {
  return (
    <input
      className={cn(
        "border px-3 py-2 rounded-md w-full outline-none",
        className
      )}
      {...props}
    />
  );
};

export const Label = ({ className, ...props }: any) => {
  return (
    <label className={cn("text-sm font-medium", className)} {...props} />
  );
};
