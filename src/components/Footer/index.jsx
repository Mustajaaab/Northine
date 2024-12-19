import { useState } from "react";
import No9 from "../../assets/images/no9.png";
import Googleplay from "../../assets/images/googleplay.png";
import Appstore from "../../assets/images/appstore.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Footer() {
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
        setErrors((prev) => ({
            ...prev,
            [name]: "", // Clear error for the current field on change
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (input.value && !/^\d+$/.test(input.value)) {
            newErrors.phone = "Phone number must contain only digits.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required.";
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
            return;
        }

        setResult("Sending...");

        const formData = new FormData();
        formData.append("access_key", "3ab5d2da-c395-40b8-9724-b184c37f573c");
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", input.value);
        formData.append("message", form.message);
        formData.append("agree", form.agree);

        if (file) {
            formData.append("file", file);
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
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
            setResult("Error: " + data.message);
        }
    };

    const handlePhoneChange = (id, phone) => {
        setInput({ ...input, value: phone });
        setErrors((prev) => ({
            ...prev,
            phone: "",
        }));
    };

    return (
        <div className="bg-gradient-to-b from-gradientStart to-gradientEnd">
            <div className="flex justify-end w-[88%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="272" height="187" viewBox="0 0 272 187" fill="none">
                    <path d="M266.994 37.102V75.53C269.828 75.443 271.998 77.897 271.998 80.863C271.998 84.173 269.304 86.866 265.994 86.866C264.156 86.866 262.528 86.018 261.426 84.713L228.272 103.847C228.515 104.499 228.666 105.195 228.666 106.2C228.666 109.24 225.973 112.22 222.662 112.22C219.351 112.22 216.658 109.24 216.658 106.2C216.658 105.177 216.813 104.463 217.68 103.798L183.931 84.673C182.829 86.001 181.187 86.866 179.33 86.866C177.473 86.866 175.831 86.001 174.729 84.673L141.593 103.797C141.848 104.462 142.3 105.177 142.3 106.2C142.3 108.898 139.833 111.352 136.999 111.831V150.006C139.833 150.485 142.3 153.3 142.3 156.6C142.3 156.636 141.853 157.326 141.614 158.63L174.731 177.084C175.833 175.757 177.474 174.894 179.33 174.894C182.641 174.894 185.335 177.585 185.335 180.895C185.335 184.205 182.641 186.896 179.33 186.896C176.2 186.896 173.326 184.205 173.326 180.895C173.326 180.16 173.478 179.463 173.721 178.812L140.611 159.703C139.509 161.038 137.862 162.8 135.999 162.8C134.136 162.8 132.49 161.039 131.388 159.704L98.277 178.812C98.52 179.464 98.671 180.16 98.671 180.895C98.671 184.205 95.978 186.896 92.667 186.896C89.356 186.896 86.663 184.205 86.663 180.895C86.663 180.16 86.814 179.464 87.57 178.813L53.946 159.704C52.844 161.039 51.198 162.8 49.335 162.8C46.25 162.8 43.331 159.217 43.331 156.6C43.331 153.3 45.501 150.486 48.334 150.006V111.831C45.501 111.351 43.331 108.898 43.331 106.2C43.331 105.195 43.482 104.499 43.725 103.847L10.571 84.714C9.469 86.018 7.842 86.866 6.4 86.866C2.693 86.866 0 84.173 0 80.865C0 77.897 2.169 75.443 5.3 75.53V36.756C2.169 36.276 0 33.823 0 30.855C0 27.546 2.693 24.853 6.4 24.853C7.877 24.853 9.531 25.733 10.633 27.081L43.725 8.72C43.482 7.331 43.331 6.635 43.331 5.9C43.331 2.591 46.25 0 49.335 0C52.646 0 55.339 2.591 55.339 5.9C55.339 6.635 55.188 7.331 54.945 8.72L88.37 27.081C89.139 25.733 90.794 24.853 92.667 24.853C94.54 24.853 96.195 25.733 97.297 27.081L130.389 8.72C130.146 7.331 129.994 6.635 129.994 5.9C129.994 2.591 132.688 0 135.999 0C139.309 0 142.3 2.591 142.3 5.9C142.3 6.635 141.852 7.331 141.609 8.72L174.895 27.193C175.994 26.68 177.567 25.2 179.33 25.2C181.94 25.2 182.667 26.68 183.766 27.192L217.52 8.72C216.809 7.331 216.658 6.635 216.658 5.9C216.658 2.591 219.351 0 222.662 0C225.973 0 228.666 2.591 228.666 5.9C228.666 6.635 228.515 7.331 228.272 8.72L261.558 27.192C262.657 26.68 264.23 25.2 265.994 25.2C269.304 25.2 271.998 27.892 271.998 31.202C271.998 34.168 269.828 36.623 266.994 37.102ZM179.33 184.897C181.538 184.897 183.333 183.103 183.333 180.895C183.333 178.689 181.538 176.894 179.33 176.894C177.123 176.894 175.328 178.689 175.328 180.895C175.328 183.103 177.123 184.897 179.33 184.897ZM265.994 84.866C268.201 84.866 269.997 83.07 269.997 80.863C269.997 78.657 268.201 76.863 265.994 76.863C263.787 76.863 261.991 78.657 261.991 80.863C261.991 83.07 263.787 84.866 265.994 84.866ZM222.662 110.22C224.869 110.22 226.665 108.138 226.665 106.2C226.665 103.723 224.869 102.19 222.662 102.19C220.455 102.19 218.659 103.723 218.659 106.2C218.659 108.138 220.455 110.22 222.662 110.22ZM179.33 84.866C181.538 84.866 183.333 83.071 183.333 80.865C183.333 78.657 181.538 76.864 179.33 76.864C177.123 76.864 175.327 78.657 175.327 80.865C175.327 83.071 177.123 84.866 179.33 84.866ZM140.1 106.2C140.1 103.723 138.206 102.19 135.999 102.19C133.791 102.19 131.996 103.723 131.996 106.2C131.996 108.138 133.791 110.22 135.999 110.22C138.206 110.22 140.1 108.138 140.1 106.2ZM135.999 160.7C138.206 160.7 140.1 158.114 140.1 156.6C140.1 153.7 138.206 152.4 135.999 152.4C133.791 152.4 131.996 153.7 131.996 156.6C131.996 158.114 133.791 160.7 135.999 160.7ZM92.667 184.897C94.874 184.897 96.67 183.103 96.67 180.895C96.67 178.689 94.874 176.894 92.667 176.894C90.46 176.894 88.664 178.689 88.664 180.895C88.664 183.103 90.46 184.897 92.667 184.897ZM54.95 158.63L88.66 177.085C89.168 175.758 90.81 174.894 92.667 174.894C94.524 174.894 96.166 175.758 97.268 177.085L130.384 158.63C130.145 157.326 129.994 156.636 129.994 156.6C129.994 153.3 132.164 150.486 134.998 150.006V111.831C132.164 111.351 129.994 108.898 129.994 106.2C129.994 105.195 130.146 104.499 130.389 103.847L97.235 84.714C96.132 86.018 94.505 86.866 92.667 86.866C90.811 86.866 89.169 86.001 88.67 84.675L54.93 103.799C55.184 104.463 55.339 105.177 55.339 106.2C55.339 108.898 53.169 111.352 50.336 111.831V150.006C53.169 150.485 55.339 153.3 55.339 156.6C55.339 156.636 55.189 157.326 54.95 158.63ZM96.67 80.865C96.67 78.657 94.874 76.864 92.667 76.864C90.46 76.864 88.664 78.657 88.664 80.865C88.664 83.071 90.46 84.866 92.667 84.866C94.874 84.866 96.67 83.071 96.67 80.865ZM45.332 156.6C45.332 158.114 47.128 160.7 49.335 160.7C51.542 160.7 53.338 158.114 53.338 156.6C53.338 153.7 51.542 152.4 49.335 152.4C47.128 152.4 45.332 153.7 45.332 156.6ZM49.335 110.22C51.542 110.22 53.338 108.138 53.338 106.2C53.338 103.723 51.542 102.19 49.335 102.19C47.128 102.19 45.332 103.723 45.332 106.2C45.332 108.138 47.128 110.22 49.335 110.22ZM2.1 80.865C2.1 83.071 3.796 84.866 6.4 84.866C8.211 84.866 10.6 83.071 10.6 80.865C10.6 78.657 8.211 76.864 6.4 76.864C3.796 76.864 2.1 78.657 2.1 80.865ZM6.4 26.854C3.796 26.854 2.1 28.649 2.1 30.855C2.1 33.062 3.796 34.858 6.4 34.858C8.211 34.858 10.6 33.062 10.6 30.855C10.6 28.649 8.211 26.854 6.4 26.854ZM49.335 1.898C47.128 1.898 45.332 3.693 45.332 5.9C45.332 8.106 47.128 10 49.335 10C51.542 10 53.338 8.106 53.338 5.9C53.338 3.693 51.542 1.898 49.335 1.898ZM87.43 28.817L53.936 9.709C52.834 11.037 51.192 12 49.335 12C47.478 12 45.837 11.037 44.734 9.709L11.627 28.817C11.86 29.456 12.8 30.136 12.8 30.855C12.8 33.823 9.838 36.277 7.4 36.756V75.53C9.838 75.443 12.8 77.897 12.8 80.865C12.8 81.618 11.853 82.332 11.598 83.87L44.734 102.121C45.837 100.793 47.478 100.19 49.335 100.19C51.174 100.19 52.801 100.776 53.903 102.081L87.57 83.38C86.814 82.296 86.663 81.6 86.663 80.865C86.663 77.897 88.833 75.443 91.666 75.53V36.756C88.833 36.276 86.663 33.823 86.663 30.855C86.663 30.136 86.811 29.456 87.43 28.817ZM92.667 26.854C90.46 26.854 88.664 28.649 88.664 30.855C88.664 33.062 90.46 34.858 92.667 34.858C94.874 34.858 96.67 33.062 96.67 30.855C96.67 28.649 94.874 26.854 92.667 26.854ZM135.999 1.898C133.791 1.898 131.996 3.693 131.996 5.9C131.996 8.106 133.791 10 135.999 10C138.206 10 140.1 8.106 140.1 5.9C140.1 3.693 138.206 1.898 135.999 1.898ZM173.798 28.869L140.6 9.709C139.497 11.037 137.856 12 135.999 12C134.142 12 132.5 11.037 131.398 9.709L98.29 28.817C98.523 29.456 98.671 30.136 98.671 30.855C98.671 33.823 96.501 36.277 93.667 36.756V75.53C96.501 75.443 98.671 77.897 98.671 80.865C98.671 81.618 98.516 82.332 98.261 83.87L131.398 102.121C132.5 100.793 134.142 100.19 135.999 100.19C137.836 100.19 139.463 100.776 140.566 102.08L173.72 83.36C173.477 82.295 173.326 81.599 173.326 80.865C173.326 77.897 175.496 75.443 178.329 75.53V37.102C175.496 36.622 173.326 34.168 173.326 31.202C173.326 30.375 173.494 29.587 173.798 28.869ZM179.33 27.2C177.123 27.2 175.328 29.85 175.328 31.202C175.328 33.408 177.123 35.202 179.33 35.202C181.538 35.202 183.333 33.408 183.333 31.202C183.333 29.85 181.538 27.2 179.33 27.2ZM222.662 1.898C220.455 1.898 218.659 3.693 218.659 5.9C218.659 8.106 220.455 10 222.662 10C224.869 10 226.665 8.106 226.665 5.9C226.665 3.693 224.869 1.898 222.662 1.898ZM260.462 28.869L227.263 9.709C226.161 11.037 224.519 12 222.662 12C220.805 12 219.163 11.037 218.61 9.709L184.863 28.869C185.166 29.587 185.335 30.375 185.335 31.202C185.335 34.168 183.165 36.623 180.331 37.102V75.53C183.164 75.443 185.334 77.897 185.334 80.865C185.334 81.599 185.183 82.295 184.94 83.36L218.95 102.08C219.197 100.776 220.824 100.19 222.662 100.19C224.519 100.19 226.161 100.793 227.263 102.121L260.399 83.86C260.145 82.331 259.989 81.617 259.989 80.863C259.989 77.897 262.159 75.443 264.993 75.53V37.102C262.159 36.622 259.989 34.168 259.989 31.202C259.989 30.375 260.158 29.587 260.462 28.869ZM265.994 27.2C263.787 27.2 261.991 29.85 261.991 31.202C261.991 33.408 263.787 35.202 265.994 35.202C268.201 35.202 269.997 33.408 269.997 31.202C269.997 29.85 268.201 27.2 265.994 27.2Z" fill="url(#paint0_linear_663_106)" />
                    <defs>
                        <linearGradient id="paint0_linear_663_106" x1="0" y1="187" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="yellow" />
                            <stop offset="0.75" stopColor="yellow" stopOpacity="0.5" />
                            <stop offset="1" stopColor="yellow" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="container mx-auto">
                <h1 className="text-white font-syne font-semibold text-[42px]">
                    Contact <span className="text-yellow">Us</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className="lg:flex">
                        <div className="w-[50%]">
                            <div className="flex gap-3 items-center mt-24">
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
                                containerClass="flex w-full items-center bg-[#181E26] rounded-md"
                                inputStyle={{
                                    border: 'none',
                                    boxShadow: 'none',
                                    width: '100%',
                                    outline: 'none',
                                    padding: '10px',
                                    background: "#181E26",
                                    height: "50px",
                                }}
                                inputClass="placeholder-gray-500 pl-5"
                                dropdownStyle={{
                                    backgroundColor: "#181E26",
                                    border: "1px solid #333",
                                    borderRadius: "0.375rem",
                                    color: "#fff",
                                }}
                                placeholder="Phone number"
                                autoFormat
                                disableCountryCode={false}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}

                            <button
                                type="submit"
                                className={`mt-[40px] text-base font-normal text-center font-syne py-[14px] w-full rounded-full bg-yellow ease-in-out duration-300 transition-transform hover:scale-105 text-white ${result === "Sending..." ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                disabled={result === "Sending..."}
                            >
                                {result === "Sending..." ? "Sending..." : "Submit"}
                            </button>
                        </div>

                        <div className="mt-24 ml-8 w-[50%]">
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

                            <p className="font-syne font-normal text-[13px] text-white/50 pt-[30px]">
                                We will process your personal information in accordance with our
                                Privacy Policy.
                            </p>
                            <div className="flex items-center gap-3 mt-[10px]">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={form.agree}
                                    onChange={handleInputChange}
                                    className="h-5 w-5 bg-[#181E26] border-[#181E26] rounded focus:border-[#181E26] focus:ring-1"
                                />
                                <label className="font-syne font-normal text-[13px] leading-[32px] text-white">
                                    I would like to be contacted with news and updates about your
                                    events and services.
                                </label>
                            </div>
                            {errors.agree && <p className="text-red-500 text-sm mt-2">{errors.agree}</p>}
                        </div>
                    </div>
                </form>
                <img src={No9} alt="" className='w-[140px] h-[40px] mt-32' />
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-white/50 font-normal font-syne leading-[25px] text-[15px] mt-[38px]'> Offering top-notch services in UI/UX Designing, Web Development, <br />Digital Marketing, and Bookkeeping to help businesses thrive with <br />creativity, precision, and strategy</p>
                        <div className='flex mt-[48px] gap-14'>
                            <div className='flex items-center gap-2'>
                                <img src={Googleplay} alt="" className='w-8 h-8' />
                                <div>
                                    <p className='text-yellow font-syne font-normal text-[13px]'>Available on the</p>
                                    <p className='text-white font-syne font-semibold text-base'>Google Play</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Appstore} alt="" className='w-8 h-8' />
                                <div>
                                    <p className='text-yellow font-syne font-normal text-[13px]'>Available on the</p>
                                    <p className='text-white font-syne font-semibold text-base'>Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-white font-semibold leading-[50px] text-4xl font-syne mt-[25px]'>Join The <span className='text-yellow'>Northnine</span> <br />
                            Experience</h1>
                        <p className='font-syne font-normal text-[15px] leading-[25px] text-white/50 mt-[30px]'>Stay updated with the latest trends in design, development, <br />marketing, and finance. Contact us now!</p>
                    </div>
                </div>
                <div className='flex mt-[120px] pb-3 gap-1'>
                    <div className='w-[2%] h-[2px] bg-yellow'></div>
                    <div className='w-[96%] h-[2px] bg-[#FFFFFF]/30'></div>
                    <div className='w-[2%] h-[2px] bg-yellow'></div>
                </div>
                <div className='flex justify-between items-center mt-[50px]'>
                    <ul className='flex gap-7 items-center'>
                        <li className='font-syne text-[15px] font-normal text-white'>FaceBook</li>
                        <li className='font-syne text-[15px] font-normal text-white'>Instagram</li>
                        <li className='font-syne text-[15px] font-normal text-white'>Linkedin</li>
                        <li className='font-syne text-[15px] font-normal text-white'>Twitter</li>
                        <li className='font-syne text-[15px] font-normal text-white'>Youtube</li>
                    </ul>
                    <ul className='flex gap-7 items-center'>
                        <li className='font-syne text-[15px] font-normal text-white'>Terms and Conditions</li>
                        <li className='font-syne text-[15px] font-normal text-white'>Privacy Policy</li>
                        <li className='font-syne text-[15px] font-normal text-white'>Sitemap</li>
                    </ul>
                </div>
                <div className='flex items-center justify-between mt-[80px] pb-[30px]'>
                    <p className='text-white/10 font-syne font-normal text-[13px] '>©Northnine 2024.</p>
                    <p className='text-white/10 font-syne font-normal text-[13px] '>All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer