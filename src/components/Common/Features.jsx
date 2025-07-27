
import  {CiDeliveryTruck, CiPhone} from "react-icons/ci";
import {GiMoneyStack} from "react-icons/gi";
import FeatureCard from "@/components/Common/FeatureCard";
const Features = () => {
    return (
        <div className="flex md:flex-row md:justify-evenly items-center flex-col">
            <FeatureCard
                title="Free and Fast Delivery"
                description="Free delivery for all orders over $140"
                icon={CiDeliveryTruck}
            />
            <FeatureCard
                title="24/7 Customer Service"
                description="Friendly 24/7 customer support"
                icon={CiPhone}
            />
            <FeatureCard
                title="Money Back Guarantee"
                description="We return money within 30 days"
                icon={GiMoneyStack}
            />
        </div>
    )
}

export default Features;