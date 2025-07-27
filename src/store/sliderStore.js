import { create } from "zustand";

const useSliderStore = create((set, get) => ({
  // Stores a map of slider references, keyed by carouselId
  sliderRefs: {},

  // Action to set a slider reference for a specific carouselId
  setSliderRef: (carouselId, ref) => set((state) => ({
    sliderRefs: {
      ...state.sliderRefs,
      [carouselId]: ref,
    },
  })),

  // Action to remove a slider reference when a component unmounts
  removeSliderRef: (carouselId) => set((state) => {
    const newSliderRefs = { ...state.sliderRefs };
    delete newSliderRefs[carouselId];
    return { sliderRefs: newSliderRefs };
  }),

  // Action to go to the next slide for a specific carouselId
  nextSlide: (carouselId) => {
    const { sliderRefs } = get();
    const slider = sliderRefs[carouselId];
    if (slider) {
      slider.slickNext();
    } else {
      console.error(`Slider reference for ID "${carouselId}" not available. Make sure the Carousel component is mounted and react-slick is installed.`);
    }
  },

  // Action to go to the previous slide for a specific carouselId
  prevSlide: (carouselId) => {
    const { sliderRefs } = get();
    const slider = sliderRefs[carouselId];
    if (slider) {
      slider.slickPrev();
    } else {
      console.error(`Slider reference for ID "${carouselId}" not available. Make sure the Carousel component is mounted and react-slick is installed.`);
    }
  },
}));

export default useSliderStore;