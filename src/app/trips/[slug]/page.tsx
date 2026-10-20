import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
import Footer from '@/components/Footer';
import MobileStickyFooter from '@/components/MobileStickyFooter';
import { getTripBySlug, trips } from '@/data/trips';

interface Props {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return { title: 'Trip Not Found — Routes & Roots' };

  return {
    title: `${trip.destination} Trip — Routes & Roots`,
    description: trip.description,
    openGraph: {
      title: `${trip.destination} — ${trip.title}`,
      description: trip.tagline,
      images: [trip.heroImage],
    },
  };
}

export default async function TripPage({ params }: Props) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

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
        <Registration trip={trip} />
      </main>
      <Footer trip={trip} />
      <MobileStickyFooter trip={trip} />
    </>
  );
}
