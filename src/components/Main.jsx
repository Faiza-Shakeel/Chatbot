import React, { useState , useEffect,useRef} from 'react'


const Main = () => {
    const [message, setMessage] = useState([])
    const [input, setinput] = useState('')
    const [botReply, setBotReply] = useState('')
    const chatContainerRef = useRef(null)
    useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, [message]);

    const send = (e) => {
        e.preventDefault()
        if(input.trim() === "") {return}
setMessage(prev =>[...prev, input])
const msgtoreply = input
setinput("")
setTimeout(() => {
    setBotReply(generateBotReply(msgtoreply))},2000)

    }
    
      const generateBotReply = (input) => {
        const lower = input.toLowerCase();
        if (lower.includes("hello") || lower.includes("hi")) return "Hi there!";
        if (lower.includes("how are you")) return "I'm just a bot, but I'm doing great!";
        if (lower.includes("bye")) return "Goodbye! Have a great day!";
        if (lower.includes("business hours")) return "Our business hours are Monday to Friday, 9 AM to 6 PM.";
        if (lower.includes("track my order")) return "You can track your order using the tracking link sent to your email.";
        if (lower.includes("refund")) return "Yes, we offer refunds within 14 days of purchase. Please check our refund policy.";
        if (lower.includes("where is my order")) return "Let me check! Could you please share your order ID?";
        if (lower.includes("contact customer support")) return "You can reach out to us via this chat or email us at support@example.com.";
        if (lower.includes("ship internationally")) return "Yes! We ship worldwide. 🌍 Shipping fees and times may vary.";
        if (lower.includes("reset my password")) return "Click 'Forgot Password' on the login page and follow the steps.";
        if (lower.includes("cancel my order")) return "If your order hasn’t shipped yet, we can cancel it. Please provide your order ID.";
        if (lower.includes("secure")) return "Absolutely! We use secure encryption protocols to keep your data safe.";
        if (lower.includes("change shipping address")) return "Yes, if your order hasn’t been shipped yet. Please send your updated address.";
      
        return "I'm not sure how to respond to that yet, but I'll try to help!";
      };
      
    
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
  <div className="w-full max-w-md h-[600px] bg-white rounded-lg shadow-lg flex flex-col">
    
    {/* <!-- Header --> */}
    <div className="bg-blue-500 text-white p-4 rounded-t-lg font-semibold text-center">
      Chat App
    </div>

    {/* <!-- Messages Container --> */}
    <div ref={chatContainerRef}   className="flex-1 overflow-y-auto p-4 space-y-3">
      {/* <!-- Message bubbles --> */}
      {message.map((msg, index) => (
  <div
    key={index}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-[75%] self-end ml-auto"
  >
    {msg}
  </div>
))}

      { botReply &&  <div  className="bg-gray-200 px-4 py-2 rounded-lg max-w-[75%]">
        {botReply}
      </div>}
      
     
    
    </div>

    {/* <!-- Input Form --> */}
    <form className="p-3 border-t flex items-center gap-2">
      <input
        onChange={(e) => setinput(e.target.value)}
        value={input}
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
      onClick={send}

        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  </div>

 
 

    </div>
  )
}

export default Main
