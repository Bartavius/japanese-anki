import { useNavigate } from 'react-router';
import './NavBackButton.css';

interface NavBackButtonProps {
  className?: string;
}

function NavBackButton({ className = '' }: NavBackButtonProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <view 
      className={`nav-back-button ${className}`} 
      bindtap={handleGoBack}
    >
      <text className="back-arrow">←</text>
    </view>
  );
}

export default NavBackButton;