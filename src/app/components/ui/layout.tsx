import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({ className, ...props }: any) => {
  return (
    <div
      className={cn("border rounded-xl p-4 shadow-sm bg-white", className)}
      {...props}
    />
  );
};

Card.Header = ({ className, ...props }: any) => (
  <div className={cn("mb-2 font-semibold", className)} {...props} />
);

Card.Content = ({ className, ...props }: any) => (
  <div className={cn("text-sm", className)} {...props} />
);

export const Container = ({ className, ...props }: any) => {
  return (
    <div className={cn("max-w-5xl mx-auto px-4", className)} {...props} />
  );
};
