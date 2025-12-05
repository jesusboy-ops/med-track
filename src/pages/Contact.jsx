import { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "support@medtrack.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+234 707 416 5672",
    },
    {
      icon: MapPinIcon,
      title: "Address",
      content: "123 Healthcare Ave, Medical District, CA 90210",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <Card
              key={idx}
              padding="large"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <info.icon className="w-7 h-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 text-base">{info.content}</p>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card
          padding="large"
          className="bg-white rounded-3xl shadow-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mb-4"
            />

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-shadow duration-200"
              ></textarea>
            </div>

            <Button
              type="submit"
              size="large"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-lg transition-all duration-200"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
