import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="font-bold py-2 px-4 rounded bg-cheggOrange text-white "
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
