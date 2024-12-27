import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import Northnine from '../../assets/images/no9.png';

function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const getActiveClass = (path) => {
        return location.pathname === path ? 'text-yellow lg:border-b border-yellow' : 'text-white';
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Open the chat when the user types anything in the search bar
        if (query.trim()) {
            setIsChatOpen(true);
            setUserMessage(query);  // Automatically put the search query in the chat
        } else {
            setIsChatOpen(false);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            setChatMessages([...chatMessages, { type: 'user', text: userMessage }]);
            setUserMessage('');

            // Simulate chatbot reply
            setTimeout(() => {
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    { type: 'bot', text: `You said: ${userMessage}` },
                ]);
            }, 500);
        }
    };

    return (
        <div className="w-full mx-auto items-center py-5  fixed bg-[#121820] z-50">
            <div className="container mx-auto flex items-center justify-between">
                <img
                    src={Northnine}
                    alt="Northnine Logo"
                    className="lg:w-[186px] lg:h-[50px] md:w-[200px] md:h-[60px] w-[126px] h-[30px]"
                />

                {/* Hamburger Icon for Small Screens */}
                <div className="lg:hidden">
                    <svg
                        onClick={toggleMenu}
                        className="w-7 h-7 md:w-14 md:h-14 text-white cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6h16M4 12h16m-7 6h7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Navigation Links */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-8 text-center absolute lg:static top-16 right-0 bg-[#121820] w-full lg:w-auto`}
                >
                    <Link to="/home" className={`${getActiveClass('/home')} block font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 lg:py-0`}>Home</Link>
                    <Link to="/about" className={`${getActiveClass('/about')} block font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 lg:py-0`}>About Us</Link>
                    <Link to="/team" className={`${getActiveClass('/team')} block font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 lg:py-0`}>Team</Link>
                    <Link to="/services" className={`${getActiveClass('/services')} block font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 lg:py-0`}>Services</Link>
                    <Link to="/case-studies" className={`${getActiveClass('/case-studies')} block font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 lg:py-0`}>Case Studies</Link>
                    <Link to="/contact-us" className={`${getActiveClass('/contact-us')} block font-syne lg:text-base text-xl font-semibold hover:text-yellow py-2 pb-6 lg:py-0`}>Contact Us</Link>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className="lg:flex items-center space-x-2 hidden">
                    <div className="flex items-center border border-gray-600 rounded-full bg-[#1e2832] group focus-within:border-yellow">
                        <button type="submit" className="text-yellow group-focus:text-white pl-3">
                            <svg
                                className="h-4 w-4 text-white group-focus:text-yellow ease-in-out duration-300 cursor-pointer"
                                fill="currentColor"
                                viewBox="0 0 21 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                                ></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="bg-transparent text-white pl-3 pr-4 py-2 focus:outline-none w-48"
                        />

                    </div>
                </form>
            </div>

            {/* Chat Widget */}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={toggleChat}
                    className="bg-yellow text-black p-3 rounded-full shadow-md"
                >
                    Chat
                </button>

                {isChatOpen && (
                    <div className="bg-white w-[300px] h-[400px] rounded-lg shadow-lg p-4 flex flex-col">
                        <div className="flex justify-between items-center border-b pb-2 mb-2">
                            <h4 className="text-lg font-bold">Chat</h4>
                            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
                                &times;
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto mb-2">
                            {chatMessages.map((msg, index) => (
                                <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                                    <span className={`inline-block px-4 py-2 rounded-lg ${msg.type === 'user' ? 'bg-yellow text-black' : 'bg-gray-200 text-gray-800'}`}>
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center border-t pt-2">
                            <input
                                type="text"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-yellow text-black px-4 py-2 rounded-r-lg"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
