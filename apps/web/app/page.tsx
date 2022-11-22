"use client";
import { Button } from "@components/button";
// import "@components/button/styles.css";
export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-cheggOrange">
        Hello, Next.js!
      </h1>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </Button>
    </>
  );
}
