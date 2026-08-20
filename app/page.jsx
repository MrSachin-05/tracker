import { createClient } from "@/utils/supabase/server";
import { getProducts } from "./action";
import AddProductForm from "@/components/AddProductForm";
import ProductCard from "@/components/ProductCard";
import { TrendingDown, Shield, Bell, Rabbit } from "lucide-react";
import AuthButton from "@/components/AuthButton";
import Image from "next/image";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const products = user ? await getProducts() : [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* =====================================================
          HEXAGON BACKGROUND
      ===================================================== */}
      <div className="fixed inset-0 z-0">
        <HexagonBackground className="absolute inset-0" />
      </div>

      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/40 via-black/10 to-black/40" />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <div className="relative z-[2]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="sticky top-0 z-[100] border-b border-white/15 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative z-[101]">

            {/* Logo */}
            <div className="group cursor-pointer">
              <Image
                src="/logo.png"
                alt="Deal Drop Logo"
                width={600}
                height={200}
                className="
                  h-15
                  w-auto
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
                  group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]
                  motion-reduce:transition-none
                "
              />
            </div>

            {/* Auth Button */}
            <div className="relative z-[9999]">
              <AuthButton user={user} />
            </div>
          </div>
        </header>

        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">

            {/* Creator Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-orange-500
                text-white
                px-6
                py-2
                rounded-full
                text-sm
                font-bold
                mb-8
                border
                border-orange-300/40
                shadow-[0_0_20px_rgba(249,115,22,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]
              "
            >
              Made with ❤️ by Mr.Sachin-05
            </div>

            {/* Hero Heading */}
            <h2
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                tracking-tight
                mb-6
                animate-in
                fade-in
                slide-in-from-bottom-5
                duration-700
              "
            >
              <span className="text-white drop-shadow-lg">
                Don't Miss a
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-orange-400
                  via-orange-500
                  to-yellow-300
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_25px_rgba(249,115,22,0.35)]
                "
              >
                Price Drop
              </span>
            </h2>

            {/* Hero Description */}
            <p
              className="
                text-lg
                md:text-xl
                text-white/85
                mb-12
                max-w-2xl
                mx-auto
                leading-relaxed
                font-medium
                animate-in
                fade-in
                slide-in-from-bottom-5
                duration-1000
              "
            >
              Track prices from any e-commerce site. Get instant alerts when
              prices drop.{" "}
              <span className="text-orange-300 font-bold">
                Save money effortlessly.
              </span>
            </p>

            {/* Add Product */}
            <div
              className="
                relative
                z-10
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <AddProductForm user={user} />
            </div>

            {/* =================================================
                FEATURES
            ================================================= */}
            {products.length === 0 && (
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">

                {FEATURES.map(
                  ({ icon: Icon, title, description }, index) => (
                    <div
                      key={title}
                      className="
                        group
                        relative
                        overflow-hidden
                        bg-black/55
                        backdrop-blur-md
                        p-6
                        rounded-2xl
                        border
                        border-white/15
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-orange-400/70
                        hover:bg-black/70
                        hover:shadow-[0_10px_40px_rgba(249,115,22,0.18)]
                      "
                    >
                      {/* Card Glow */}
                      <div
                        className="
                          absolute
                          -top-20
                          -right-20
                          w-40
                          h-40
                          rounded-full
                          bg-orange-500/10
                          blur-3xl
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                          pointer-events-none
                        "
                      />

                      {/* Icon */}
                      <div
                        className={`
                          relative
                          w-14
                          h-14
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          mb-4
                          mx-auto
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-3

                          ${
                            index === 0
                              ? "bg-cyan-400/15 border border-cyan-400/40 group-hover:border-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                              : index === 1
                              ? "bg-green-400/15 border border-green-400/40 group-hover:border-green-300 group-hover:shadow-[0_0_25px_rgba(74,222,128,0.35)]"
                              : "bg-orange-400/15 border border-orange-400/40 group-hover:border-orange-300 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]"
                          }
                        `}
                      >
                        <Icon
                          className={`
                            w-7
                            h-7
                            transition-all
                            duration-500
                            group-hover:scale-110

                            ${
                              index === 0
                                ? "text-cyan-300 group-hover:text-cyan-200"
                                : index === 1
                                ? "text-green-300 group-hover:text-green-200"
                                : "text-orange-300 group-hover:text-orange-200"
                            }
                          `}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="relative font-bold text-white text-lg mb-2 transition-colors duration-300 group-hover:text-orange-300">
                        {title}
                      </h3>

                      {/* Description */}
                      <p className="relative text-sm text-white/65 leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            PRODUCTS GRID
        ===================================================== */}
        {user && products.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 pb-20">

            <div className="flex items-center justify-between mb-6">
              <h3
                className="
                  text-2xl
                  font-black
                  text-white
                  transition-all
                  duration-300
                  hover:text-orange-300
                  hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]
                "
              >
                Your Tracked Products
              </h3>

              <span
                className="
                  text-sm
                  font-bold
                  text-orange-300
                  bg-orange-500/10
                  border
                  border-orange-400/30
                  px-4
                  py-2
                  rounded-full
                  transition-all
                  duration-300
                  hover:bg-orange-500/20
                  hover:border-orange-300
                  hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]
                  hover:scale-105
                "
              >
                {products.length}{" "}
                {products.length === 1 ? "product" : "products"}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 items-start">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {user && products.length === 0 && (
          <section className="max-w-2xl mx-auto px-4 pb-20 text-center">

            <div
              className="
                group
                relative
                overflow-hidden
                bg-black/55
                backdrop-blur-md
                rounded-2xl
                border-2
                border-dashed
                border-white/20
                p-12
                transition-all
                duration-500
                hover:border-orange-400/60
                hover:bg-black/65
                hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]
              "
            >
              <TrendingDown
                className="
                  w-16
                  h-16
                  text-orange-400
                  mx-auto
                  mb-4
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]
                "
              />

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  mb-2
                  transition-colors
                  duration-300
                  group-hover:text-orange-300
                "
              >
                No products yet
              </h3>

              <p className="text-white/65 group-hover:text-white/80 transition-colors duration-300">
                Add your first product above to start tracking prices!
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}