import { Header } from "./components/view/section/header";
import { VidSection } from "./components/view/section/vidsection";
import { About } from "./components/view/section/about/about";
import { PatNers } from "./components/view/section/patners";
import { OurProcess } from "./components/view/section/ourprocess";
import { FAQS } from "./components/view/section/FAQ";
import { ContactUs } from "./components/view/section/contact/contact";
import { InnerBackground } from "./components/innerbackgorund";

export const metadata = {
  title: 'Professional genius',
  description: "This is not a get rich quick scheme. If you're looking for a magic crypto formula that instantly brings in a lot of cash, I can tell you this is not for you. But for those willing to learn, put in effort, and have patience, the possibilities are vast.",
  applicationName: 'Professional genius',
  keywords: ['Professional genius', 'genius', 'crypto','community'],
  icons: {
    icon: '/assets/moblie.png',
    shortcut: '/assets/moblie.png',
    apple: '/assets/moblie.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/assets/moblie.png',
    },
  },
  openGraph: {
    title: 'Professional genius',
    description: "This is not a get rich quick scheme. If you're looking for a magic crypto formula that instantly brings in a lot of cash, I can tell you this is not for you. But for those willing to learn, put in effort, and have patience, the possibilities are vast.",
    url: 'https://www.progenius.io/home',
    siteName: 'www.professionalgenius.io',
    images: [
      {
        url: '/assets/moblie.png',
        width: 800,
        height: 600,
      },
      {
        url: '/assets/moblie.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'app',
    title: 'professional genius',
    description: "This is not a get rich quick scheme. If you're looking for a magic crypto formula that instantly brings in a lot of cash, I can tell you this is not for you. But for those willing to learn, put in effort, and have patience, the possibilities are vast.",
    images: {
      url: '/favicon_32.png',
      alt: 'progenius image',
    },
    app: {
      name: 'professional genius',
      id: {
        iphone: 'twitter_app://iphone',
      },
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: 'https://www.progenius.io/home',
  },
}

export default function Index() {
  return (
    <div className="relative">
      <InnerBackground />
      <div className="relative z-10">
        <Header />
        <VidSection />
        <About />
        <PatNers />
        <OurProcess />
        <FAQS />
        <ContactUs />
      </div>
    </div>
  );
}
