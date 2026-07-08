import Image from "next/image";

type Product =
  | "spirits-charleston"
  | "spirits-savannah"
  | "ez-fuse"
  | "churchd"
  | "vikingsense"
  | "we-the-people";

// Per-product screen config. The gradient shows behind the screenshot while
// it loads (and matches each product's accent palette).
const configs: Record<
  Product,
  {
    gradient: string;
    imageSrc: string;
    imageAlt: string;
  }
> = {
  "spirits-charleston": {
    gradient: "from-amber-950/80 via-amber-900/40 to-stone-950",
    imageSrc: "/products/spirits-charleston.jpg",
    imageAlt:
      "Spirits of Charleston app showing the Garden Theatre story at 371 King Street with audio player and historic photo",
  },
  "spirits-savannah": {
    gradient: "from-teal-950/80 via-emerald-900/30 to-stone-950",
    imageSrc: "/products/spirits-savannah.jpg",
    imageAlt:
      "Spirits of Savannah app showing the Olde Pink House story at 23 Abercorn Street with audio player and historic photo",
  },
  "ez-fuse": {
    gradient: "from-green-950/80 via-green-900/30 to-stone-950",
    imageSrc: "/products/ez-fuse.jpg",
    imageAlt:
      "EZ Fuse Tester app showing a FAIL No Continuity Detected result with the fuse test area",
  },
  churchd: {
    gradient: "from-indigo-950/80 via-indigo-900/30 to-stone-950",
    imageSrc: "/products/churchd.jpg",
    imageAlt:
      "Churchd community platform showing an upcoming Gary Gist Men's Breakfast event and a Harbor View Presbyterian book club post",
  },
  vikingsense: {
    gradient: "from-red-950/80 via-red-900/20 to-stone-950",
    imageSrc: "/products/vikingsense.jpg",
    imageAlt:
      "Viking Sensors dashboard showing real-time temperature and humidity data with a 24-hour graph",
  },
  "we-the-people": {
    gradient: "from-blue-950/85 via-indigo-950/40 to-slate-950",
    imageSrc: "/products/we-the-people.jpg",
    imageAlt:
      "We The People: Your Rights app home screen showing the four founding documents",
  },
};

export default function PhoneMockup({
  product,
  size = "default",
  priority = false,
}: {
  product: Product;
  size?: "default" | "small";
  /** Pass true when the mockup is above the fold so next/image preloads it. */
  priority?: boolean;
}) {
  const cfg = configs[product];
  const isSmall = size === "small";

  return (
    <div
      className={`relative ${
        isSmall
          ? "w-36 h-[160px] sm:h-64"
          : "w-48 h-64 sm:h-80 sm:w-56 lg:h-96"
      }`}
    >
      {/* Phone frame. Literal shadow color (not the themed black token) so
          the device keeps its drop shadow in light mode too. */}
      <div className="absolute inset-0 rounded-[24px] border border-[#333] bg-[#0a0a0a] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Dynamic Island */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 bg-[#000] rounded-full z-10 ${
            isSmall ? "top-1.5 w-10 h-2.5" : "top-2 w-14 h-3.5"
          }`}
        />

        {/* Screen content */}
        <div
          className={`absolute inset-[3px] rounded-[21px] overflow-hidden bg-gradient-to-b ${cfg.gradient}`}
        >
          <Image
            src={cfg.imageSrc}
            alt={cfg.imageAlt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes={isSmall ? "144px" : "224px"}
          />
        </div>
      </div>
    </div>
  );
}
