import { useState } from "react";

const ContactSupport = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("faq");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const faqs = [
    {
      question: "How do I book a bus ticket?",
      answer: "You can book bus tickets by navigating to the Bus Info section, entering your source and destination, and selecting your preferred bus."
    },
    {
      question: "What is the best time to visit Karnataka?",
      answer: "The best time to visit Karnataka is from October to March when the weather is pleasant. Hill stations like Coorg and Chikmagalur are best visited during summer months."
    },
    {
      question: "How can I save my favorite places?",
      answer: "You can click on the heart icon on any place card to save it to your liked collections for easy access later."
    },
    {
      question: "What are the must-visit places in Karnataka?",
      answer: "Karnataka offers diverse attractions including Bangalore's tech hubs, Mysore's palaces, Hampi's historical ruins, Coorg's coffee plantations, and beautiful beaches along the Malabar coast. Other popular destinations include Chikmagalur, Jog Falls, and ancient temple towns like Hampi and Badami."
    }
  ];

  const supportOptions = [
    { id: "faq", icon: "help", label: "FAQ" },
    { id: "email", icon: "email", label: "Email Us" },
    { id: "message", icon: "chat", label: "Send Message" }
  ];

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    try {
      const response = await fetch(`${API_URL}/api/contact/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert(data.message || "Failed to send message. Please try again.");
        setSubmitted(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
      setSubmitted(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-800 to-red-700 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="material-symbols-outlined">support_agent</span>
            Contact Support
          </h2>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50 border-b">
          {supportOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition ${
                activeTab === option.id 
                  ? "bg-red-100 text-red-800" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="material-symbols-outlined text-xl">{option.icon}</span>
              <span className="text-xs font-medium">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {/* FAQ Section */}
          {activeTab === "faq" && (
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 mb-3">Frequently Asked Questions</h3>
              {faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <summary className="px-4 py-3 cursor-pointer font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                    {faq.question}
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </summary>
                  <div className="px-4 py-3 text-sm text-gray-600 border-t">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          )}

          {/* Email Section */}
          {activeTab === "email" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Send us an Email</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 mb-2">
                  <span className="material-symbols-outlined align-middle mr-1">email</span>
                  Email: explorekarnataka0@gmail.com
                </p>
                <p className="text-sm text-blue-600">
                  We typically respond within 24-48 hours.
                </p>
              </div>
              <a 
                href="mailto:explorekarnataka0@gmail.com"
                className="block w-full bg-red-700 text-white text-center py-3 rounded-lg font-medium hover:bg-red-800 transition"
              >
                Open Email App
              </a>
            </div>
          )}

          {/* Message Form Section */}
          {activeTab === "message" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Send us a Message</h3>
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  Message sent successfully! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-700 text-white py-3 rounded-lg font-medium hover:bg-red-800 transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
