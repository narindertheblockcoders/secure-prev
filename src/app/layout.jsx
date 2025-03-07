import {
  Syne,
  Aladin,
  Big_Shoulders_Display,
  Marcellus,
  Onest,
  Arvo
} from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.scss";
import "./globals.css";
import Script from "next/script";
import AnimationHeader from "../components/animation_header"

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
const big_shoulders = Big_Shoulders_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-shoulders",
});
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

const onEst = Onest({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-onest",
});

const arvo = Arvo({
  weight: ["400", "700" ],
  subsets: ["latin"],
  variable: "--tp-ff-arvo",
});

export const metadata = {
  title: "Secure 365 - Cybersecurity Solutions & Digital Portfolio",
  description:
    "Secure 365 is a leading cybersecurity agency specializing in comprehensive digital protection solutions. Our portfolio showcases a diverse range of services designed to safeguard your digital assets and ensure robust security measures. Explore our work to see how we can help you achieve a secure digital environment.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${onEst.variable}`}
    >
      <head>
        <title>Secure 365 - A Creative Portfolio Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Download the best Creative Portfolio HTML Template in 2024"
        />
        <meta name="author" content="ClaPat Studio" />
        <link rel="stylesheet" href="/css/content.css" />
        <link rel="stylesheet" href="/css/showcase.css" />
        <link rel="stylesheet" href="/css/portfolio.css" />
        <link rel="stylesheet" href="/css/shortcodes.css" />
        <link rel="stylesheet" href="/css/assets.css" />
        <meta
          property="og:image"
          content="http://clapat.ro/themes/nanotech/prez/01_preview.png"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,450,500,600,700"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <Script src="/js/jquery.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.4.0/smooth-scrollbar.js" defer></Script>
        <Script src="/js/clapat.js" defer></Script>
        <Script src="/js/plugins.js" defer></Script>
        <Script src="/js/pain.js" defer></Script>

        <Script src="/js/common.js" defer></Script>
        <Script src="/js/contact.js" defer></Script>
        <Script src="/js/scripts.js" defer></Script>
      </head>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable} `}
      >
        <ThemeProvider defaultTheme="light">
          <AnimationHeader/>
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
