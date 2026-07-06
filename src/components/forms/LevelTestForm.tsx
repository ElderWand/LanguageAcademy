"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface LevelTestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LevelTestForm({ open, onOpenChange }: LevelTestFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Test de niveau gratuit</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour commencer votre test de
            niveau personnalisé.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="level-test-name">Nom</Label>
            <Input
              id="level-test-name"
              placeholder="Votre nom complet"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="level-test-email">Email</Label>
            <Input
              id="level-test-email"
              type="email"
              placeholder="vous@exemple.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="level-test-phone">Numéro WhatsApp</Label>
            <Input
              id="level-test-phone"
              type="tel"
              placeholder="+212 6XX XXX XXX"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Langue souhaitée</Label>
            <Select defaultValue="anglais">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choisir une langue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="anglais">Anglais</SelectItem>
                <SelectItem value="francais">Français</SelectItem>
                <SelectItem value="espagnol">Espagnol</SelectItem>
                <SelectItem value="arabe">Arabe</SelectItem>
                <SelectItem value="allemand">Allemand</SelectItem>
                <SelectItem value="italien">Italien</SelectItem>
                <SelectItem value="chinois">Chinois</SelectItem>
                <SelectItem value="japonais">Japonais</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="mt-2 w-full bg-[#057A55] text-white hover:bg-[#046C4E] border-none font-bold rounded-xl py-6 text-xs shadow-sm"
          >
            Commencer mon test gratuit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
