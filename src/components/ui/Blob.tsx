import { motion, TargetAndTransition } from 'framer-motion';

interface BlobProps {
  animate: TargetAndTransition;
  style: React.CSSProperties;
}

export const Blob: React.FC<BlobProps> = ({ animate, style }) => (
  <motion.div
    className="absolute rounded-full mix-blend-screen filter blur-3xl"
    animate={animate}
    style={style}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
)