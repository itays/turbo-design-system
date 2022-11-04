import React from "react";

const Button: React.FC<any> = () => {
  return (
    <button
      data-testid="my_button"
      onClick={() => {
        console.log("clicked");
      }}
    >
      Click me
    </button>
  );
};

export default Button;
