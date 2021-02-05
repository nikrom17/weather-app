import React from 'react';
import { motion } from 'framer-motion';

const loadingContainer = {
  alignContent: 'center',
  display: 'flex',
  height: '50%',
  justifyContent: 'space-around',
  margin: '0 auto',
  overflow: 'hidden',
  width: '50%',
};

const weatherIconSun = {
  backgroundRepeat: 'no-repeat',
  display: 'block',
  height: '100%',
  width: '100%',
  backgroundImage: 'url("/sun.svg")',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '25%',
  },
};

const loadingCircleTransition = {
  duration: 1.25,
  ease: 'easeInOut',
  yoyo: Infinity,
};

const LoadingPage: React.FC = () => {
  return (
    <>
      <p
        style={{
          textAlign: 'center',
          marginTop: '10%',
          fontFamily: 'Bubblegum Sans',
          fontSize: '48px',
          color: 'white',
        }}
      >
        Weatherly
      </p>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.div
          style={weatherIconSun}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={weatherIconSun}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={weatherIconSun}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </>
  );
};

export default LoadingPage;
