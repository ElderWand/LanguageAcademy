"use client";
import { useLevelTest } from "@/context/LevelTestContext";
import { LevelTestForm } from "@/components/forms/LevelTestForm";

export function LevelTestModal() {
  const { isOpen, closeTestModal } = useLevelTest();
  return <LevelTestForm open={isOpen} onOpenChange={(open) => { if (!open) closeTestModal(); }} />;
}
