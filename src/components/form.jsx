import '../App.css';
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormSubmission = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
    });
    const [input, setInput] = useState({
        countryCode: "pk",
        value: "",
        id: 1,
    });
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Dynamic Validation
        let error = "";
        if (name === "name") {
            if (!value.trim()) {
                error = "Name is required.";
            } else if (value.trim().length < 3) {
                error = "Name must be at least 3 characters.";
            }
        } else if (name === "email") {
            if (!value.trim()) {
                error = "Email is required.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Please enter a valid email address.";
            }
        } else if (name === "message" && !value.trim()) {
            error = "Message is required.";
        }

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (form.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required.";
        } else if (form.message.trim().length < 15) {
            newErrors.message = "Message must be at least 15 characters long.";
        }

        if (!form.agree) {
            newErrors.agree = "You must agree to the terms.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fill the form before submitting.");
            return;
        }

        setResult("Sending...");

        const formData = new FormData();
        formData.append("access_key", "2b71940a-c83f-419b-8c8c-1fd13fd90de3");
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", input.value);
        formData.append("message", form.message);
        formData.append("agree", form.agree);

        if (file) {
            formData.append("file", file);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form submitted successfully!");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    agree: false,
                });
                setInput({ countryCode: "pk", value: "", id: 1 });
                setFile(null);
            } else {
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            toast.error("An error occurred while submitting the form.");
        } finally {
            setResult("");
        }
    };

    const handlePhoneChange = (id, phone) => {
        setInput({ ...input, value: phone });
        setErrors((prev) => ({
            ...prev,
            phone: "",
        }));
        if (phone && !/^\+\d{1,3}\d+$/.test(phone)) {
            setErrors((prev) => ({
                ...prev,
                phone: "Please enter a valid phone number with country code.",
            }));
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={onSubmit}>
                <div>
                    <div className="lg:flex">
                        {/* Left Section */}
                        <div className="lg:w-[50%]">
                            <div className="flex gap-3 items-center lg:mt-24 mt-14">
                                <p className="text-white font-syne font-medium text-[15px]">
                                    Name
                                </p>
                                <p className="text-yellow font-syne font-medium text-[15px]">
                                    Required
                                </p>
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="text-base mt-5 p-2 w-full bg-[#181E26] h-[50px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}

                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="text-white font-syne font-medium text-[15px]">
                                    Email Address
                                </p>
                                <p className="text-yellow font-syne font-medium text-[15px]">
                                    Required
                                </p>
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="text-base mt-5 p-2 w-full bg-[#181E26] h-[50px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}

                            <div className="flex gap-3 items-center my-6">
                                <p className="text-white font-syne font-medium text-[15px]">
                                    Phone
                                </p>
                                <p className="text-[#FFFFFF]/50 font-syne font-medium text-[15px]">
                                    Optional
                                </p>
                            </div>
                            <PhoneInput
                                country={input.countryCode}
                                value={input.value}
                                onChange={(phone) => handlePhoneChange(input.id, phone)}
                                containerClass={`flex w-full items-center rounded-md border-b ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    } bg-[#181E26] focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1`}
                                inputStyle={{
                                    border: 'none',
                                    boxShadow: 'none',
                                    width: '100%',
                                    outline: 'none',
                                    padding: '10px 50px',
                                    color: 'white',
                                    background: '#181E26',
                                    height: '50px',
                                }}
                                inputClass="placeholder-gray-500"
                                dropdownStyle={{
                                    backgroundColor: '#181E26',
                                    color: '#fff',
                                    maxHeight: '200px',
                                    overflowY: 'auto',
                                    hover: "yelllow"
                                }}
                                placeholder="Phone number"
                                autoFormat
                                disableCountryCode={false}
                                aria-invalid={!!errors.phone}
                                aria-describedby="phone-input-error"
                            />
                            {errors.phone && (
                                <p id="phone-input-error" className="text-red-500 text-sm mt-2">
                                    {errors.phone}
                                </p>
                            )}
                            <p className="font-syne font-normal text-[13px] text-white/50 pt-[30px]">
                                We will process your personal information in accordance with our
                                Privacy Policy.
                            </p>
                            <div className="flex items-center lg:gap-3 gap-8 mt-[10px]">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={form.agree}
                                    onChange={handleInputChange}
                                    className="h-5 w-5 bg-[#181E26] border-[#181E26] rounded focus:border-[#181E26] focus:ring-1"
                                />
                                <label className="font-syne font-normal text-[13px] lg:leading-[32px] text-white">
                                    I would like to be contacted with news and updates about your
                                    events and services.
                                </label>
                            </div>
                            {errors.agree && <p className="text-red-500 text-sm mt-2">{errors.agree}</p>}
                        </div>

                        {/* Right Section */}
                        <div className="mt-24 lg:ml-8 lg:w-[50%]">
                            <p className="text-white font-syne text-[15px] font-medium">
                                Message <span className="text-yellow">Required</span>
                            </p>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleInputChange}
                                placeholder="Enter your text here"
                                className="text-base p-2 mt-5 w-full bg-[#181E26] h-[295px] border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1 resize-none"
                                required
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}

                            <button
                                type="submit"
                                className={`mt-[40px] text-base font-normal text-center font-syne py-[14px] w-full rounded-full ${result ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow'
                                    } ease-in-out`}
                                disabled={!!result}
                            >
                                {result || 'Submit'}
                            </button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default FormSubmission