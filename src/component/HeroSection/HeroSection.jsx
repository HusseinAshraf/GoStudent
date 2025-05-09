import React from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    const features = [
        t("hero.features.tailoredLessons"),
        t("hero.features.betterGrades"),
        t("hero.features.subjectsLevels"),
        t("hero.features.flexibleSchedule"),
    ];

    const badgeImages = [
        "https://assets.gostudent.org/f/192322/580x502/a87e455cad/preis-leistungs.png/m/",
        "https://assets.gostudent.org/f/192322/304x512/4794124141/preis-leistung-2024.jpg/m/",
        "https://assets.gostudent.org/f/192322/1092x518/aad8cd13a6/screenshot-2024-08-22-at-16-13-06.png/m/1024x0",
    ];

    return (
        <section className="w-full bg-[rgb(11,47,172)] text-white" id="hero-section">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Content Section */}
                <div className="flex flex-col justify-center px-4 py-8 sm:px-6 lg:col-span-6 lg:px-10 lg:py-16 max-w-full lg:max-w-[752px] self-center order-2 lg:order-1">
                    <div className="flex flex-col gap-6 lg:gap-10">
                        <h1 className="font-raleway font-extrabold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl leading-snug text-white">
                            {t("hero.title")}
                        </h1>

                        <div className="flex flex-col gap-4">
                            {features.map((text, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 fill-GSpurple/500 mt-1" viewBox="0 0 24 24">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 21.5999C17.302 21.5999 21.6 17.3018 21.6 11.9999C21.6 6.69797 17.302 2.3999 12 2.3999C6.69809 2.3999 2.40002 6.69797 2.40002 11.9999C2.40002 17.3018 6.69809 21.5999 12 21.5999ZM17.0486 10.4484C17.5172 9.9798 17.5172 9.22 17.0486 8.75137C16.5799 8.28274 15.8201 8.28274 15.3515 8.75137L10.2 13.9028L8.04855 11.7514C7.57992 11.2827 6.82013 11.2827 6.3515 11.7514C5.88287 12.22 5.88287 12.9798 6.3515 13.4484L9.3515 16.4484C9.82013 16.9171 10.5799 16.9171 11.0486 16.4484L17.0486 10.4484Z"
                                            fill="#9F80FF"
                                        />
                                    </svg>
                                    <p className="text-base sm:text-lg lg:text-xl text-white">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="w-full max-w-xs">
                            <Link
                                to="/booking"
                                className="block text-center w-full px-6 py-3 sm:text-base text-sm lg:text-lg rounded ring-2 ring-[rgb(125,125,225)] text-[rgb(11,47,172)] bg-white hover:bg-GSblue/50 hover:ring-GSblue/300"
                            >
                                {t("hero.cta")}
                            </Link>
                        </div>

                        <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
                            {badgeImages.map((src, i) => (
                                <img key={i} src={src} alt={`badge-${i}`} className="h-20 sm:h-24 max-h-32" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-72 sm:h-96 lg:h-auto lg:col-span-6 order-1 lg:order-2">
                    <img
                        loading="eager"
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://assets.gostudent.org/f/192322/1688x1338/43220485fd/dach_portrait_photo_cutouts_amelie_child_1-green-1.png/m/1024x0"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
