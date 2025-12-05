const FeatureCard = ({ icon: Icon, title, description, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors[color]}`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
