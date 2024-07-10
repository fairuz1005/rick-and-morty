// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import client from '../apollo/client';
import Navbar from '@/components/NavBar';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></Script>
        <Navbar />
        <div> 
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;

