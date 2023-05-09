import StyledComponentsRegistry from './lib/registry';


export const metadata = {
  title: 'Jean \'s Portfolio ',
  description: 'Latest version of Jean \'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  )
}
