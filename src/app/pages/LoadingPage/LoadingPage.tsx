import React from 'react';
import { motion } from 'framer-motion';

const loadingContainer = {
  width: '50%',
  height: '50%',
  display: 'flex',
  margin: '0 auto',
  alignContent: 'center',
  justifyContent: 'space-around',
  overflow: 'hidden',
};

const weatherIconBase = {
  display: 'block',
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
};

const weatherIconSun = {
  ...weatherIconBase,
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
  yoyo: Infinity,
  ease: 'easeInOut',
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
