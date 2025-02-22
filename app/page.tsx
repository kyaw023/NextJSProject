import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';


export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
          <Image
              src="/hero-desktop.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
              src="/hero-mobile.png"
              width={500}
              height={620}
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing mobile version"
          />
      </main>
  );
}
