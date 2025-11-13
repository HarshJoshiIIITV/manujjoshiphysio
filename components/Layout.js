import Header from "./Header";
import { Poppins,  Montserrat } from "next/font/google";
import CallPopIcon from "./CallPopIcon";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});


export default function Layout({ children }) {
  return (
     <div className={`${poppins.variable} ${montserrat.variable}`}>
      <Header />
      <main>{children}</main>
      <CallPopIcon />
    </div>
  );
}
