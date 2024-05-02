import { ScopedProviders } from "../Providers"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScopedProviders>
        {children}
      </ScopedProviders>
    </>
  )
}