const Card = ({
  children,
  className = '',
  padding = 'medium',
  shadow = 'medium',
  hover = false,
}) => {
  const paddings = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  const shadows = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };

  const hoverEffect = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';

  return (
    <div
      className={`bg-white rounded-lg ${paddings[padding]} ${shadows[shadow]} ${hoverEffect} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
