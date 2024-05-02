import Link from "next/link"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="isolate relative">
      <Link className="text-sm h-10 pl-2 z-10 pr-4 gap-0 font-semibold bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 absolute left-0 top-6 md:left-6" href="/">
        <span className="text-black">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.25 8.75L9.75 12L13.25 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
        </span>
        Home
      </Link>
      {children}
    </div>
  )
}