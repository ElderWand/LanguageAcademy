"use client";
import React from "react";
import { useLevelTest } from "@/context/LevelTestContext";

export function TestModalTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const { openTestModal } = useLevelTest();

  if (React.isValidElement(children)) {
    const child = children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void; className?: string }>;
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        if (child.props.onClick) {
          child.props.onClick(e);
        }
        openTestModal();
      },
      className: className ? `${className} ${child.props.className || ""}` : child.props.className
    });
  }

  return (
    <button onClick={openTestModal} className={className}>
      {children}
    </button>
  );
}

