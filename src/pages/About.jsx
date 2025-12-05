import Card from '../components/ui/Card';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About MedTrack</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing medication management for healthcare professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&h=600&fit=crop"
              alt="Our Mission"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At MedTrack, we believe that healthcare professionals deserve tools that work as hard as they do. 
              Our mission is to simplify medication management through innovative technology that enhances patient care 
              and streamlines pharmacy operations.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2020, we've grown from a small startup to serving over 10,000 healthcare professionals 
              across the country. Our platform has processed over 50,000 prescriptions and continues to evolve 
              based on feedback from our valued users.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="large" className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Patient First
              </h3>
              <p className="text-gray-600">
                Every decision we make prioritizes patient safety and care quality.
              </p>
            </Card>
            <Card padding="large" className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously improve our platform with cutting-edge technology.
              </p>
            </Card>
            <Card padding="large" className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of security and compliance.
              </p>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} padding="large" className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
