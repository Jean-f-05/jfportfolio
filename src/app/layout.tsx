import StyledComponentsRegistry from './lib/registry';
import { Providers } from './providers';
import { Koulen } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const koulen = Koulen({
  weight: '400',
  subsets: ['khmer']
});

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
    <html lang="en" className={koulen.className}>

      <StyledComponentsRegistry>
        <Providers>{children}</Providers>
      </StyledComponentsRegistry>
    </html>
  )
}
