"use client";

import { useState } from "react";
import { addProduct } from "@/app/action";
import AuthModal from "./AuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function AddProductForm({ user }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("url", url);

    const result = await addProduct(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message || "Product tracked successfully!");
      setUrl("");
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">

          {/* Product URL Input */}
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste product URL (Amazon, Walmart, etc.)"
            className="
              h-12
              text-base

              bg-black/70
              text-white
              font-medium

              border-2
              border-white/20

              placeholder:text-white/45

              rounded-lg

              transition-all
              duration-300

              focus:bg-black/80
              focus:text-white
              focus:border-white
              focus:ring-2
              focus:ring-white/30

              focus:shadow-[0_0_15px_rgba(255,255,255,0.25)]

              hover:border-white/40
              hover:bg-black/75

              disabled:opacity-60
            "
            required
            disabled={loading}
          />

          {/* Track Price Button */}
          <Button
            type="submit"
            disabled={loading}
            className="
              bg-orange-500
              hover:bg-orange-600
              h-10
              sm:h-12
              px-8

              font-bold

              transition-all
              duration-300

              hover:scale-[1.02]
              hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]

              active:scale-95
            "
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>
      </form>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}