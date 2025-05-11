import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';  

const subjects = [
    { title: 'maths', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/20ffab5a71/icn_maths.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/maths/' },
    { title: 'german', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/a30aff5882/icn_german.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/german/' },
    { title: 'physics', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/3e6a8637eb/icn_physics.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/physics/' },
    { title: 'english', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/625a8fc7ef/icn_english.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/english/' },
    { title: 'chemistry', imgSrc: 'https://assets.gostudent.org/f/192322/49x48/1b5691c172/icn_chemistry.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/chemistry/' },
    { title: 'gcse', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/28ec29e9e2/icn_exam-prep.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/gcse/' },
    { title: 'french', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/52d73d9a36/icn_french.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/french/' },
    { title: 'latin', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/31718480fc/icn_latin.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/latin/' },
    { title: 'biology', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/467fc770e6/icn_biology.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/biology/' },
    { title: 'spanish', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/4a519d1f4f/icn_es.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/spanish/' },
    { title: 'italian', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/def70fc1b0/icn_ita.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/italian/' },
    { title: 'geography', imgSrc: 'https://assets.gostudent.org/f/192322/48x48/1790b23b60/icn_geography.svg', link: 'https://www.gostudent.org/en-gb/online-tutoring/geography/' }
];

const WebsiteSubjects = () => {
    const { t } = useTranslation();  
    const [showSubjects, setShowSubjects] = useState(false);

    const toggleSubjects = () => {
        setShowSubjects(prevState => !prevState);
    };

    return (
        <section className="w-full bg-white" id="website-subjects">
            <div className="overflow-x-clip w-full 2xl:px-10">
                <div className="flex flex-col w-full items-center px-4 py-8 gap-y-4 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto lg:px-10 lg:py-16 lg:gap-x-8 lg:gap-y-10 2xl:max-w-[1536px] 2xl:w-full">
                    <div className="w-full">
                        <div className="w-full">
                            <div className="flex flex-col gap-y-2 items-center">
                                <h2 className="font-raleway font-bold text-xl sm:text-2xl lg:text-[28px] lg:leading-[40px] text-center text-[rgb(9,38,138)]">
                                    {t('mostPopularSubjects')}  {/* الترجمة هنا */}
                                </h2>
                                <div className="font-worksans text-[rgb(1,9,17)] font-normal text-center lg:text-lg text-sm sm:text-base">
                                    {t('description')}  {/* الترجمة هنا */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-7 sm:gap-9 lg:gap-[54px]">
                        <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-4 xl:gap-8 justify-center">
                            {subjects.map((subject, index) => (
                                <div
                                    key={index}
                                    className="flex w-full basis-[calc((100%-theme(spacing.2))/2)] sm:basis-[calc((100%-3*theme(spacing.4))/4)] lg:basis-[calc((100%-5*theme(spacing.4))/6)] xl:basis-[calc((100%-5*theme(spacing.8))/6)]"
                                >
                                    <a
                                        className="p-4 sm:p-6 xl:p-8 border border-[rgb(109,130,205)] shadow-lg rounded hover:bg-[rgba(167,183,243,0.29)] w-full"
                                        href={subject.link}
                                        rel="noopener"
                                        target="_self"
                                    >
                                        <div className="break-words flex flex-col items-center gap-2 xl:gap-4">
                                            <img
                                                loading="lazy"
                                                className="h-12 sm:h-14 lg:h-16"
                                                src={subject.imgSrc}
                                                alt={subject.title}
                                            />
                                            <div className="w-full text-center font-worksans text-GSdeep/500 font-medium text-sm sm:text-base xl:text-lg">
                                                {t(`subjects.${subject.title}`)}  {/* ترجمة المادة */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-[22px] sm:gap-[30px] lg:gap-[46px]">
                            <button
                                className="flex items-center justify-center gap-2 text-lg font-medium underline text-[rgb(11,47,172)] cursor-pointer"
                                type="button"
                                onClick={toggleSubjects}
                            >
                                {t('seeAllSubjects')}  
                                <svg
                                    className={`stroke-GSblue/600 transition-transform duration-300 ${showSubjects ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path d="M16 8L10 14L4 8" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </div>
                        {showSubjects && (
                            <div className="text-gray-500 grid grid-cols-2 gap-2 gap-y-3 sm:grid-cols-4 sm:gap-4 sm:gap-y-5 lg:grid-cols-6 lg:gap-8">
                                <a
                                    className="text-center underline text-[rgb(11,47,172)] text-sm lg:text-base"
                                    href="https://www.gostudent.org/en-gb/online-tutoring/economics/"
                                    rel="noopener"
                                    target="_self"
                                >
                                    {t('subjects.economics')}
                                </a>
                                <a
                                    className="text-center underline text-[rgb(11,47,172)] text-sm lg:text-base"
                                    href="https://www.gostudent.org/en-gb/online-tutoring/history/"
                                    rel="noopener"
                                    target="_self"
                                >
                                    {t('subjects.history')}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteSubjects;
