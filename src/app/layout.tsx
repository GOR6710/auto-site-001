export const metadata = {
  title: 'auto-site-001',
  description: 'Auto-generated site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
