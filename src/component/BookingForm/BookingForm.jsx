import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Constants
const sessionsOptions = [
    { label: "8 Sessions", value: 8 },
    { label: "12 Sessions", value: 12 },
    { label: "16 Sessions", value: 16 },
];

const monthsOptions = ["6 MONTHS", "12 MONTHS", "18 MONTHS", "24 MONTHS", "36 MONTHS"];

const monthsMultiplier = {
    "6 MONTHS": 1,
    "12 MONTHS": 0.9,
    "18 MONTHS": 0.85,
    "24 MONTHS": 0.8,
    "36 MONTHS": 0.75,
};

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
                            <h2 className="text-lg font-semibold text-center">Registration & Booking at GoStudent</h2>
                            <p className="text-center text-sm text-gray-500">The leading platform for online tutoring.</p>

                            <PhoneField label="Login Phone Number" name="loginPhone" setFieldValue={setFieldValue} />
                            <PhoneField label="Contact Phone Number" name="contactPhone" setFieldValue={setFieldValue} />

                            <Field name="email" type="email" placeholder="Contact Email Address" className="w-full p-2 rounded bg-gray-100" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                            <Field name="name" type="text" placeholder="Contact Name" className="w-full p-2 rounded bg-gray-100" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                            <div className="grid grid-cols-2 gap-2">
                                <Field name="address" type="text" placeholder="Address" className="p-2 rounded bg-gray-100" />
                                <Field name="nr" type="text" placeholder="Nr" className="p-2 rounded bg-gray-100" />
                            </div>
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                            <ErrorMessage name="nr" component="div" className="text-red-500 text-sm" />

                            <div className="grid grid-cols-3 gap-2">
                                <Field name="postalCode" type="text" placeholder="Postal Code" className="p-2 rounded bg-gray-100" />
                                <Field name="city" type="text" placeholder="City" className="p-2 rounded bg-gray-100" />
                                <Field name="country" type="text" placeholder="Country" className="p-2 rounded bg-gray-100" />
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
                                        <p className="text-sm font-medium mb-1">Select Payment Method</p>
                                        <div className="flex gap-4 items-center mb-2">
                                            <label className="flex items-center gap-1">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="SEPA"
                                                    checked={field.value === "SEPA"}
                                                    onChange={() => form.setFieldValue("paymentMethod", "SEPA")}
                                                />
                                                <span>SEPA</span>
                                            </label>
                                            <label className="flex items-center gap-1">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Card"
                                                    checked={field.value === "Card"}
                                                    onChange={() => form.setFieldValue("paymentMethod", "Card")}
                                                />
                                                <span>Card</span>
                                            </label>
                                        </div>

                                        {field.value === "Card" && (
                                            <div>
                                                <Field name="cardHolder" placeholder="Card holder" className="w-full p-2 rounded bg-gray-100 mt-2" />
                                                <ErrorMessage name="cardHolder" component="div" className="text-red-500 text-sm" />

                                                <div className="grid grid-cols-2 gap-2 mt-2">
                                                    <Field name="cardNumber" placeholder="Card number" className="col-span-2 p-2 rounded bg-gray-100" />
                                                    <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm col-span-2" />

                                                    <Field name="expiry" placeholder="MM/YY" className="p-2 rounded bg-gray-100" />
                                                    <ErrorMessage name="expiry" component="div" className="text-red-500 text-sm" />

                                                    <Field name="cvc" placeholder="CVC" className="p-2 rounded bg-gray-100" />
                                                    <ErrorMessage name="cvc" component="div" className="text-red-500 text-sm" />
                                                </div>
                                            </div>
                                        )}

                                        {field.value === "SEPA" && (
                                            <div className="mt-2">
                                                <Field name="iban" placeholder="IBAN" className="w-full p-2 rounded bg-gray-100" />
                                                <ErrorMessage name="iban" component="div" className="text-red-500 text-sm" />

                                                <Field name="accountHolder" placeholder="Account Holder Name" className="w-full p-2 rounded bg-gray-100 mt-2" />
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
                    <h3 className="font-bold text-gray-700">Order Overview</h3>

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
                        <span>Pay in advance - EXTRA 3% DISCOUNT</span>
                    </label>

                    <div className="text-sm space-y-2">
                        <div className="flex justify-between"><span className="text-gray-500">Sessions P.M.:</span> <strong>{selectedSessions}</strong></div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Regular Price:</span>
                            <span className={`${payInAdvance ? "line-through text-gray-400" : ""}`}><strong>{regularTotal}€</strong></span>
                        </div>
                        <div className="flex justify-between"><span className="text-gray-500">Your Price:</span> <strong>{finalPrice.toFixed(2)}€</strong></div>
                        <div className="flex justify-between text-green-600"><span>Discount 4%:</span> <span>-{(basePrice * selectedSessions * discount).toFixed(2)}€</span></div>
                        {payInAdvance && (
                            <div className="flex justify-between text-green-600">
                                <span>Extra 3%:</span>
                                <span>-{(basePrice * selectedSessions * discount * advanceDiscount).toFixed(2)}€</span>
                            </div>
                        )}
                        <div className="flex justify-between"><span className="text-gray-500">Setup fee:</span> <strong className="text-blue-600">0.00€</strong></div>
                        <div className="text-lg font-semibold flex justify-between">Total P.M.: <span>{total}€</span></div>
                    </div>

                    <label className="inline-flex items-start text-xs text-gray-600">
                        <input type="checkbox" className="mr-2 mt-1" />
                        I accept the <span className="text-blue-600 underline ml-1">Terms & Conditions</span> and understand my right of withdrawal...
                    </label>

                    <button form={formId} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-medium">
                        Order Now
                    </button>

                    <p className="text-center text-xs text-gray-500">95% SATISFACTION RATE!</p>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
