import React from "react";
import { cn } from "@/lib/utils";

export const Badge = ({ className, ...props }: any) => {
  return (
    <span
      className={cn(
        "px-2 py-1 text-xs rounded bg-gray-200",
        className
      )}
      {...props}
    />
  );
};

export const Alert = ({ className, ...props }: any) => {
  return (
    <div
      className={cn(
        "p-3 rounded-md border bg-yellow-50 text-sm",
        className
      )}
      {...props}
    />
  );
};
