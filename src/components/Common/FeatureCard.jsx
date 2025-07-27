"use client"

const FeatureCard = ({ title, description, icon: Icon}) => {
    return (
        <div className="text-center p-6 flex flex-col items-center justify-between">
            <div className="text-3xl mb-2 text-white bg-black rounded-full outline border-gray-200 w-20 h-20 flex justify-center items-center border-16"><Icon className="w-10 h-10"/></div>
            <h4 className="font-bold mb-1 text-base sm:text-lg">{title}</h4>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
}

export default FeatureCard