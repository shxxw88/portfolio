import './Sphere.css';

export default function Sphere({ size = 300, color = 'green', style = {} }) {
  const colors = {
    green: {
      gradient: 'radial-gradient(circle at 30% 30%, #e8f5a8 0%, #d4e87e 20%, #c4d82e 50%, #a8ba1f 80%, #8a9c15 100%)'
    },
    orange: {
      gradient: 'radial-gradient(circle at 30% 30%, #FFE4B8 0%, #FFC870 20%, #FF9F19 50%, #E68A0F 80%, #CC7A0D 100%)'
    },
    blue: {
      gradient: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #F0F7FF 20%, #D5E9FF 50%, #B8D5F5 80%, #9BC0E8 100%)'
    }
  };

  return (
    <div 
      className="sphere" 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        background: colors[color].gradient,
        ...style 
      }}
    ></div>
  );
}