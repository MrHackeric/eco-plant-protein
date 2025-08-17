// src/components/animate/index.jsx
import { LazyMotion, domAnimation } from 'framer-motion';

export default function MotionLazyContainer({ children }) {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
}