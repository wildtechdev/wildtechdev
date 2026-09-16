import PhoneMockup from "@/components/PhoneMockup";
import DesktopMockup from "@/components/DesktopMockup";

// Single entry point for product artwork. Most products are iOS apps and get a
// phone frame; DragIn1 is a Windows app and gets a desktop window instead.
// Call sites (home cards, /products, /work, /work/[slug]) render this rather
// than branching on the product id themselves.

export type MockupId =
  | "spirits-charleston"
  | "spirits-savannah"
  | "ez-fuse"
  | "churchd"
  | "vikingsense"
  | "we-the-people"
  | "dragin1";

const DESKTOP: ReadonlySet<MockupId> = new Set<MockupId>(["dragin1"]);

export function isDesktopMockup(id: MockupId): boolean {
  return DESKTOP.has(id);
}

export default function ProductMockup({
  product,
  size = "default",
  priority = false,
}: {
  product: MockupId;
  size?: "default" | "small";
  priority?: boolean;
}) {
  if (product === "dragin1") {
    return <DesktopMockup product="dragin1" size={size} priority={priority} />;
  }
  return <PhoneMockup product={product} size={size} priority={priority} />;
}
