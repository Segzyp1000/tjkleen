import { 
  Truck, 
  Sparkles, 
  Calendar, 
  Search
} from 'lucide-react';





export const servicesData = [
  {
    id: 1,
    title: "Signature Dry Cleaning",
    description: "Eco-friendly solvent technology designed for luxury fabrics, silks, and tailored suits.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    features: ["Perc-free process", "Hand-finished pressing", "Buttons secured"],
  },
  {
    id: 2,
    title: "Artisan Laundry",
    description: "Premium detergents and temperature-controlled washing for your everyday luxury wear.",
    color: "bg-cyan-500",
    lightColor: "bg-cyan-50",
    features: ["Whites brightening", "Softener options", "Expert folding"],
  },
  {
    id: 3,
    title: "Wedding & Couture",
    description: "Specialized preservation and delicate cleaning for the most important garments in your life.",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
    features: ["Acid-free boxing", "Museum-grade care", "Insured handling"],
  },
  {
    id: 4,
    title: "Steam & Pressing",
    description: "Professional tension pressing to restore the original silhouette and crispness of your attire.",
    color: "bg-sky-500",
    lightColor: "bg-sky-50",
    features: ["Vertical steaming", "Sharp creases", "Fabric refreshing"],
  },
  {
    id: 5,
    title: "Home & Linens",
    description: "Refreshing care for high-thread-count sheets, heavy duvets, and designer curtains.",
    color: "bg-slate-700",
    lightColor: "bg-slate-50",
    features: ["Sanitization", "Scent options", "Bulk handling"],
  },
  {
    id: 6,
    title: "Valet Collection",
    description: "White-glove pickup and delivery service scheduled at your convenience, right to your door.",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    features: ["Real-time tracking", "Contactless option", "Flexible windows"],
  },
];


export  const TESTIMONIALS = [
  {
    name: "Olajide Adebayo",
    role: "Creative Director",
    content: "The level of detail is unparalleled. They didn't just clean my vintage Dior blazer; they restored the structure. It came back looking better than the day I bought it.",
    service: "Signature Dry Cleaning",
    rating: 5
  },
  {
    name: "Sarah Olujoke",
    role: "Architect",
    content: "Living in the city, I don't have time for laundry logistics. Signature Valet is seamless. The app-based scheduling and the professional valets make it worth every penny.",
    service: "Executive Wash & Fold",
    rating: 5
  },
  {
    name: "Segun Timileyin",
    role: "Tech Executive",
    content: "I'm extremely particular about my dress shirts. They are crisp, perfectly pressed, and delivered in custom bags that prevent any wrinkling. Absolute perfection.",
    service: "Shirt Service",
    rating: 5
  },
  {
    name: "Timia Okafor",
    role: "Fashion Consultant",
    content: "I trust them with my most delicate silks and evening gowns. Their eco-friendly process gives me peace of mind that my wardrobe is being treated with the respect it deserves.",
    service: "Couture Care",
    rating: 5
  }
];


export const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Schedule & Pickup",
    description: "Book your slot online or via text. Our valet arrives at your door with custom garment bags, ready to handle your items with care.",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600"
  },
  {
    number: "02",
    title: "Expert Inspection",
    description: "Every piece undergoes a multi-point check for stains, loose buttons, and fabric integrity before the specialized cleaning process begins.",
    icon: Search,
    color: "bg-amber-50 text-amber-600"
  },
  {
    number: "03",
    title: "Masterful Cleaning",
    description: "Using eco-friendly solvents and artisan techniques, we restore each garment. Hand-finishing and pressing ensure a crisp, boutique-ready look.",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-600"
  },
  {
    number: "04",
    title: "Signature Delivery",
    description: "Your items return to you beautifully packaged and ready to wear. We track the entire journey to ensure perfection every time.",
    icon: Truck,
    color: "bg-emerald-50 text-emerald-600"
  }
];



