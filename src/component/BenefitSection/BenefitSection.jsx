import React from "react";
import { useTranslation } from "react-i18next";

const BenefitSection = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white" id="benefit-section">
            <div className="overflow-x-clip w-full 2xl:px-10">
                <div className="flex flex-col w-full items-center px-4 py-8 gap-y-4 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto lg:px-10 lg:py-16 lg:gap-x-8 lg:gap-y-10 2xl:max-w-[1536px] 2xl:w-full">
                    <div className="w-full">
                        <div className="w-full">
                            <div className="w-full">
                                <div className="flex flex-col gap-y-2 items-center">
                                    <h2 className="font-raleway font-bold text-xl sm:text-2xl lg:text-[28px] lg:leading-[40px] text-center text-[rgb(9,38,138)]">
                                        {t('benefitSection.title')}
                                    </h2>
                                    <div className="font-worksans text-[rgb(1,9,17)] font-normal text-center lg:text-lg text-sm sm:text-base">
                                        {t('benefitSection.subtitle')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-2 sm:gap-4 lg:gap-8">
                        {/* First Block */}
                        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4 lg:gap-8">
                            <div className="grid rounded sm:rounded-lg gap-2 sm:gap-4 lg:gap-8 grid-cols-6 col-span-6 col-start-1 sm:grid-cols-12 sm:col-span-12 sm:col-start-1 lg:grid-cols-10 lg:col-start-2 lg:col-span-10 ">
                                <div className="self-center h-full w-full col-span-6 sm:col-span-6 lg:col-span-5 col-start-1">
                                    <div className="grid gap-2 grid-cols-6 h-full w-full relative">
                                        <img
                                            loading="lazy"
                                            className="rounded sm:rounded-lg col-span-6 col-start-1 row-start-1 m-auto"
                                            src="https://assets.gostudent.org/f/192322/5030x3353/e661010531/1-we-match-every-student.jpg/m/1024x0"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex self-center col-span-6 sm:col-span-6 lg:col-span-5 col-start-1 sm:col-start-7 lg:col-start-6">
                                    <div className="rounded-lg gap-2 flex flex-col justify-center bg-none text-left">
                                        <h3 className="text-[rgb(9,38,138)] font-raleway font-bold text-lg sm:text-xl lg:text-2xl">
                                            {t('benefitSection.block1Title')}
                                        </h3>
                                        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                                            <div className="flex flex-col gap-2">
                                                <div className="text-[rgb(1,9,17)] font-normal text-sm lg:text-base whitespace-pre-wrap">
                                                    {t('benefitSection.block1Description1')}
                                                    <br />
                                                    <br />
                                                    {t('benefitSection.block1Description2')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Block */}
                        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4 lg:gap-8">
                            <div className="grid rounded sm:rounded-lg gap-2 sm:gap-4 lg:gap-8 grid-cols-6 col-span-6 col-start-1 sm:grid-cols-12 sm:col-span-12 sm:col-start-1 lg:grid-cols-10 lg:col-start-2 lg:col-span-10 bg-[rgb(244,246,251)]">
                                <div className="self-center h-full w-full col-span-6 sm:col-span-6 lg:col-span-5 col-start-1 sm:col-start-7 lg:col-start-6 sm:order-last">
                                    <div className="grid gap-2 grid-cols-6 h-full w-full relative">
                                        <div className="self-center col-span-4 sm:col-span-full row-start-1 sm:col-start-1 col-start-3" data-testid="Scroll image">
                                            <svg viewBox="0 0 559 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M340.689 93.8708C348.448 94.9779 356.193 96.7178 362.44 98.3881C339.467 98.6334 314.443 122.13 306.609 129.032C228.243 198.037 203.876 315.206 195.203 369.165L11.603 304.791C45.541 175.504 193.533 70.4357 340.689 93.8708Z" className="fill-[#5dc18b]"></path>
                                                <path d="M631.585 -45.8393L692.073 141.475C675.671 155.229 647.684 167.261 611.005 172.861C512.311 182.333 405.732 101.275 341.718 94.1491C322.803 91.1358 306.261 90.9099 304.658 90.8373C394.982 78.1866 531.953 32.3661 631.58 -45.8498L631.585 -45.8393Z" className="fill-[#5f48d3]"></path>
                                            </svg>
                                        </div>
                                        <img
                                            loading="lazy"
                                            className="rounded sm:rounded-lg col-span-3 col-start-2 mt-auto mb-0 row-start-1 sm:ml-auto sm:mr-0 hidden sm:block"
                                            src="https://assets.gostudent.org/f/192322/604x801/d2bd70505f/2-one-to-one-online-lessons_jan.png/m/"
                                            alt=""
                                        />
                                    </div>

                                </div>
                                <div className="flex self-center col-span-6 sm:col-span-6 lg:col-span-5 col-start-1">
                                    <div className="rounded-lg gap-2 flex flex-col justify-center bg-none text-left  sm:text-left py-4 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-10 !pt-0 sm:!pt-8 sm:pl-8">
                                        <h3 className="text-[rgb(9,38,138)] font-raleway font-bold text-lg sm:text-xl lg:text-2xl">
                                            {t('benefitSection.block2Title')}
                                        </h3>
                                        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                                            <div className="flex flex-col gap-2">
                                                <div className="text-[rgb(1,9,17)] font-normal text-sm lg:text-base whitespace-pre-wrap">
                                                    {t('benefitSection.block2Description1')}
                                                    <br />
                                                    <br />
                                                    {t('benefitSection.block2Description2')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Block */}
                        <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                            <div className="grid rounded sm:rounded-lg gap-4 sm:gap-6 lg:gap-8 grid-cols-6 col-span-6 col-start-1 sm:grid-cols-12 sm:col-span-12 sm:col-start-1 lg:grid-cols-10 lg:col-start-2 lg:col-span-10 ">
                                <div className="col-span-full">
                                    <div className="h-full grid gap-4 sm:gap-6 lg:gap-8 grow grid-flow-row sm:grid-flow-col sm:auto-cols-fr">

                                        <div className="rounded-lg gap-4 flex flex-col bg-[rgb(236,230,255)] text-center py-4 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-10">
                                            <h3 className="text-[rgb(9,38,138)] font-raleway font-bold text-lg sm:text-xl lg:text-2xl">
                                                {t('benefitSection.block3Title1')}
                                            </h3>
                                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                                                <div className="flex flex-col gap-2">
                                                    <div className="text-[rgb(1,9,17)] font-normal text-sm lg:text-base whitespace-pre-wrap">
                                                        {t('benefitSection.block3Description1')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-lg gap-4 flex flex-col bg-[rgb(236,230,255)] text-center py-4 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-10">
                                            <h3 className="text-[rgb(9,38,138)] font-raleway font-bold text-lg sm:text-xl lg:text-2xl">
                                                {t('benefitSection.block3Title2')}
                                            </h3>
                                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                                                <div className="flex flex-col gap-2">
                                                    <div className="text-[rgb(1,9,17)] font-normal text-sm lg:text-base whitespace-pre-wrap">
                                                        {t('benefitSection.block3Description2')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center">
                        <div className="w-full max-w-full sm:w-auto block sm:block lg:block">
                            <div className="w-full flex flex-col gap-1 sm:gap-2 lg:gap-3 items-center max-w-full sm:w-auto">
                                <a
                                    className="flex justify-center whitespace-nowrap w-full group box-border text-white rounded px-6 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base xl:px-8 lg:py-3.5 lg:text-lg 2xl:px-8 2xl:py-[18px] 2xl:text-xl ring-inset ring-2 ring-[rgb(9,38,138)] bg-[rgb(11,47,172)] text-GSbase/white hover:bg-[rgb(9,38,138)] hover:ring-ring-[rgb(9,38,138)]"
                                    href="/de-de/wie-es-funktioniert/"
                                    rel="noopener"
                                    target="_self"
                                >
                                    <div className="flex gap-x-2 justify-center items-center w-full">
                                        <div className="break-words whitespace-pre-wrap text-center max-w-full">
                                            {t('benefitSection.seeHowItWorks')}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
