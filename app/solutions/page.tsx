import ImageTextCard from "@/components/common/ImageTextCard";
import BusinessImprovementSection from "@/components/solutions/BusinessImprovementSection";
import DigitalTransformationSection from "@/components/solutions/DigitalTransformationSection";
import LunionBookingDashboard from "@/components/solutions/LunionBookingDashboard";
import LunionBookingPage from "@/components/solutions/LunionBookingPage";
import LunionSysteme from "@/components/solutions/LunionSyteme";
import ProductsSection from "@/components/solutions/ProductsSection";
import React from "react";

const Page = () => {
  return (
    <div>
      <ImageTextCard
        imageUrl="/assets/images/all-img/image_back.png"
        text="Solutions"
      />
      <DigitalTransformationSection />
      <BusinessImprovementSection/>
      <ProductsSection />
      {/* <LunionBookingDashboard/> */}
      {/* <LunionSysteme/> */}
      {/* <LunionBookingPage/> */}
    </div>
  );
};

export default Page;
