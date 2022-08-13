import { useAuth } from '../../../features/auth/Hooks';

const ContentScreen: React.FC = () => {
  const { imgSrc } = useAuth();

  return imgSrc ? <img src={imgSrc} alt="kitty" /> : null;
};

export default ContentScreen;
