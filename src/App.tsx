import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { DownloadApp } from './components/DownloadApp';
import { JoinUs } from './components/JoinUs';
import { AboutUs } from './components/AboutUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <DownloadApp />
      <JoinUs />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}