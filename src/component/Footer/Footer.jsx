import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[rgb(11,47,172)] text-white" id="footer-section">
            <div className="overflow-x-clip w-full 2xl:px-10">
                <div className="flex flex-col w-full items-center px-4 py-8 gap-y-4 sm:px-6 sm:py-12 sm:gap-y-6 sm:m-auto lg:px-10 lg:py-16 lg:gap-x-8 lg:gap-y-10 2xl:max-w-[1536px] 2xl:w-full">

                    {/* Main Links */}
                    <div className="w-full sm:grid sm:grid-cols-12 lg:col-span-10 gap-x-8 gap-y-10">

                        {/* About GoStudent */}
                        <div className="sm:col-span-4 lg:col-span-2 gap-3 lg:col-start-2">
                            <div className="hidden sm:block w-full sm:mb-8 lg:mb-0 break-words">
                                <div className="font-bold text-lg mb-5">{t('footer.about.title')}</div>
                                <ul className="flex flex-wrap gap-y-3 gap-x-8 text-GSdeep/500 flex-col">
                                    <li><a className="text-white hover:text-GSblue/200" href="/en-gb/about-us/">{t('footer.about.whoWeAre')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en-gb/careers/">{t('footer.about.careers')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/partners">{t('footer.about.corporate')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/partners">{t('footer.about.schools')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/partners">{t('footer.about.affiliate')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/gostudent-in-the-news">{t('footer.about.newsroom')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="https://assets.gostudent.org/f/192322/x/78cac052b0/en_safeguarding-policy_sept2023.pdf" target="_blank" rel="noopener">{t('footer.about.safeguarding')}</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* For parents */}
                        <div className="sm:col-span-4 lg:col-span-2 gap-3">
                            <div className="hidden sm:block w-full sm:mb-8 lg:mb-0 break-words">
                                <div className="font-bold text-lg mb-5">{t('footer.parents.title')}</div>
                                <ul className="flex flex-wrap gap-y-3 gap-x-8 text-GSdeep/500 flex-col">
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/subjects">{t('footer.parents.subjects')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/tutoring-prices">{t('footer.parents.prices')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/tutoring-benefits">{t('footer.parents.benefits')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/tutoring-reviews">{t('footer.parents.reviews')}</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* For tutors */}
                        <div className="sm:col-span-4 lg:col-span-2 gap-3">
                            <div className="hidden sm:block w-full sm:mb-8 lg:mb-0 break-words">
                                <div className="font-bold text-lg mb-5">{t('footer.tutors.title')}</div>
                                <ul className="flex flex-wrap gap-y-3 gap-x-8 text-GSdeep/500 flex-col">
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/apply">{t('footer.tutors.apply')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/tutoring-benefits">{t('footer.tutors.benefits')}</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Customer service */}
                        <div className="sm:col-span-4 lg:col-span-2 gap-3">
                            <div className="hidden sm:block w-full sm:mb-8 lg:mb-0 break-words">
                                <div className="font-bold text-lg mb-5">{t('footer.support.title')}</div>
                                <ul className="flex flex-wrap gap-y-3 gap-x-8 text-GSdeep/500 flex-col">
                                    <li><a className="text-white hover:text-GSblue/200" href="https://help.gostudent.org/hc/en-gb" target="_blank" rel="noopener">{t('footer.support.help')}</a></li>
                                    <li><a className="text-white hover:text-GSblue/200" href="/en/contact">{t('footer.support.contact')}</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* App download */}
                        <div className="sm:col-span-4 lg:col-span-2">
                            <div className="w-full flex flex-col gap-4">
                                <div className="font-bold text-lg">{t('footer.download.title')}</div>
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                                    <a
                                        href="https://gostudent.onelink.me/PcNf/download"
                                        className="w-full flex items-center justify-center text-white bg-[rgb(7,28,103)] p-1 rounded-sm"
                                        aria-label={t('footer.download.aria')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* SVG هنا */}
                                        {t('footer.download.button')}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="w-full border-t border-white/20 my-8" />

                    {/* Social + Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-sm px-2">
                        <p className="text-center md:text-left">
                            {t("footer.bottom.copyright", { year: new Date().getFullYear() })}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/gostudent.global" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-8"><path d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 37.2562 10.7438 48 24 48C24.1406 48 24.2812 48 24.4219 47.9906V29.3156H19.2656V23.3063H24.4219V18.8812C24.4219 13.7531 27.5531 10.9594 32.1281 10.9594C34.3219 10.9594 36.2062 11.1188 36.75 11.1938V16.5563H33.6C31.1156 16.5563 30.6281 17.7375 30.6281 19.4719V23.2969H36.5813L35.8031 29.3063H30.6281V47.0719C40.6594 44.1938 48 34.9594 48 24Z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/gostudent_global/" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-8"><path d="M28.5938 24C28.5938 26.5371 26.5371 28.5938 24 28.5938C21.4629 28.5938 19.4062 26.5371 19.4062 24C19.4062 21.4629 21.4629 19.4062 24 19.4062C26.5371 19.4062 28.5938 21.4629 28.5938 24Z"></path><path d="M34.7432 15.8723C34.5223 15.2739 34.17 14.7323 33.7123 14.2877C33.2677 13.83 32.7264 13.4777 32.1277 13.2568C31.6421 13.0682 30.9126 12.8438 29.569 12.7826C28.1155 12.7163 27.6797 12.702 24 12.702C20.3199 12.702 19.8842 12.7159 18.431 12.7822C17.0874 12.8438 16.3575 13.0682 15.8723 13.2568C15.2736 13.4777 14.7319 13.83 14.2877 14.2877C13.83 14.7323 13.4777 15.2736 13.2565 15.8723C13.0679 16.3579 12.8434 17.0878 12.7822 18.4314C12.7159 19.8845 12.7017 20.3203 12.7017 24.0004C12.7017 27.6801 12.7159 28.1158 12.7822 29.5693C12.8434 30.913 13.0679 31.6425 13.2565 32.1281C13.4777 32.7268 13.8296 33.2681 14.2874 33.7127C14.7319 34.1704 15.2732 34.5227 15.8719 34.7435C16.3575 34.9325 17.0874 35.157 18.431 35.2181C19.8842 35.2844 20.3196 35.2983 23.9996 35.2983C27.6801 35.2983 28.1158 35.2844 29.5686 35.2181C30.9122 35.157 31.6421 34.9325 32.1277 34.7435C33.3296 34.2799 34.2795 33.33 34.7432 32.1281C34.9318 31.6425 35.1563 30.913 35.2178 29.5693C35.2841 28.1158 35.298 27.6801 35.298 24.0004C35.298 20.3203 35.2841 19.8845 35.2178 18.4314C35.1566 17.0878 34.9321 16.3579 34.7432 15.8723ZM24 31.0767C20.0914 31.0767 16.923 27.9086 16.923 24C16.923 20.0914 20.0914 16.9233 24 16.9233C27.9082 16.9233 31.0767 20.0914 31.0767 24C31.0767 27.9086 27.9082 31.0767 24 31.0767ZM31.3564 18.2974C30.4431 18.2974 29.7026 17.5569 29.7026 16.6436C29.7026 15.7302 30.4431 14.9897 31.3564 14.9897C32.2698 14.9897 33.0103 15.7302 33.0103 16.6436C33.0099 17.5569 32.2698 18.2974 31.3564 18.2974Z"></path><path d="M24 0C10.7472 0 0 10.7472 0 24C0 37.2528 10.7472 48 24 48C37.2528 48 48 37.2528 48 24C48 10.7472 37.2528 0 24 0ZM37.6981 29.6818C37.6315 31.1488 37.3982 32.1504 37.0576 33.0271C36.3417 34.8783 34.8783 36.3417 33.0271 37.0576C32.1508 37.3982 31.1488 37.6311 29.6821 37.6981C28.2125 37.7651 27.743 37.7812 24.0004 37.7812C20.2573 37.7812 19.7882 37.7651 18.3182 37.6981C16.8516 37.6311 15.8496 37.3982 14.9733 37.0576C14.0533 36.7115 13.2206 36.1692 12.5321 35.4679C11.8312 34.7798 11.2888 33.9467 10.9427 33.0271C10.6022 32.1508 10.3689 31.1488 10.3022 29.6821C10.2345 28.2122 10.2188 27.7427 10.2188 24C10.2188 20.2573 10.2345 19.7878 10.3019 18.3182C10.3685 16.8512 10.6014 15.8496 10.942 14.9729C11.2881 14.0533 11.8308 13.2202 12.5321 12.5321C13.2202 11.8308 14.0533 11.2885 14.9729 10.9424C15.8496 10.6018 16.8512 10.3689 18.3182 10.3019C19.7878 10.2349 20.2573 10.2188 24 10.2188C27.7427 10.2188 28.2122 10.2349 29.6818 10.3022C31.1488 10.3689 32.1504 10.6018 33.0271 10.942C33.9467 11.2881 34.7798 11.8308 35.4683 12.5321C36.1692 13.2206 36.7119 14.0533 37.0576 14.9729C37.3986 15.8496 37.6315 16.8512 37.6985 18.3182C37.7655 19.7878 37.7812 20.2573 37.7812 24C37.7812 27.7427 37.7655 28.2122 37.6981 29.6818V29.6818Z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/gostudent/" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-8"><path d="M24 0C10.7472 0 0 10.7472 0 24C0 37.2528 10.7472 48 24 48C37.2528 48 48 37.2528 48 24C48 10.7472 37.2528 0 24 0ZM17.0259 36.2812H11.1808V18.6962H17.0259V36.2812ZM14.1035 16.2949H14.0654C12.104 16.2949 10.8354 14.9447 10.8354 13.2572C10.8354 11.5316 12.1428 10.2188 14.1423 10.2188C16.1418 10.2188 17.3723 11.5316 17.4104 13.2572C17.4104 14.9447 16.1418 16.2949 14.1035 16.2949ZM38.1021 36.2812H32.2577V26.8737C32.2577 24.5094 31.4114 22.897 29.2965 22.897C27.6819 22.897 26.7202 23.9846 26.2976 25.0345C26.1431 25.4103 26.1053 25.9354 26.1053 26.4609V36.2812H20.2606C20.2606 36.2812 20.3372 20.3459 20.2606 18.6962H26.1053V21.186C26.8821 19.9878 28.2719 18.2834 31.3729 18.2834C35.2185 18.2834 38.1021 20.7968 38.1021 26.198V36.2812Z"></path></svg>
                            </a>
                            <a href="https://twitter.com/GoStudent_com" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-8"><path d="M21.0107 28.4963L28.8176 24L21.0107 19.5037V28.4963Z"></path><path d="M24 0C10.7472 0 0 10.7472 0 24C0 37.2528 10.7472 48 24 48C37.2528 48 48 37.2528 48 24C48 10.7472 37.2528 0 24 0ZM38.9963 24.0245C38.9963 24.0245 38.9963 28.8918 38.3789 31.2389C38.0328 32.5236 37.0199 33.5365 35.7352 33.8822C33.3882 34.5 24 34.5 24 34.5C24 34.5 14.6364 34.5 12.2648 33.8577C10.9801 33.512 9.96716 32.4987 9.62109 31.214C9.0033 28.8918 9.0033 24 9.0033 24C9.0033 24 9.0033 19.1331 9.62109 16.786C9.9668 15.5013 11.0046 14.4635 12.2648 14.1178C14.6118 13.5 24 13.5 24 13.5C24 13.5 33.3882 13.5 35.7352 14.1423C37.0199 14.488 38.0328 15.5013 38.3789 16.786C39.0212 19.1331 38.9963 24.0245 38.9963 24.0245V24.0245Z"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
