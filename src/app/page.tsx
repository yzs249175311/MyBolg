"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button
        variant={"outline"}
        onClick={async (e) => {
          alert("hello world");
        }}
      >
        Test Button
      </Button>
    </div>
  );
}
