import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MedTrack has completely transformed how we manage our pharmacy. The interface is intuitive and the support team is outstanding.",
      author: "Dr. Sarah Johnson",
      role: "Chief Pharmacist",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      quote: "The inventory management features have saved us countless hours. We can now track medications in real-time and never run out of stock.",
      author: "Michael Chen",
      role: "Pharmacy Manager",
      company: "City Pharmacy Network",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      quote: "Best investment we've made for our pharmacy. The reporting features give us insights we never had before.",
      author: "Emily Rodriguez",
      role: "Operations Director",
      company: "MediCare Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      quote: "Customer support is phenomenal. They helped us migrate all our data seamlessly and trained our entire team.",
      author: "David Thompson",
      role: "Pharmacy Owner",
      company: "Thompson's Pharmacy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      quote: "The mobile app makes it easy to manage prescriptions on the go. Our patients love the convenience.",
      author: "Lisa Anderson",
      role: "Lead Pharmacist",
      company: "Wellness Pharmacy Group",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what pharmacy professionals are saying about MedTrack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-800">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
