export default function AdminDashboardLoading() {
  return (
    <div className="space-y-8" role="status" aria-label="Loading admin dashboard">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
        <div className="space-y-2">
          <div className="h-3 w-24 animate-pulse rounded bg-neutral-700" />
          <div className="h-7 w-48 animate-pulse rounded bg-neutral-800" />
        </div>
        <div className="h-9 w-36 animate-pulse rounded-xl bg-neutral-800" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="space-y-3 rounded-2xl border border-neutral-700/60 bg-neutral-800/60 p-5"
          >
            <div className="h-3 w-24 animate-pulse rounded bg-neutral-700" />
            <div className="h-9 w-20 animate-pulse rounded bg-neutral-700" />
            <div className="h-3 w-32 animate-pulse rounded bg-neutral-800" />
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl border border-neutral-700/60 bg-neutral-800/40">
        <div className="space-y-2 border-b border-neutral-800 p-6">
          <div className="h-5 w-32 animate-pulse rounded bg-neutral-700" />
          <div className="h-3 w-56 animate-pulse rounded bg-neutral-800" />
        </div>
        <div className="divide-y divide-neutral-800">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="flex gap-6 p-5">
              <div className="h-4 w-20 animate-pulse rounded bg-neutral-700" />
              <div className="h-4 w-32 animate-pulse rounded bg-neutral-800" />
              <div className="h-4 w-24 animate-pulse rounded bg-neutral-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
