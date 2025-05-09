import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import i18n from "../../i18n";
import Cleave from 'cleave.js/react'

// Constants

const basePrice = 29;
const discount = 0.04;
const advanceDiscount = 0.03;

const validationSchema = Yup.object({
    loginPhone: Yup.string().required("Login phone is required"),
    contactPhone: Yup.string().required("Contact phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string().required("Contact name is required"),
    address: Yup.string().required("Address is required"),
    nr: Yup.string().required("Nr is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    paymentMethod: Yup.string().required("Payment method is required"),

    // Card fields validation
    cardHolder: Yup.string().when("paymentMethod", {
        is: "Card",
        then: Yup.string().required("Cardholder name is required")
    }),

    cardNumber: Yup.string().when("paymentMethod", {
        is: "Card",
        then: Yup.string()
            .length(19, "Card number must be 19 digits")
            .required("Card number is required")
    }),

    expiry: Yup.string().when("paymentMethod", {
        is: "Card",
        then: Yup.string().required("Expiry date is required")
    }),

    cvc: Yup.string().when("paymentMethod", {
        is: "Card",
        then: Yup.string()
            .length(3, "CVC must be 3 digits")
            .required("CVC is required")
    }),

    // SEPA fields validation
    iban: Yup.string().when("paymentMethod", {
        is: "SEPA",
        then: Yup.string().required("IBAN is required")
    }),

    accountHolder: Yup.string().when("paymentMethod", {
        is: "SEPA",
        then: Yup.string().required("Account holder is required")
    })
});


const PhoneField = ({ label, name, setFieldValue }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <PhoneInput
            country={"us"}
            onChange={(value) => setFieldValue(name, value)}
            inputStyle={{ width: "100%", backgroundColor: "#f3f4f6", border: "none", boxShadow: "none" }}
            buttonStyle={{ border: "none", backgroundColor: "#f3f4f6" }}
            containerStyle={{ border: "none", backgroundColor: "#f3f4f6" }}
        />

    </div>
);

const BookingForm = () => {
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

    // Price Calculation
    const discountedPrice = basePrice * (1 - discount);
    const finalPrice = payInAdvance ? discountedPrice * (1 - advanceDiscount) : discountedPrice;
    const total = (finalPrice * selectedSessions * monthsMultiplier[selectedMonths]).toFixed(2);
    const regularTotal = (basePrice * selectedSessions * monthsMultiplier[selectedMonths]).toFixed(2);
    const totalDiscount = (regularTotal - total).toFixed(2);

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
        onSubmit: (values) => {
            console.log("Form Data:", values);
            alert("Form submitted successfully!");
        }
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg">
                {/* LEFT FORM SECTION */}
                <form id={formId} className="space-y-4 p-6 bg-white rounded-lg shadow-md" onSubmit={formik.handleSubmit}>
                    <h2 className="text-lg font-semibold text-center">{t("registrationTitle")}</h2>
                    <p className="text-center text-sm text-gray-500">{t("platformInfo")}</p>

                    <PhoneField label={t("loginPhone")} name="loginPhone" setFieldValue={formik.setFieldValue} />
                    <div className="text-red-500 text-sm">{formik.errors.loginPhone}</div>
                    <PhoneField label={t("contactPhone")} name="contactPhone" setFieldValue={formik.setFieldValue} />
                    <div className="text-red-500 text-sm">{formik.errors.contactPhone}</div>

                    <input
                        name="email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        className="w-full p-2 rounded bg-gray-100"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>

                    <input
                        name="name"
                        type="text"
                        placeholder={t("namePlaceholder")}
                        className="w-full p-2 rounded bg-gray-100"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <div className="text-red-500 text-sm">{formik.errors.name}</div>

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
                        <div className="text-red-500 text-sm">{formik.errors.address}</div>
                        <div className="text-red-500 text-sm">{formik.errors.nr}</div>
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

                        <div className="text-red-500 text-sm">{formik.errors.postalCode}</div>
                        <div className="text-red-500 text-sm">{formik.errors.city}</div>
                        <div className="text-red-500 text-sm">{formik.errors.country}</div>

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
                                        formik.validateForm(); // لضمان إعادة التحقق من الصحة عند تغيير طريقة الدفع
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
                                        formik.validateForm(); // إعادة التحقق من الصحة
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

                        <button form={formId} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-medium">
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
