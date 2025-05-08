import React from 'react';

const statistics = [
    { value: '23k+', label: 'Tutors' },
    { value: '30+', label: 'Subjects' },
    { value: '96 %', label: '4 & 5-star reviews' },
    { value: '93 %', label: 'Successfully improve' },
];

export default function StatisticsSection() {
    return (
        <section className="bg-white" id="statistics-section">
            <div className="overflow-x-clip w-full 2xl:px-10">
                <div className="flex flex-col w-full items-center px-4 py-8 gap-y-4 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto lg:px-10 lg:py-16 lg:gap-x-8 lg:gap-y-10 2xl:max-w-[1536px] 2xl:w-full">
                    <div className="w-full grid grid-cols-6 sm:grid-cols-12 gap-x-2 sm:gap-x-4 lg:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-8 break-words">
                        <div className="gap-4 sm:gap-x-6 lg:gap-x-8 flex w-full flex-col sm:flex-row sm:items-center sm:justify-between col-span-full lg:col-start-2 lg:col-span-10 p-4 sm:p-6 lg:p-10 bg-white rounded border border-solid border-[rgb(240,241,244)] shadow-lg"
                            style={{
                                boxShadow: '0px 5px 10px rgba(0, 0, 0, .1), 0px 2px 4px rgba(0, 0, 0, .05)',
                            }}
                        >
                            <div className="sm:flex w-full h-full sm:items-center text-center grid grid-cols-2 gap-2 sm:gap-6 lg:gap-8 sm:justify-between">
                                {statistics.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:gap-2">
                                        <div className="font-raleway text-[28px] leading-10 font-extrabold text-center sm:leading-[48px] lg:leading-[56px] text-[rgb(11,47,172)] overflow-wrap-anywhere sm:text-[32px] lg:text-[40px]">
                                            {item.value}
                                        </div>
                                        <div className="text-center font-medium text-sm sm:text-base text-[rgb(4,45,86)] overflow-wrap-anywhere">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
