import DemarrezProjetSection from "@/components/common/DemarrezProjetSection";
import DownloadBrochure from "@/components/common/DownloadBrochure";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/hero/hero";
import ImageTextCard from "@/components/common/ImageTextCard";

import Issa from "@/components/common/nav/Issa";
import DreamTeamTabs from "@/components/home/DreamTeamTabs";
import FAQSection from "@/components/home/FAQSection";
import LunionLabPresentation from "@/components/home/LunionLabPresentation";
import NosSolutions from "@/components/home/NosSolutions";
import PurpleNavbar from "@/components/home/PurpleNavbar";
import SecteursActivites from "@/components/home/SecteursActivites";
import ServicesSection from "@/components/home/ServicesSection";
import WorkMethod from "@/components/home/WorkMethod";
import Faq1 from "@/components/mvpblocks/faq-1";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <LunionLabPresentation />
      <SecteursActivites />
      <NosSolutions />
      <PurpleNavbar />
      <DreamTeamTabs />
      <WorkMethod />
      <DemarrezProjetSection />
      <DownloadBrochure />
     <FAQSection/>
      <Footer />
    </div>
  );
}
