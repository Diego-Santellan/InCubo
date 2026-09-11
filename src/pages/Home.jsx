import TopBar from "@/components/housedeco/TopBar";
import Navbar from "@/components/housedeco/Navbar";
import Hero from "@/components/housedeco/Hero";
import Welcome from "@/components/housedeco/Welcome";
import WatchVideo from "@/components/housedeco/WatchVideo";
import Innovative from "@/components/housedeco/Innovative";
import SolutionsSplit from "@/components/housedeco/SolutionsSplit";
import Statistics from "@/components/housedeco/Statistics";
import Services from "@/components/housedeco/Services";
import LatestProject from "@/components/housedeco/LatestProject";
import Relentless from "@/components/housedeco/Relentless";
import HowWeWork from "@/components/housedeco/HowWeWork";
import ProjectCategories from "@/components/housedeco/ProjectCategories";
import Testimonials from "@/components/housedeco/Testimonials";
import TaglineBanner from "@/components/housedeco/TaglineBanner";
import Contact from "@/components/housedeco/Contact";
import FAQ from "@/components/housedeco/FAQ";
import Footer from "@/components/housedeco/Footer";

export default function Home() {
  return (
    <div className="font-body bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Welcome />
      <WatchVideo />
      <Innovative />
      <SolutionsSplit />
      <Statistics />
      <Services />
      <LatestProject />
      <Relentless />
      <HowWeWork />
      <ProjectCategories />
      <Testimonials />
      <TaglineBanner />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}