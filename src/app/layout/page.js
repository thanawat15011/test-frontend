import Head from 'next/head';
import Topbar from './Topbar';
import Body from './Body';
import Footer from './Footer';
// import { RecoilRoot } from 'recoil'
export default function Paperbase({ children }) {
  return (
    <div>
      <Topbar />
      <main>
        <Body children={children}/>
      </main>
      <Footer />
    </div>
  );
}
