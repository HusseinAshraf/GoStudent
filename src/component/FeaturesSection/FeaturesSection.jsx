import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[rgb(244,246,251)]" id="features-section">
      <div className="overflow-x-clip w-full 2xl:px-10">
        <div className="flex flex-col w-full items-center px-4 py-8 gap-y-4 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto lg:px-10 lg:py-16 lg:gap-x-8 lg:gap-y-10 2xl:max-w-[1536px] 2xl:w-full">
          <div className="w-full grid grid-cols-6 sm:grid-cols-12 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:gap-x-8 lg:gap-y-10">
            <div className="col-span-full lg:col-span-10 lg:col-start-2">
              <div className="w-full">
                <div className="flex flex-col gap-y-2 items-center">
                  <h2 className="font-raleway font-bold text-xl sm:text-2xl lg:text-[28px] lg:leading-[40px] text-center text-[rgb(9,38,138)]">
                    {t('getting_started')}
                  </h2>
                  <div className="font-worksans text-[rgb(1,9,17)] font-normal text-center lg:text-lg text-sm sm:text-base">
                    {t('award_winning_tutoring')}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2 sm:gap-4 lg:gap-8 col-span-6 grid-cols-1 sm:col-span-12 sm:grid-cols-3 lg:col-span-10 lg:col-start-2">
              {[1, 2, 3].map((step, index) => (
                <div key={index} className="w-full h-full">
                  <div className="flex flex-col w-full h-full grow bg-[rgb(255,255,255)] rounded border border-solid border-[rgb(241,240,233)] break-words shadow-lg p-4 gap-4 sm:p-6 sm:gap-6 lg:p-8 lg:gap-8">
                    <div className="font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[rgb(159,128,255)]">
                      {step}
                    </div>
                    <div className="flex flex-col w-full gap-2">
                      <h3 className="font-raleway text-[rgb(9,38,138)] font-bold text-lg sm:text-xl lg:text-2xl">
                        {t(`step_${step}_title`)}
                      </h3>
                      <div className="font-normal text-[rgb(1,9,17)] text-sm whitespace-pre-wrap sm:text-base lg:text-base">
                        {t(`step_${step}_description`)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-full sm:flex sm:justify-center">
              <div className="w-full max-w-full sm:w-auto flex items-center gap-2 justify-center sm:justify-start">
                <a
                  className="flex justify-center whitespace-nowrap w-full group box-border rounded px-6 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base xl:px-8 lg:py-3.5 lg:text-lg 2xl:px-8 2xl:py-[18px] 2xl:text-xl bg-transparent text-[rgb(11,47,172)] hover:text-[rgb(11,46,172)] underline"
                  href="https://www.gostudent.org/book-trial/?flow=multi&experiment=none-set&reachOutVia=Website&offBrand=false&lang=en&gtmId=GTM-N7N7Z9T&referring=https%3A%2F%2Fwww.google.com%2F&landingPage=https%3A%2F%2Fwww.gostudent.org%2Fen-gb%2F&origin=https%3A%2F%2Fwww.gostudent.org%2Fen-gb%2F&country=en&cookiesMarketing=true&cookiesNecessary=true&cookiesPreferences=true&cookiesStatistics=true&customSessionID=GS_f413a559-5342-4ccb-8b3f-fbc1ff848265"
                  rel="noopener"
                  target="_self"
                >
                  <div className="flex gap-x-2 justify-center items-center w-full">
                    <div className="break-words whitespace-pre-wrap  text-center max-w-full">
                      {t('get_started')}
                    </div>
                    <svg
                      className="stroke-[rgb(11,47,172)] fill-[rgb(11,47,172)] group-hover:stroke-[rgb(11,46,172)] group-hover:fill-[rgb(11,47,172)]"
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8352 9.44977C17.7986 9.39432 17.7559 9.34171 17.7071 9.2929C17.7071 9.2929 17.7071 9.2929 17.7071 9.29289L11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90236 3.68342 9.90236 4.31658 10.2929 4.70711L14.5858 9.00001H2.99999C2.44771 9.00001 1.99999 9.44772 1.99999 10C1.99999 10.5523 2.44771 11 2.99999 11H14.5858L10.2929 15.2929C9.90237 15.6834 9.90237 16.3166 10.2929 16.7071C10.6834 17.0976 11.3166 17.0976 11.7071 16.7071L17.7071 10.7071C18.0488 10.3654 18.0915 9.83792 17.8352 9.44977Z"
                      ></path>
                    </svg>
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

export default FeaturesSection;
