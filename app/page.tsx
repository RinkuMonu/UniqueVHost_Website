import HomeBanner from "@/components/homebanner";
import FeatureSection from "@/components/featuresection";
import ServiceSection from "@/components/servicesection";
import DataCenterSection from "@/components/datacentersection";
import HostingFeatureArea from "@/components/hostingfeaturearea";
import SecureManagement from "@/components/securemanagement";
import EliteHostFeatureArea from "@/components/elitehostingfeaturearea";
import Testimonials from "@/components/testimonials";
import LatestBlog from "@/components/latestblog";
import Newsletter from "@/components/newsletter";
import Faqs from "@/components/faqs";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeatureSection />
      <ServiceSection />
      <DataCenterSection />
      <HostingFeatureArea />
      <SecureManagement />
      <EliteHostFeatureArea />  
      <Testimonials />
      <LatestBlog />
      <Faqs />
      <Newsletter />
    </>
  );
}
