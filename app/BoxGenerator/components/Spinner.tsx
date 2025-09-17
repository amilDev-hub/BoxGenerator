import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        className="w-16 h-16 border-4 rounded-full"
        style={{
          borderColor: "#424242",
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeIn",
        }}
      />
    </div>
  );
};

export default Spinner;
