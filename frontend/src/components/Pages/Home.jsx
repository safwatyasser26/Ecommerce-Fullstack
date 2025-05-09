
import OldSideBar from "@components/Home/OldSideBar";
import OldHeroSection from "@components/Home/OldHeroSection";
import Header from "@components/Common/Header";
import CategoryMobileSideBar from "@components/Home/Categories/CategoryMobileSideBar";
import Footer from "@components/Common/Footer";
import CountDownTimer from "@components/Common/CountDownTimer";
const Home = () => {
  return (
    <div>
      
      
      
      {/* Main Content */}
      <CategoryMobileSideBar />
      <section className="container flex mx-auto lg:px-12 px-6 h-90">
        <div className="hidden md:block"><OldSideBar /></div>
        <OldHeroSection />
      </section>
      <section className="container mx-auto lg:px-12 px-6 -mt-40 lg:mt-0 md:-mt-10">
        <Header title="Featured Products" label="Today's" showArrows={false} />
        <CountDownTimer targetDate={"2025-12-31T23:59:59" }/>
      </section>

      <Footer />
      

      
    </div>
  );
};

export default Home;
