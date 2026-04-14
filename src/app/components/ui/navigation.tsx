import React from "react";
import { cn } from "@/lib/utils";

export const NavBar = ({ className, ...props }: any) => {
  return (
    <nav
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b",
        className
      )}
      {...props}
    />
  );
};

export const NavItem = ({ className, ...props }: any) => {
  return (
    <a
      className={cn("text-sm hover:underline cursor-pointer", className)}
      {...props}
    />
  );
};
