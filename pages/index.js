import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dr.Manuj Joshi (PT) — Consultant Physiotherapist</title>
        <meta name="description" content="Personalized physiotherapy with care & proven results" />
      </Head>

      <Hero />
      <Services />
      <Testimonials />
      <Contact/>
      <Footer/>
    </Layout>
  );
}
