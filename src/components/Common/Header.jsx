import {ArrowRight, ArrowLeft} from 'lucide-react';
import useSliderStore from '@/store/sliderStore';
const Header = ({ id, label, title, showArrows = false }) => {
    
    const {nextSlide, prevSlide} = useSliderStore();

   
    return (
        <div className="flex justify-between items-end lg:mt-14 mt-2 mb-4 lg:mb-10">
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-5 h-10 bg-[#DB4444] rounded-sm text-xl font-bold" />
                    <span className="text-base text-[#DB4444] font-semibold">{label}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold mt-1 lg:mt-3">{title}</h2>
            </div>
            {showArrows && (
                <div className="flex gap-3">
                    <button onClick={() => prevSlide(id)} className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
                        <ArrowLeft size={24} />
                    </button>
                    <button onClick={() => nextSlide(id)} className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
                        <ArrowRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header