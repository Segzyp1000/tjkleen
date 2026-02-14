import React, { useState } from "react";
import toast from "react-hot-toast";

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
      toast.error("Enter a valid email address");
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

      // Simulate API call (replace with EmailJS later if needed)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      toast.success("Message submitted successfully 🎉");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50">

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
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

              <div className="space-y-4 text-slate-700 text-sm">
                <p>📞 0800-TJAY-KLEEN</p>
                <p>📧 support@tjaykleen.com</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-slate-50/50 p-8 md:p-10 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none placeholder:text-slate-300 transition-all font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none placeholder:text-slate-300 transition-all font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="080..."
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none placeholder:text-slate-300 transition-all font-medium"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none placeholder:text-slate-300 resize-none transition-all font-medium"
                  />
                </div>

                {/* Submit */}
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