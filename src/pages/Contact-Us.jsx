import BGDot from '../assets/images/dotmap.png'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { FiPaperclip } from "react-icons/fi";
import { useState } from "react";

function Contact() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        subject: "",
        projectBudget: "",
        description: "",
        agree: false,
    });
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...");


        const formData = new FormData();
        formData.append("access_key", "3ab5d2da-c395-40b8-9724-b184c37f573c");
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
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
            setFile(null);
        } else {
            setResult("Error: " + data.message);
        }
    };
    const handleFileClick = () => {
        document.getElementById("fileInput")?.click();
    };


    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("Please select a file before submitting!");
            return;
        }


        const formData = new FormData();
        formData.append("file", file);


        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });


            if (response.ok) {
                const result = await response.json();
                console.log("File uploaded successfully:", result);
                alert("File uploaded successfully!");
            } else {
                console.error("Error uploading file");
                alert("Failed to upload file. Please try again.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while uploading.");
        }
    };


    return (
        <>
            <Navbar />
            <div
                className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] h-[500px]"
                style={{ backgroundImage: `url(${BGDot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="w-[70%] mx-auto flex justify-between items-center">
                    <div >
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-syne font-medium">Home</p>
                            <div className="bg-yellow h-2 w-2 rounded-full"></div>
                            <p className="text-lg font-syne font-[100]">Contact Us</p>
                        </div>
                        <h1 className="text-5xl font-syne mt-10 font-semibold uppercase">Let&apos;s discuss your opportunity</h1>
                    </div>
                    <div>
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="272" height="187" viewBox="0 0 272 187" fill="none">
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
                </div>
            </div>
            <div className='flex w-[69%] mx-auto pt-20 justify-between'>
                <form onSubmit={onSubmit} className='w-[65%]'>
                    <h1 className='font-syne text-2xl font-semibold'><span className='text-yellow'>01.</span> Tell Us About Yourself</h1>
                    <div className="flex">
                        {/* Left Section */}
                        <div className="w-[50%]">
                            <div className="flex gap-3 items-center mt-14">
                                <p className="font-syne font-medium text-[17px]">
                                    First Name
                                </p>
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Alice"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-500 focus:outline-none "
                                required
                            />

                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="font-syne font-medium text-[17px]">
                                    Email Address
                                </p>
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleInputChange}
                                placeholder="doe@mydomain.com"
                                className="text-base mt-5 p-2 w-full h-[50px] border-b placeholder:font-syne border-gray-400 placeholder-gray-400 focus:outline-none"
                                required
                            />


                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="font-syne font-medium text-[17px]">
                                    Company
                                </p>
                            </div>
                            <input
                                type="text"
                                name="company"
                                value={form.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your company name"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-400 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                        {/* Right Section */}
                        <div className=" ml-8 w-[50%]">
                            <div className="flex gap-3 items-center mt-14">
                                <p className="font-syne font-medium text-[17px]">
                                    Last Name
                                </p>
                            </div>
                            <input
                                type="text"
                                name="lastName"
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Eve"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-400 placeholder:text-gray-400 focus:outline-none "
                                required
                            />

                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="font-syne font-medium text-[17px]">
                                    Phone
                                </p>
                            </div>
                            <input
                                type="number"
                                name="phone"
                                value={form.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-400 placeholder-gray-400 focus:outline-none"
                            />


                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="font-syne font-medium text-[17px]">
                                    Role
                                </p>
                            </div>
                            <input
                                type="text"
                                name="role"
                                value={form.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your role"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-400 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>
                    <h1 className='font-syne text-2xl font-semibold mt-20'>
                        <span className='text-yellow'>02.</span> What Can We Help You With?</h1>
                    <div className='flex'>
                        <div className='w-[50%]'>
                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="font-syne font-medium text-[17px]">
                                    Subject
                                </p>
                            </div>
                            <input
                                type="text"
                                name="subject"
                                value={form.phone}
                                onChange={handleInputChange}
                                placeholder="Web Designer"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-400 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                        <div className='w-[50%] ml-8'>
                            <div className="flex gap-3 items-center mt-[30px]">
                                <p className="font-syne font-medium text-[17px]">
                                    Project Budget
                                </p>
                            </div>
                            <input
                                type="number"
                                name="projectBudget"
                                value={form.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your Budget"
                                className="text-base mt-5 p-2 w-full h-[50px] placeholder:font-syne border-b border-gray-400 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>
                    <h1 className='font-syne text-2xl font-semibold mt-20'>
                        <span className='text-yellow'>03.</span> Tell Us About Your Project</h1>
                    <div className="flex gap-3 items-center mt-[30px]">
                        <p className="font-syne font-medium text-[17px]">
                            Project Description
                        </p>
                    </div>
                    <textarea
                        name="Description"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        className="text-base mt-5 p-2 w-full h-[295px] resize-none placeholder:font-syne border-b border-gray-400 placeholder-gray-400 focus:outline-none"
                    />
                    {/* Attach File Section */}
                    <div className="mt-10">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={handleFileClick}
                        >
                            <FiPaperclip
                                size={20}
                                className="text-gray-600 hover:text-yellow-500 ease-in-out duration-75"
                            />
                            <span className="hover:text-yellow ease-in-out duration-75">
                                Attach your file
                            </span>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*,application/pdf"
                            />
                        </div>
                        {file && (
                            <div className="mt-4">
                                <p className="text-gray-700">Selected File: {file.name}</p>
                            </div>
                        )}
                    </div>

                    {/* Main Submit Button */}
                    <button
                        type="submit"
                        className={`mt-[50px] mb-10 text-lg font-normal text-center font-syne py-[22px] w-full rounded-full ease-in-out duration-300 transition-transform border-[4px] border-yellow hover:scale-105 ${result === "Sending..." ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={result === "Sending..."}
                    >
                        {result === "Sending..." ? "Sending..." : "Submit"}
                    </button>

                </form>
                <div className='w-[30%]'>
                    <h1 className='font-syne text-xl font-semibold'>Support Request</h1>
                    <p className='font-syne text-lg text-black/50 mt-7'>Our experts are ready to answer your questions.</p>
                    <div className='flex items-center gap-5 mt-7 group'>
                        <p className='font-semibold font-syne group-hover:text-yellow duration-300 ease-in-out cursor-pointer'>Get Support</p>
                        <button className='w-10 h-10 rounded-full bg-yellow group-hover:bg-transparent group-hover:border-[3px] cursor-pointer duration-300 ease-in-out group-hover:text-yellow group-hover:border-yellow text-white font-syne text-xl'>&gt;</button>
                    </div>
                    <div className="gap-2 flex items-center mt-24">
                        <span className="w-[2%] h-[3px] rounded-full bg-yellow"></span>
                        <span className="w-[96%] h-[3px] rounded-full bg-[#e7e7e8]"></span>
                        <span className="w-[2%] h-[3px] rounded-full bg-yellow"></span>
                    </div>

                    <div className='bg-[#f3f4f1] w-16 h-16 flex justify-center mt-16 items-center rounded-full relative' >
                        <svg className='z-10' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" />
                            <script xmlns="" /><script xmlns="" />
                            <g clipPath="url(#clip0_716_2)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 41.999C9.42 41.999 0 32.579 0 20.999C0 9.42 9.42 0 21 0C32.579 0 41.999 9.42 41.999 20.999C41.999 32.579 32.579 41.999 21 41.999ZM21 1.999C10.523 1.999 1.999 10.522 1.999 20.999C1.999 31.476 10.523 39.999 21 39.999C31.476 39.999 39.999 31.476 39.999 20.999C39.999 10.522 31.476 1.999 21 1.999ZM21.156 23.948C21.51 23.982 20.944 24 20.839 24C20.421 24 20.32 23.735 19.892 23.316C19.716 22.793 19.999 22.227 20.522 22.51C22.1 21.554 25.839 19.677 25.839 16.999C25.843 14.876 24.5 12.978 22.498 12.274C19.896 11.359 17.38 12.73 16.123 15.331C15.94 15.852 15.369 16.125 14.847 15.942C14.327 15.76 14.53 15.188 14.236 14.667C14.857 12.903 16.127 11.487 17.813 10.678C19.498 9.869 21.398 9.766 23.163 10.387C25.964 11.373 27.844 14.31 27.839 17.1C27.839 21.666 21.429 23.857 21.156 23.948ZM21 29.999H21.19C21.572 29.999 22.19 30.447 22.19 30.999C22.19 31.551 21.572 31.999 21.19 31.999C20.467 31.999 20.9 31.551 20.9 30.999C20.9 30.447 20.447 29.999 21 29.999Z" fill="#121820" />
                            </g>
                            <defs>
                                <clipPath id="clip0_716_2">
                                    <rect width="42" height="42" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className='w-4 h-4 bg-yellow rounded-full absolute top-10 left-9'></span>
                    </div>
                    <h1 className='font-syne text-xl font-semibold mt-10'>Need Help?</h1>
                    <p className='font-syne text-lg text-black/50 mt-7'>For technical questions or billing <br /> questions, please contact Customer Care.</p>
                    <div className='flex items-center gap-5 mt-7 group'>
                        <p className='font-semibold font-syne group-hover:text-yellow duration-300 ease-in-out cursor-pointer'>Help Center</p>
                        <button className='w-10 h-10 rounded-full bg-yellow group-hover:bg-transparent group-hover:border-[3px] cursor-pointer duration-300 ease-in-out group-hover:text-yellow group-hover:border-yellow text-white font-syne text-xl'>&gt;</button>
                    </div>

                    <div className="gap-2 flex items-center mt-24">
                        <span className="w-[2%] h-[3px] rounded-full bg-yellow"></span>
                        <span className="w-[96%] h-[3px] rounded-full bg-[#e7e7e8]"></span>
                        <span className="w-[2%] h-[3px] rounded-full bg-yellow"></span>
                    </div>


                    <div className='bg-[#f3f4f1] w-16 h-16 flex justify-center mt-16 items-center rounded-full relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" />
                            <script xmlns="" />
                            <script xmlns="" />
                            <g clipPath="url(#clip0_716_6)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 41.999C9.42 41.999 0 32.579 0 20.999C0 9.419 9.42 0 21 0C32.579 0 41.999 9.419 41.999 20.999C41.999 32.579 32.579 41.999 21 41.999ZM21 1.999C10.523 1.999 1.999 10.523 1.999 20.999C1.999 31.476 10.523 39.999 21 39.999C31.476 39.999 39.999 31.476 39.999 20.999C39.999 10.523 31.476 1.999 21 1.999ZM21.19 13.999C20.467 13.999 20.9 13.551 20.9 12.999C20.9 12.447 20.447 11.999 21 11.999H21.19C21.572 11.999 22.19 12.447 22.19 12.999C22.19 13.551 21.572 13.999 21.19 13.999ZM21 19.999C21.552 19.999 21.999 20.447 21.999 20.999V28.999C21.999 29.551 21.552 29.999 21 29.999C20.447 29.999 19.999 29.551 19.999 28.999V20.999C19.999 20.447 20.447 19.999 21 19.999Z" fill="#121820" />
                            </g>
                            <defs>
                                <clipPath id="clip0_716_6">
                                    <rect width="42" height="42" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className='w-4 h-4 bg-yellow rounded-full absolute top-10 left-9'></span>
                    </div>

                    <h1 className='font-syne text-xl font-semibold mt-10'>Need More Info?</h1>
                    <p className='font-syne text-lg text-black/50 mt-7'>For technical questions or billing <br /> questions, please contact Customer Care.</p>
                    <div className='flex items-center gap-5 mt-7 group'>
                        <p className='font-semibold font-syne group-hover:text-yellow duration-300 ease-in-out cursor-pointer'>Legality Guide</p>
                        <button className='w-10 h-10 rounded-full bg-yellow group-hover:bg-transparent group-hover:border-[3px] cursor-pointer duration-300 ease-in-out group-hover:text-yellow group-hover:border-yellow text-white font-syne text-xl'>&gt;</button>
                    </div>
                </div>
            </div>


            <div style={{ width: '100%', height: '600px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.208825154099!2d74.3497978!3d35.9183534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa898a5d8e146f9e1%3A0xb9b6b67b71bb9a67!2sNorthnine%20Pvt%20LTD%2C%20W89X%2B8WV%2C%20Northnine%20Pvt%20LTD%2C%20Gilgit%2C%2015100!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    title="Northnine Pvt LTD Location"
                ></iframe>
            </div>

            <Footer />
        </>
    )
}
export default Contact