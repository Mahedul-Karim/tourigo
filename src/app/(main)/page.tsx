import AboutCompany from "@/components/home/AboutCompany";
import Activity from "@/components/home/Activity";
import FeaturedTours from "@/components/home/FeaturedTours";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import TrendingDestination from "@/components/home/TrendingDestination";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {

  return (
    <>
    <Hero />
    <Activity />
    <FeaturedTours />
    <AboutCompany />
    <TrendingDestination />
    <WhyUs />
    <Testimonials />
    </>
  );
}
