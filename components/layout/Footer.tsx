import Link from 'next/link'

export default function Footer() {
  const buildTimestamp = process.env.NEXT_PUBLIC_BUILD_TIMESTAMP
  const buildTime = buildTimestamp
    ? new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
      }).format(new Date(buildTimestamp))
    : 'Unavailable'

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold text-neutral-800">
          Digital Heroes
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/products" className="hover:text-neutral-900">Products</Link>
          <Link href="/pricing" className="hover:text-neutral-900">Pricing</Link>
          <Link href="/gallery" className="hover:text-neutral-900">Gallery</Link>
          <Link href="/dashboard" className="hover:text-neutral-900">My account</Link>
        </nav>
        <div className="flex flex-col sm:items-end">
          <span>© 2026 Digital Heroes</span>
          <span className="text-[10px]" title="Time shown in India Standard Time">
            Build: {buildTime} IST
          </span>
        </div>
      </div>
    </footer>
  )
}
