// import { useState } from "react";
// import chatBot from "../assets/images/chatBot.png";

// function ChatBot() {
//     const [isChatOpen, setIsChatOpen] = useState(false);
//     const [chatMessages, setChatMessages] = useState([]);
//     const [userMessage, setUserMessage] = useState("");

//     const toggleChat = () => {
//         setIsChatOpen(!isChatOpen);
//     };

//     const handleSendMessage = () => {
//         if (userMessage.trim()) {
//             setChatMessages([...chatMessages, { type: "user", text: userMessage }]);
//             setUserMessage("");

//             setTimeout(() => {
//                 setChatMessages((prevMessages) => [
//                     ...prevMessages,
//                     { type: "bot", text: `You said: ${userMessage}` },
//                 ]);
//             }, 500);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             handleSendMessage();
//         }
//     };

//     return (
//         <div className="fixed bottom-10 right-5">
//             <button onClick={toggleChat}>
//                 <img src={chatBot} alt="ChatBot Icon" />
//             </button>

//             {isChatOpen && (
//                 <div className="bg-white w-[300px] h-[400px] rounded-lg shadow-lg p-4 flex flex-col">
//                     <div className="flex justify-between items-center border-b pb-2 mb-2">
//                         <h4 className="text-lg font-bold">Chat</h4>
//                         <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
//                             &times;
//                         </button>
//                     </div>
//                     <div className="flex-1 overflow-y-auto mb-2">
//                         {chatMessages.map((msg, index) => (
//                             <div
//                                 key={index}
//                                 className={`mb-2 ${msg.type === "user" ? "text-right" : "text-left"}`}
//                             >
//                                 <span
//                                     className={`inline-block px-4 py-2 rounded-lg ${
//                                         msg.type === "user"
//                                             ? "bg-yellow text-black"
//                                             : "bg-gray-200 text-gray-800"
//                                     }`}
//                                 >
//                                     {msg.text}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="flex items-center border-t pt-2">
//                         <input
//                             type="text"
//                             value={userMessage}
//                             onChange={(e) => setUserMessage(e.target.value)}
//                             onKeyDown={handleKeyDown}
//                             placeholder="Type your message..."
//                             className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
//                         />
//                         <button
//                             onClick={handleSendMessage}
//                             className="bg-yellow text-black px-4 py-2 rounded-r-lg"
//                         >
//                             Send
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ChatBot;
