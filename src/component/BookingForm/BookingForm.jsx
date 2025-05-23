import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
// import { t } from "i18next";
import i18n from "../../i18n";
import Cleave from 'cleave.js/react';
import { ToastContainer, toast } from 'react-toastify';

const PhoneField = ({ label, name, setFieldValue, value, onBlur }) => (
    <div dir="ltr"> 
        <label className={`block text-sm font-medium mb-1 ${i18n.language === "ar" ? "text-right" : "text-left"}`}>{label}</label>
        <PhoneInput
            country={"ae"}
            value={value}
            onChange={(value) => setFieldValue(name, value)}
            onBlur={onBlur}
            inputStyle={{
                width: "100%",
                backgroundColor: "#f3f4f6",
                border: "none",
                boxShadow: "none",
                direction: "ltr" // تأكيد الاتجاه للحقل نفسه
            }}
            buttonStyle={{
                border: "none",
                backgroundColor: "#f3f4f6",
            }}
            containerStyle={{
                border: "none",
                backgroundColor: "#f3f4f6",
                direction: "ltr", // لضمان أن العلم يبقى على اليسار
            }}
        />
    </div>
);


function BookingForm() {
    const basePrice = 29;
    const discount = 0.04;
    const advanceDiscount = 0.03;
    const [selectedSessions, setSelectedSessions] = useState(8);
    const [selectedMonths, setSelectedMonths] = useState("6 MONTHS");
    const [payInAdvance, setPayInAdvance] = useState(false);
    const formId = "booking-form";
    const { t } = useTranslation();

    const [sessionsOptions, setSessionsOptions] = useState([]);
    const [monthsOptions, setMonthsOptions] = useState([]);

    useEffect(() => {
        setSessionsOptions([
            { label: t("sessionsOption8"), value: 8 },
            { label: t("sessionsOption12"), value: 12 },
            { label: t("sessionsOption16"), value: 16 },
        ]);

        setMonthsOptions([
            t("6Months"),
            t("12Months"),
            t("18Months"),
            t("24Months"),
            t("36Months"),
        ]);
    }, [i18n.language]);

    const monthsMultiplier = {
        [t("6Months")]: 1,
        [t("12Months")]: 0.9,
        [t("18Months")]: 0.85,
        [t("24Months")]: 0.8,
        [t("36Months")]: 0.75,
    };

    const discountedPrice = basePrice * (1 - discount);
    const finalPrice = payInAdvance ? discountedPrice * (1 - advanceDiscount) : discountedPrice;
    const total = (finalPrice * selectedSessions * monthsMultiplier[selectedMonths]).toFixed(2);
    const regularTotal = (basePrice * selectedSessions * monthsMultiplier[selectedMonths]).toFixed(2);
    const totalDiscount = (regularTotal - total).toFixed(2);



    const validationSchema = Yup.object({
        loginPhone: Yup.string().required(t("validation.loginPhone")),
        contactPhone: Yup.string().required(t("validation.contactPhone")),
        email: Yup.string().email(t("validation.email")).required(t("validation.emailRequired")),
        name: Yup.string().required(t("validation.name")),
        address: Yup.string().required(t("validation.address")),
        nr: Yup.string().required(t("validation.nr")),
        postalCode: Yup.string().required(t("validation.postalCode")),
        city: Yup.string().required(t("validation.city")),
        country: Yup.string().required(t("validation.country")),
        paymentMethod: Yup.string().required(t("validation.paymentMethod")),

        // Card fields validation
        cardHolder: Yup.string().when("paymentMethod", (paymentMethod, schema) =>
            paymentMethod === "Card" ? schema.required(t("validation.cardHolder")) : schema
        ),

        cardNumber: Yup.string().when("paymentMethod", (paymentMethod, schema) =>
            paymentMethod === "Card"
                ? schema
                    .length(19, t("validation.cardNumberLength"))
                    .required(t("validation.cardNumber"))
                : schema
        ),

        expiry: Yup.string().when("paymentMethod", (paymentMethod, schema) =>
            paymentMethod === "Card" ? schema.required(t("validation.expiry")) : schema
        ),

        cvc: Yup.string().when("paymentMethod", (paymentMethod, schema) =>
            paymentMethod === "Card"
                ? schema.length(3, t("validation.cvcLength")).required(t("validation.cvc"))
                : schema
        ),

        // SEPA fields validation
        iban: Yup.string().when("paymentMethod", (paymentMethod, schema) =>
            paymentMethod === "SEPA" ? schema.required(t("validation.iban")) : schema
        ),

        accountHolder: Yup.string().when("paymentMethod", (paymentMethod, schema) =>
            paymentMethod === "SEPA" ? schema.required(t("validation.accountHolder")) : schema
        )
    });

    const formik = useFormik({
        initialValues: {
            loginPhone: "",
            contactPhone: "",
            email: "",
            name: "",
            address: "",
            nr: "",
            postalCode: "",
            city: "",
            country: "",
            paymentMethod: "",
            cardHolder: "",
            cardNumber: "",
            expiry: "",
            cvc: "",
            iban: "",
            accountHolder: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("Form Data:", values);

            // Show success toast notification instead of alert
            toast.success(t("formSubmittedSuccess"), {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            resetForm();
        }
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            {/* Toast Container for notifications */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg">
                {/* LEFT FORM SECTION */}
                <form id={formId} className="space-y-4 p-6 bg-white rounded-lg shadow-md" onSubmit={formik.handleSubmit}>
                    <h2 className="text-lg font-semibold text-center">{t("registrationTitle")}</h2>
                    <p className="text-center text-sm text-gray-500">{t("platformInfo")}</p>

                    <PhoneField
                        label={t("loginPhone")}
                        name="loginPhone"
                        value={formik.values.loginPhone}
                        setFieldValue={formik.setFieldValue}
                        onBlur={() => formik.setFieldTouched("loginPhone", true)}
                    />
                    {formik.touched.loginPhone && formik.errors.loginPhone && (
                        <div className="text-red-500 text-sm">{formik.errors.loginPhone}</div>
                    )}

                    <PhoneField
                        label={t("contactPhone")}
                        name="contactPhone"
                        value={formik.values.contactPhone}
                        setFieldValue={formik.setFieldValue}
                        onBlur={() => formik.setFieldTouched("contactPhone", true)}
                    />
                    {formik.touched.contactPhone && formik.errors.contactPhone && (
                        <div className="text-red-500 text-sm">{formik.errors.contactPhone}</div>
                    )}

                    <input
                        name="email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        className="w-full p-2 rounded bg-gray-100"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    )}

                    <input
                        name="name"
                        type="text"
                        placeholder={t("namePlaceholder")}
                        className="w-full p-2 rounded bg-gray-100"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 text-sm">{formik.errors.name}</div>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                        <input
                            name="address"
                            type="text"
                            placeholder={t("address")}
                            className="p-2 rounded bg-gray-100"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />

                        <input
                            name="nr"
                            type="text"
                            placeholder={t("nr")}
                            className="p-2 rounded bg-gray-100"
                            value={formik.values.nr}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        {formik.touched.address && formik.errors.address && (
                            <div className="text-red-500 text-sm">{formik.errors.address}</div>
                        )}

                        {formik.touched.nr && formik.errors.nr && (
                            <div className="text-red-500 text-sm">{formik.errors.nr}</div>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <input
                            name="postalCode"
                            type="text"
                            placeholder={t("postalCode")}
                            className="p-2 rounded bg-gray-100"
                            value={formik.values.postalCode}
                            onChange={formik.handleChange}
                        />
                        <input
                            name="city"
                            type="text"
                            placeholder={t("city")}
                            className="p-2 rounded bg-gray-100"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                        />
                        <input
                            name="country"
                            type="text"
                            placeholder={t("country")}
                            className="p-2 rounded bg-gray-100"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                        />

                        {formik.touched.postalCode && formik.errors.postalCode && (
                            <div className="text-red-500 text-sm">{formik.errors.postalCode}</div>
                        )}

                        {formik.touched.city && formik.errors.city && (
                            <div className="text-red-500 text-sm">{formik.errors.city}</div>
                        )}

                        {formik.touched.country && formik.errors.country && (
                            <div className="text-red-500 text-sm">{formik.errors.country}</div>
                        )}
                    </div>

                    <select
                        value={selectedSessions}
                        onChange={(e) => setSelectedSessions(Number(e.target.value))}
                        className="w-full p-2 rounded bg-gray-100"
                    >
                        {sessionsOptions.map(({ label, value }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>

                    <div>
                        <p className="text-sm font-medium mb-1">{t("selectPaymentMethod")}</p>

                        <div className="flex gap-4 items-center mb-2">
                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="SEPA"
                                    checked={formik.values.paymentMethod === "SEPA"}
                                    onChange={() => {
                                        formik.setFieldValue("paymentMethod", "SEPA");
                                        formik.validateForm();
                                    }}
                                />
                                <span>{t("sepa")}</span>
                            </label>

                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Card"
                                    checked={formik.values.paymentMethod === "Card"}
                                    onChange={() => {
                                        formik.setFieldValue("paymentMethod", "Card");
                                        formik.validateForm();
                                    }}
                                />
                                <span>{t("card")}</span>
                            </label>
                        </div>

                        {/* Card Payment Fields */}
                        {formik.values.paymentMethod === "Card" && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="cardHolder"
                                    value={formik.values.cardHolder}
                                    onChange={formik.handleChange}
                                    placeholder={t("cardHolder")}
                                    className="w-full p-2 rounded bg-gray-100"
                                />

                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <Cleave
                                        value={formik.values.cardNumber}
                                        onChange={(e) => formik.setFieldValue("cardNumber", e.target.value)}
                                        options={{ creditCard: true }}
                                        className="col-span-2 p-2 rounded bg-gray-100 w-full"
                                        placeholder={t("cardNumber")}
                                    />

                                    <Cleave
                                        value={formik.values.expiry}
                                        onChange={(e) => formik.setFieldValue("expiry", e.target.value)}
                                        options={{ date: true, datePattern: ['m', 'y'] }}
                                        className="p-2 rounded bg-gray-100 w-full"
                                        placeholder="MM/YY"
                                    />

                                    <input
                                        type="text"
                                        name="cvc"
                                        value={formik.values.cvc}
                                        onChange={formik.handleChange}
                                        placeholder={t("cvc")}
                                        className="p-2 rounded bg-gray-100"
                                        maxLength="4"
                                        pattern="\d{3,4}"
                                    />
                                </div>
                            </div>
                        )}

                        {/* SEPA Payment Fields */}
                        {formik.values.paymentMethod === "SEPA" && (
                            <div className="mt-2">
                                <Cleave
                                    value={formik.values.iban}
                                    onChange={(e) => formik.setFieldValue("iban", e.target.value)}
                                    options={{
                                        blocks: [4, 4, 4, 4, 4, 4, 4, 4, 2],
                                        uppercase: true,
                                        delimiter: ' ',
                                    }}
                                    className="w-full p-2 rounded bg-gray-100"
                                    placeholder="DE89 3704 0044 0532 0130 00"
                                />

                                <input
                                    type="text"
                                    name="accountHolder"
                                    value={formik.values.accountHolder}
                                    onChange={formik.handleChange}
                                    placeholder={t("accountHolder")}
                                    className="w-full p-2 rounded bg-gray-100 mt-2"
                                />
                            </div>
                        )}
                    </div>
                </form>

                {/* RIGHT SUMMARY SECTION */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <h3 className="font-bold text-gray-700">{t("orderOverview")}</h3>

                    <div className="grid grid-cols-3 gap-2">
                        {monthsOptions.map((month) => (
                            <button
                                key={month}
                                onClick={() => setSelectedMonths(month)}
                                className={`text-sm py-1 px-2 rounded border ${selectedMonths === month ? "bg-blue-500 text-white" : "bg-white"}`}
                            >
                                {month}
                            </button>
                        ))}
                    </div>

                    <label className="inline-flex items-center space-x-2 text-sm">
                        <input type="checkbox" checked={payInAdvance} onChange={() => setPayInAdvance(!payInAdvance)} />
                        <span>{t("payInAdvance")}</span>
                    </label>

                    <div className="text-sm space-y-2">
                        <div className="flex justify-between"><span className="text-gray-500">{t("sessionsPm")}:</span> <strong>{selectedSessions}</strong></div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">{t("regularPrice")}:</span>
                            <span className={`${payInAdvance ? "line-through text-gray-400" : ""}`}><strong>{regularTotal}€</strong></span>
                        </div>
                        <div className="flex justify-between"><span className="text-gray-500">{t("yourPrice")}:</span> <strong>{finalPrice.toFixed(2)}€</strong></div>
                        <div className="flex justify-between"><span className="text-gray-500">{t("discount")}:</span> <span className="text-green-500">-{totalDiscount}€</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">{t("extraDiscount")}:</span> <span className="text-green-500">-{(finalPrice * advanceDiscount).toFixed(2)}€</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">{t("setupFee")}:</span> <strong>{(total * 0.15).toFixed(2)}€</strong></div>
                        <div className="flex justify-between"><span className="font-semibold">{t("totalPm")}:</span> <strong>{total}€</strong></div>

                        <label className="inline-flex items-start text-xs text-gray-600">
                            <input type="checkbox" className="mr-2 mt-1" />
                            {t("termsNotice")}
                        </label>

                        <button
                            form={formId}
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-medium"
                        >
                            {t('orderNow')}
                        </button>
                        <p className="text-center text-xs text-gray-500">{t("satisfactionRate")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;