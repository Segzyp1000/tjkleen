import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Message cannot be empty");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      // 1. Send the data to Formspree
      const response = await fetch("https://formspree.io/f/mqedqgln", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 2. TRIGGER SUCCESS TOAST
        toast.success("Message submitted successfully! 🎉", {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#1e293b",
            color: "#fff",
            fontSize: "10px",
            borderRadius: "14px",
            fontWeight: "600",
          },
        });

        // 3. Clear the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const data = await response.json();
        toast.error(data.errors ? data.errors[0].message : "Submission failed.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000"
          alt="Laundry"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight">
            Get In Touch
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-14">
            
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8 text-base leading-relaxed">
                Have questions about our services or want to schedule a pickup?
                Reach out and our team will respond as soon as possible.
              </p>

              <div className="space-y-6 text-slate-700 text-sm">
                <a 
                  href="tel:0800TJAYKLEEN" 
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors group"
                >
                  <span className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100">📞</span>
                  <span className="font-bold">08075490118</span>
                </a>

                <a 
                  href="mailto:tjaykleen@gmail.com" 
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors group"
                >
                  <span className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100">📧</span>
                  <span className="font-bold">tjaykleen@gmail.com</span>
                </a>

                <div className="flex items-center gap-3">
                  <span className="bg-blue-50 p-3 rounded-full">📍</span>
                  <span className="font-bold">Ikorodu, Agric, Asolo, Agbede opposite MRS filling station</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Toaster position="top-center" />
                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all font-medium text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none resize-none transition-all font-medium text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;