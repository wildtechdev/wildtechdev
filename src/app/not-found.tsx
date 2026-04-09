import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[8rem] sm:text-[10rem] font-[family-name:var(--font-serif)] italic text-border leading-none select-none">
          404
        </p>
        <h2 className="text-xl font-[family-name:var(--font-serif)] italic text-heading mt-4">
          Page not found
        </h2>
        <p className="text-sm text-muted mt-3 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-ghost mt-10">
          Back to home &rarr;
        </Link>
      </div>
    </section>
  );
}
