import ItemsCarousel from "@/components/Common/ItemsCarousel";
import Header from "@/components/Common/Header";
import CategoryCarousel from "../Home/CategoryCarousel";
const FullCarousel = ({products, id, label, title, isCategory=false}) => {
  return (
    <section className="container mx-auto border-b-[0.5px] md:pb-25 md:mb-25 pb-15 mb-15 border-black/30 mt-10">
        <Header label={label} title={title} showArrows={true} id={id}/>
        {isCategory ? <CategoryCarousel id={id}/>:
        products ? <ItemsCarousel id={id} products={products}/> : "Loading..."}
    </section>
  )
}
export default FullCarousel