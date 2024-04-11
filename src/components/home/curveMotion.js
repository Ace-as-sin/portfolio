import { motion } from "framer-motion";

const CurveMotion = () => {
  return (
    <div style={{ width: "300px", height: "300px", position: "relative" }}>
      <motion.div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute"
        }}
        animate={{
          x: [0, 200], // Define the x values of the curved path
          y: [0, 200], // Define the y values of the curved path
          transition: { duration: 5, ease: "linear", loop: Infinity }
        }}
      />
    </div>
  );
};

export default CurveMotion;