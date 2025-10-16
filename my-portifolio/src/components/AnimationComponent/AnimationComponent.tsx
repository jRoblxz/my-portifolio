import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimationComponentProps {
  children: ReactNode;
  moveDirection: "left" | "right";
}

const moveFromLeftToRight = keyframes`
  0% { transform: translateX(-20vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const moveFromRightToLeft = keyframes`
  0% { transform: translateX(20vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const StyledAnimationComponent = styled("div")<{
  startAnimation: boolean;
  animationKeyframes: ReturnType<typeof keyframes>;
}>(({ startAnimation, animationKeyframes }) => ({
  animation: startAnimation ? `${animationKeyframes} 1s ease-out` : "none",
  transition: "opacity 0.5s ease-out",
}));

const AnimationComponent: React.FC<AnimationComponentProps> = ({
  children,
  moveDirection,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      });
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledAnimationComponent
      ref={componentRef}
      startAnimation={startAnimation}
      animationKeyframes={
        moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft
      }
    >
      {children}
    </StyledAnimationComponent>
  );
};

export default AnimationComponent;
