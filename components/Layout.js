import Header from "./Header";
import { Poppins, Inter, Montserrat } from "next/font/google";
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

export const metadata = {
  title: "Best Physiotherapy Services in Jaipur | Dr. Manuj Joshi",
  description: "Professional physiotherapy and rehabilitation services. Book appointments online.",
  keywords: "physiotherapy, pain relief,pain, rehab, Jaipur, Physio",
  openGraph: {
    title: "Dr. Manuj Physiotherapy Clinic",
    description: "Expert physiotherapy and rehabilitation in Jaipur",
    url: "https://manujjoshiphysio.com",
    siteName: "Dr. Manuj Clinic",
    locale: "en_IN",
    type: "website",
  },
};


export default function Layout({ children }) {
  return (
    <div className={`${poppins.variable} ${montserrat.variable}`}>
      <Header />
      <main>{children}</main>
      <CallPopIcon/>
    </div>
  );
}
