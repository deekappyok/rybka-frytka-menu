import '../styles/globals.scss'
import localFont from '@next/font/local';
import type { AppProps } from 'next/app'

const font=localFont({src:[{path:"../../public/fonts/Gilroy-Extrabold.woff",weight:"800",style:"normal"},{path:"../../public/fonts/Gilroy-Bold.woff",weight:"700",style:"normal"},{path:"../../public/fonts/Gilroy-Semibold.woff",weight:"600",style:"normal"},{path:"../../public/fonts/Gilroy-Medium.woff",weight:"500",style:"normal"},{path:"../../public/fonts/Gilroy-Regular.woff",weight:"400",style:"normal"},{path:"../../public/fonts/Gilroy-Light.woff",weight:"300",style:"normal"},]});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={`${font.className} ${'font_module'}`}>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp;
