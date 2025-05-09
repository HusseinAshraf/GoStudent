import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
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

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg">
                {/* LEFT FORM SECTION */}
                <Formik
                    initialValues={{
                        loginPhone: "",
                        contactPhone: "",
                        email: "",
                        name: "",
                        address: "",
                        nr: "",
                        postalCode: "",
                        city: "",
                        country: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        alert("Form submitted successfully!");
                        console.log(values);
                    }}
                >
                    {({ setFieldValue }) => (
                        <Form id={formId} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-center">{t("registrationTitle")}</h2>
                            <p className="text-center text-sm text-gray-500">{t("platformInfo")}</p>

                            <PhoneField label={t("loginPhone")} name="loginPhone" setFieldValue={setFieldValue} />
                            <PhoneField label={t("contactPhone")} name="contactPhone" setFieldValue={setFieldValue} />

                            <Field name="email" type="email" placeholder={t("emailPlaceholder")} className="w-full p-2 rounded bg-gray-100" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                            <Field name="name" type="text" placeholder={t("namePlaceholder")} className="w-full p-2 rounded bg-gray-100" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                            <div className="grid grid-cols-2 gap-2">
                                <Field name="address" type="text" placeholder={t("address")} className="p-2 rounded bg-gray-100" />
                                <Field name="nr" type="text" placeholder={t("nr")} className="p-2 rounded bg-gray-100" />
                            </div>
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                            <ErrorMessage name="nr" component="div" className="text-red-500 text-sm" />

                            <div className="grid grid-cols-3 gap-2">
                                <Field name="postalCode" type="text" placeholder={t("postalCode")} className="p-2 rounded bg-gray-100" />
                                <Field name="city" type="text" placeholder={t("city")} className="p-2 rounded bg-gray-100" />
                                <Field name="country" type="text" placeholder={t("country")} className="p-2 rounded bg-gray-100" />
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
                            <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                            <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />

                            <Field name="paymentMethod">
                                {({ field, form }) => (
                                    <div>
                                        <p className="text-sm font-medium mb-1">{t("selectPaymentMethod")}</p>
                                        <div className="flex gap-4 items-center mb-2">
                                            <label className="flex items-center gap-1">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="SEPA"
                                                    checked={field.value === "SEPA"}
                                                    onChange={() => form.setFieldValue("paymentMethod", "SEPA")}
                                                />
                                                <span>{t("sepa")}</span>
                                            </label>
                                            <label className="flex items-center gap-1">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Card"
                                                    checked={field.value === "Card"}
                                                    onChange={() => form.setFieldValue("paymentMethod", "Card")}
                                                />
                                                <span>{t("card")}</span>
                                            </label>
                                        </div>

                                        {field.value === "Card" && (
                                            <div>
                                                <Field name="cardHolder" placeholder={t("cardHolder")} className="w-full p-2 rounded bg-gray-100 mt-2" />
                                                <ErrorMessage name="cardHolder" component="div" className="text-red-500 text-sm" />

                                                <div className="grid grid-cols-2 gap-2 mt-2">
                                                    {/* Card Number */}
                                                    <Field name="cardNumber">
                                                        {({ field, form }) => (
                                                            <Cleave
                                                                {...field}
                                                                options={{ creditCard: true }}
                                                                className="col-span-2 p-2 rounded bg-gray-100 w-full"
                                                                placeholder={t("cardNumber")}
                                                                onChange={(e) => form.setFieldValue("cardNumber", e.target.value)}
                                                            />
                                                        )}
                                                    </Field>
                                                    <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm col-span-2" />

                                                    {/* Expiry */}
                                                    <Field name="expiry">
                                                        {({ field, form }) => (
                                                            <Cleave
                                                                {...field}
                                                                options={{ date: true, datePattern: ['m', 'y'] }}
                                                                className="p-2 rounded bg-gray-100 w-full"
                                                                placeholder="MM/YY"
                                                                onChange={(e) => form.setFieldValue("expiry", e.target.value)}
                                                            />
                                                        )}
                                                    </Field>
                                                    <ErrorMessage name="expiry" component="div" className="text-red-500 text-sm" />

                                                    {/* CVC */}
                                                    <Field
                                                        name="cvc"
                                                        placeholder={t("cvc")}
                                                        className="p-2 rounded bg-gray-100"
                                                        maxLength="4"
                                                        pattern="\d{3,4}"
                                                    />
                                                    <ErrorMessage name="cvc" component="div" className="text-red-500 text-sm" />
                                                </div>
                                            </div>
                                        )}

                                        {field.value === "SEPA" && (
                                            <div className="mt-2">
                                                {/* IBAN with Cleave */}
                                                <Field name="iban">
                                                    {({ field, form }) => (
                                                        <Cleave
                                                            {...field}
                                                            options={{
                                                                blocks: [4, 4, 4, 4, 4, 4, 4, 4, 2],
                                                                uppercase: true,
                                                                delimiter: ' ',
                                                            }}
                                                            className="w-full p-2 rounded bg-gray-100"
                                                            placeholder="DE89 3704 0044 0532 0130 00"
                                                            onChange={(e) => form.setFieldValue("iban", e.target.value)}
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name="iban" component="div" className="text-red-500 text-sm" />

                                                <Field name="accountHolder" placeholder={t("accountHolder")} className="w-full p-2 rounded bg-gray-100 mt-2" />
                                                <ErrorMessage name="accountHolder" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Field>

                        </Form>
                    )}
                </Formik>

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
