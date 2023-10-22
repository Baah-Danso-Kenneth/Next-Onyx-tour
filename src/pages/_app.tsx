
import type { AppProps } from "next/app";
import {Raleway, Fira_Code} from 'next/font/google'
import '../scss/index.scss'

const slug_way = Raleway({subsets:["latin"]});

const slug_fira = Fira_Code({
  subsets:['latin'],
  weight:['300', '400', '500', '600', '700']
});

export default function App({Component, pageProps}:AppProps){
  return(
    <>
    <style jsx global>{`
    :root{
      --slug_way:${slug_way.style.fontFamily};
      --slug_fira:${slug_fira.style.fontFamily};
    }
    `}</style>
      <Component {...pageProps}/>
    </>
  );
}






















