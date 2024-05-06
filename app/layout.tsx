import '@/app/ui/global.css';
import { inter, roboto_mono , lusitana ,poppins } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${lusitana.variable}  ${roboto_mono.variable} `}>{children}</body>
    </html>
  );
}
