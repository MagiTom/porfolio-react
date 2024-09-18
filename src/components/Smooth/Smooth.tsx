import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
  delay?: number;
};

export default function Smooth({ children, delay }: props) {

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
    >
      {children}
    </motion.div>
  );
}
