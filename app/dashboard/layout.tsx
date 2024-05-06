import SideNav from '@/app/ui/dashboard/sidenav';
import { inter, roboto_mono , lusitana ,poppins } from '@/app/ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${roboto_mono.variable}`}>
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}