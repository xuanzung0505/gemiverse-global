import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import TopMenu from "@/components/TopMenu";

export default function Home() {
  return (
    <div className="home">
      <TopMenu />
      <IntroSection />
      <Footer />
    </div>
  );
}
