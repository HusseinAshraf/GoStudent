import React, { useEffect } from 'react';

const TrustpilotWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white" id="trustpilot-widget">
      <div className="overflow-x-clip w-full 2xl:px-10">
        <div className="flex flex-col w-full items-center px-4 py-8 gap-y-4 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto lg:px-10 lg:py-16 lg:gap-x-8 lg:gap-y-10 2xl:max-w-[1536px] 2xl:w-full">
          <div className="w-full grid grid-cols-6 sm:grid-cols-12 gap-x-2 sm:gap-x-4 lg:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-10">
            {/* العنوان */}
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="w-full">
                <div className="flex flex-col gap-y-2 items-center">
                  <h2 className="font-bold text-xl sm:text-2xl lg:text-[28px] lg:leading-[40px] text-center text-[rgb(9,38,138)]">
                    We’re always aiming for good grades
                  </h2>
                </div>
              </div>
            </div>

            {/* Trustpilot Widget */}
            <div
              className="trustpilot-widget w-full col-span-full col-start-1 sm:col-span-10 sm:col-start-2"
              data-locale="en-GB"
              data-template-id="53aa8912dec7e10d38f59f36"
              data-businessunit-id="5b9bd0cf3738d6000130250d"
              data-style-height="140px"
              data-style-width="100%"
              data-theme="light"
              data-stars="4,5"
              data-review-languages="en"
            ></div>

            {/* زر المشاهدة */}
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center">
                <div className="w-full max-w-full sm:w-auto flex items-center gap-2 justify-center sm:justify-start">
                  <a
                    href="/en-gb/reviews/"
                    rel="noopener"
                    target="_self"
                    className="flex justify-center whitespace-nowrap w-full group box-border rounded px-6 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base xl:px-8 lg:py-3.5 lg:text-lg 2xl:px-8 2xl:py-[18px] 2xl:text-xl bg-transparent text-[rgb(11,47,172)] hover:text-blue-800 underline"
                  >
                    <div className="flex gap-x-2 justify-center items-center w-full">
                      <div className="break-words whitespace-pre-wrap text-center max-w-full">
                        See what parents say about GoStudent
                      </div>
                      <svg
                        className="stroke-[rgb(11,47,172)] fill-[rgb(11,47,172)] group-hover:stroke-blue-800 group-hover:fill-[rgb(11,47,172)]"
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.8352 9.44977C17.7986 9.39432 17.7559 9.34171 17.7071 9.2929L11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90236 3.68342 9.90236 4.31658 10.2929 4.70711L14.5858 9.00001H2.99999C2.44771 9.00001 1.99999 9.44772 1.99999 10C1.99999 10.5523 2.44771 11 2.99999 11H14.5858L10.2929 15.2929C9.90237 15.6834 9.90237 16.3166 10.2929 16.7071C10.6834 17.0976 11.3166 17.0976 11.7071 16.7071L17.7071 10.7071C18.0488 10.3654 18.0915 9.83792 17.8352 9.44977Z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
