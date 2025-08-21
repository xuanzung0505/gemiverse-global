import DefaultLayout from "@/components/DefaultLayout";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <IntroSection />
        <Footer />
      </div>
    </DefaultLayout>
  );
}
