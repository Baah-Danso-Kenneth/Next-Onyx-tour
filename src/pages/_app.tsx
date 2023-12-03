
import type { AppProps } from "next/app";
import {Raleway, Fira_Code, Cedarville_Cursive, Poppins,Montserrat} from 'next/font/google'
import '../scss/index.scss'


const slug_way = Montserrat({subsets:["latin"]})
const slug_fira = Fira_Code({
  subsets:['latin'],
  weight:['300', '400', '500', '600', '700']
});

const slug_cursive = Cedarville_Cursive({
  subsets: ["latin"],
    weight: '400'

})

const slug_pop = Poppins({
  subsets: ["latin"],
  weight: "300"
})

export default function App({Component, pageProps}:AppProps){
  return(
    <>
    <style jsx global>{`
    :root{
      --slug_way:${slug_way.style.fontFamily};
      --slug_fira:${slug_fira.style.fontFamily};
      --slug_cursive:${slug_cursive.style.fontFamily};
      --slug_poppins:${slug_pop.style.fontFamily};
    }
    `}</style>
      <Component {...pageProps}/>
    </>
  );
}






















