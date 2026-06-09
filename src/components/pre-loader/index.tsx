import PreloaderVariant1 from "./pre-loader-variant-1";
import PreloaderVariant2 from "./pre-loader-variant-2";

type PreloaderProps = {
  onComplete: () => void;
  variant?: 1 | 2;
};

const Preloader = ({ onComplete, variant = 1 }: PreloaderProps) => {
  if (variant === 2) {
    return <PreloaderVariant2 onComplete={onComplete} />;
  }
  return <PreloaderVariant1 onComplete={onComplete} />;
};

export default Preloader;
