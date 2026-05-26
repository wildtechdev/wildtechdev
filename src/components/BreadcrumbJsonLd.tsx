type Crumb = {
  name: string;
  url: string;
};

/**
 * Renders BreadcrumbList structured data. Helps Google show
 * "Home > X > Y" trails in search results and qualify the page
 * for richer SERP treatment.
 */
export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
