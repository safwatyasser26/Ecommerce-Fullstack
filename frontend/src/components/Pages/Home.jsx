
import OldSideBar from "@components/Home/OldSideBar";
import OldHeroSection from "@components/Home/OldHeroSection";
import Header from "@components/Common/Header";
const Home = () => {
  return (
    <div>
      
      
      
      {/* Main Content */}
      
      <section className="container flex mx-auto lg:px-12 px-6 h-90">
        <OldSideBar />
        <OldHeroSection />
      </section>
      <section className="container mx-auto lg:px-12 px-6">
        <Header title="Featured Products" label="Shop Now" showArrows={false} />
      </section>
      

      
    </div>
  );
};

export default Home;
