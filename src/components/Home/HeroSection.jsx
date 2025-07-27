"use client"
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import HeroImage from "@/assets/hero.png";

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%',
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    border: "1px solid white",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
            />
        ),
    };

    const images = [
        {src: HeroImage, alt: "Hero Image 1"},
        {src: HeroImage, alt: "Hero Image 2"},
        {src: HeroImage, alt: "Hero Image 3"}
    ];

    return (
        <section className="mt-12 lg:ml-12 container mx-auto w-3/4 h-fit">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center h-full">
                        <Image src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default HeroSection
