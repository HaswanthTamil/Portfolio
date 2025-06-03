export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.4,
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeIn" },
  },
}

export const fadeUpBtn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// export const fadeInSocial = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// }

export const fadeInSocial = {
  hidden: {
    opacity: 0,
  },
  visible: {
    transition: {
      duration: 5.4,
      ease: "easeOut",
      times: [0, 0.77, 1],
    },
    opacity: [0, 0, 1],
  },
}

export const navAnimation = {
  hidden: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4,
    },
  },
}
