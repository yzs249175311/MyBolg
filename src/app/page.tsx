import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
