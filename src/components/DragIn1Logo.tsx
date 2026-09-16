import Image from "next/image";

/**
 * The DragIn1 mark.
 *
 * This renders the real brand artwork (`Logo_raw.png` from the DragIn1 repo,
 * trimmed of its baked-in drop shadow and resized for the web) rather than a
 * hand-drawn SVG approximation, so the site, the desktop app and the Chrome
 * extension all show exactly the same mark.
 *
 * `id` is accepted and ignored — it exists so callers can keep passing a
 * unique key, which earlier SVG-based markup needed for gradient ids.
 */
export default function DragIn1Logo({
  size = 96,
  className = "",
  priority = false,
}: {
  size?: number;
  /** Unused; kept so existing call sites stay valid. */
  id?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/dragin1-logo.png"
      alt="DragIn1"
      width={size}
      height={size}
      priority={priority}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
