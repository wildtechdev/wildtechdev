import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-charcoal">
      <div className="text-center px-4">
        <h1 className="text-8xl sm:text-9xl font-bold text-electric/20">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">Page Not Found</h2>
        <p className="text-slate-400 mt-3 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-electric hover:bg-electric-dark text-white font-semibold transition-all hover:scale-105 mt-8"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
