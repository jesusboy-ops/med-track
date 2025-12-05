import {
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  ChartPieIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Prescription Management",
      description:
        "Streamline prescription workflows with digital tracking, automated refills, and comprehensive medication histories.",
    },
    {
      icon: BellAlertIcon,
      title: "Smart Notifications",
      description:
        "Receive real-time alerts for prescription refills, low inventory, and patient updates.",
    },
    {
      icon: ChartPieIcon,
      title: "Analytics Dashboard",
      description:
        "Gain insights with detailed reports on patient trends, medication usage, and operational metrics.",
    },
    {
      icon: CloudArrowUpIcon,
      title: "Cloud Backup",
      description:
        "Automatic cloud backup ensures your data is always safe and accessible from anywhere.",
    },
    {
      icon: LockClosedIcon,
      title: "HIPAA Compliance",
      description:
        "Built with healthcare regulations in mind, ensuring full HIPAA compliance and data security.",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Access",
      description:
        "Access patient records and manage prescriptions on-the-go with our mobile-responsive platform.",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Powerful Features for Modern Healthcare
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Everything you need to manage medications, patients, and pharmacy operations efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-700" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <div className="rounded-3xl p-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                  See MedTrack in Action
                </h2>

                <p className="text-lg mb-6 opacity-90">
                  Schedule a personalized demo to discover how MedTrack can transform your pharmacy operations.
                </p>

                <button className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-xl shadow hover:bg-gray-100 transition-all duration-200">
                  Request a Demo
                </button>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop"
                  alt="Demo"
                  className="rounded-2xl shadow-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
