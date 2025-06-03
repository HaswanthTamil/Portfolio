// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
const NavBar = ({ scrollToIndex }) => {
  return (
    <>
      <motion.div className="nav-content px-4 py-15 text-lg md:text-xl text-white text-bold">
        <hr className="my-4 opacity-50 border-t-2 border-[var(--purp)]" />
        <p className="text-left px-6 leading-[2rem]">
          <a className="nav-link" onClick={() => scrollToIndex(0)}>
            Home
          </a>
          <br />
          <a className="nav-link" onClick={() => scrollToIndex(1)}>
            Projects
          </a>
          <br />
          <a className="nav-link" onClick={() => scrollToIndex(2)}>
            About
          </a>
          <br />
          <a className="nav-link" onClick={() => scrollToIndex(3)}>
            Contact
          </a>
        </p>
        <hr className="my-4 opacity-50 border-t-2 border-[var(--purp)]" />
      </motion.div>
    </>
  )
}

export default NavBar
