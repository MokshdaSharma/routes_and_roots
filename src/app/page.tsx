import VisualOpening from '@/components/VisualOpening';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TripOverview from '@/components/TripOverview';
import Itinerary from '@/components/Itinerary';
import Gallery from '@/components/Gallery';
import Experiences from '@/components/Experiences';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Registration from '@/components/Registration';
import About from '@/components/About';
import Footer from '@/components/Footer';
import MobileStickyFooter from '@/components/MobileStickyFooter';
import { featuredTrip } from '@/data/trips';

export default function HomePage() {
  const trip = featuredTrip;

  return (
    <>
      <VisualOpening />
      <Navbar />
      <main>
        <Hero trip={trip} />
        <TripOverview trip={trip} />
        <Itinerary trip={trip} />
        <Experiences trip={trip} />
        <Gallery trip={trip} />
        <Pricing trip={trip} />
        <FAQ trip={trip} />
        <About />
        <Registration trip={trip} />
      </main>
      <Footer trip={trip} />
      <MobileStickyFooter trip={trip} />
    </>
  );
}
