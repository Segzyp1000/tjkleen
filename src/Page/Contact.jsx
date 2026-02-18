import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

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

      // Create an AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("https://formspree.io/f/mqedqgln", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        toast.success("Message submitted successfully! 🎉", {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#1e293b",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "14px",
            fontWeight: "600",
          },
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        toast.error(data.errors ? data.errors[0].message : "Submission failed. Please try again.");
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        toast.error("Request timed out. Please check your connection and try again.");
      } else {
        toast.error("Something went wrong. Please check your connection.");
      }
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000"
            alt="Laundry"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white text-2xl md:text-4xl font-black tracking-tight"
          >
            Get In Touch
          </motion.h1>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-14"
        >
          <div className="grid md:grid-cols-2 gap-14">
            
            {/* Left: Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-black text-slate-900 mb-6"
              >
                Contact Information
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-slate-600 mb-8 text-base leading-relaxed"
              >
                Have questions about our services or want to schedule a pickup?
                Reach out and our team will respond as soon as possible.
              </motion.p>

              <div className="space-y-6 text-slate-700 text-sm">
                <motion.a 
                  variants={slideInLeft}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  href="tel:08075490118" 
                  className="flex items-center gap-4 hover:text-blue-600 transition-colors group p-2 rounded-xl hover:bg-blue-50/50"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="bg-blue-100 p-4 rounded-2xl text-md group-hover:bg-blue-200 transition-colors"
                  >
                    📞
                  </motion.span>
                  <div>
                    <p className="text-xs text-slate-400 font-semiboold uppercase tracking-wider mb-1">Phone</p>
                    <span className="font-bold text-sm">08075490118</span>
                  </div>
                </motion.a>

                <motion.a 
                  variants={slideInLeft}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  href="mailto:tjaykleen@gmail.com" 
                  className="flex items-center gap-4 hover:text-blue-600 transition-colors group p-2 rounded-xl hover:bg-blue-50/50"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="bg-blue-100 p-4 rounded-2xl text-sm group-hover:bg-blue-200 transition-colors"
                  >
                    📧
                  </motion.span>
                  <div>
                    <p className="text-xs text-slate-400 font-semiboold uppercase tracking-wider mb-1">Email</p>
                    <span className="font-bold text-sm">tjaykleen@gmail.com</span>
                  </div>
                </motion.a>

                <motion.div 
                  variants={slideInLeft}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-2 rounded-lg hover:bg-blue-50/50 transition-colors"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="bg-blue-100 p-4 rounded-2xl text-md"
                  >
                    📍
                  </motion.span>
                  <div>
                    <p className="text-xs text-slate-400 font-semiboold uppercase tracking-wider mb-1">Address</p>
                    <span className="font-bold text-sm leading-tight block">Ikorodu, Agric, Asolo, Agbede opposite MRS filling station</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-inner"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-black text-slate-900 mb-8"
              >
                Send a Message
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:outline-none transition-all font-medium text-gray-900 shadow-sm"
                  />
                </motion.div>

                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:outline-none transition-all font-medium text-gray-900 shadow-sm"
                  />
                </motion.div>

                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-5 py-4 bg-white text-sm rounded-2xl border border-slate-200 focus:border-blue-500 focus:outline-none resize-none transition-all font-medium text-gray-900 shadow-sm"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={!loading ? { 
                    scale: 1.03, 
                    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)",
                    y: -2
                  } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-sm font-black uppercase tracking-[0.15em] transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed mt-6"
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;