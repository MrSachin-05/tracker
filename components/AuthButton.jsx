"use client";

import { useState } from "react";
import { signOut } from "@/app/action";
import AuthModal from "./AuthModal";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

export default function AuthButton({ user }) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (user) {
    return (
      <form action={signOut} className="relative z-[9999]">
        <Button
          variant="ghost"
          size="sm"
          type="submit"
          className="
            relative z-[9999]
            gap-2
            bg-white
            text-black
            font-bold
            border-2 border-white
            rounded-xl
            px-5
            py-2
            shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(34,211,238,0.4)]
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(34,211,238,0.7)]
            active:scale-95
          "
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <>
      <div className="relative z-[9999]">
        <Button
          onClick={() => setShowAuthModal(true)}
          variant="default"
          size="sm"
          className="
            relative z-[9999]
            gap-2
            bg-white
            text-black
            font-bold
            border-2 border-white
            rounded-xl
            px-5
            py-2
            shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(34,211,238,0.4)]
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(34,211,238,0.7)]
            active:scale-95
          "
        >
          <LogIn className="w-4 h-4" />
          Sign In
        </Button>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}