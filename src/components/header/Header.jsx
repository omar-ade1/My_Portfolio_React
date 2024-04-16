import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {},
  },
  show: {
    opacity: 1,
    x: 10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 13,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 13,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
    },
  },
};

const Header = () => {
  const header = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close The Menu If User Resize The Window
  useEffect(() => {
    const handleResize = () => {
      if (!window.matchMedia("(max-width: 639px)").matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Remove The Event When Exit The Page
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // No Scroll If The Menu Open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Handle Header Scroll
  const handleHeaderScroll = () => {
    if (window.scrollY > 100) {
      // header.current Offen Be Undefined You Must Write This Condition To Check If header.current Not Equel To Undefined
      if (header.current) {
        // If You Don't Write This Condition The Animations Will Repeat
        if (!header.current.classList.contains("headerScroll")) {
          header.current.classList.add("headerScroll");
          header.current.classList.remove("headerNormal");
        }
      }
    } else {
      if (header.current) {
        // If You Don't Write This Condition The Animations Will Repeat
        if (!header.current.classList.contains("headerNormal")) {
          header.current.classList.add("headerNormal");
          header.current.classList.remove("headerScroll");
        }
      }
    }
  };

  // To Add The Header Width And Color When Scroll
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);
    return () => removeEventListener("scroll", handleHeaderScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="overLay fixed w-screen h-screen bg-black top-0 left-0 z-10"
          ></motion.div>
        )}
      </AnimatePresence>

      <header ref={header} className="headerNormal py-[20px] mx-auto transition-colors duration-300 z-50">
        <div className="container flex-between-center">
          <div className="logo">
            <h1 className="text-2xl text-red-600 font-bold">
              {"<"}
              <span className="capitalize text-[var(--logo-color)]">dev</span>
              {" />"}
            </h1>
          </div>

          <div className="hidden xsm:block menu-and-ul">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${
                menuOpen ? "" : "rotate-6"
              }  menu hidden xsm:block relative w-[30px] h-[20px] group hover:rotate-0 transition-all duration-200 cursor-pointer `}
            >
              <span
                style={{ transition: ".5s cubic-bezier(0.42, 0, 0.31, 1)" }}
                className={`${
                  menuOpen ? "w-full bg-red-600 -rotate-45 top-1/2" : "w-1/2 top-0 bg-[#FFC300]"
                }  absolute group-hover:w-full h-[5px] rounded `}
              ></span>
              <span
                style={{ transition: ".5s cubic-bezier(0.42, 0, 0.31, 1)" }}
                className={`${menuOpen ? "opacity-0" : ""}  absolute w-full h-[5px] rounded bg-[#FFC300] top-1/2`}
              ></span>
              <span
                style={{ transition: ".5s cubic-bezier(0.42, 0, 0.31, 1)" }}
                className={`${
                  menuOpen ? "w-full bg-red-600 rotate-45 top-1/2" : "w-1/2 top-full bg-[#FFC300]"
                }  absolute right-0 group-hover:w-full h-[5px] rounded `}
              ></span>
            </div>
            <AnimatePresence>
              {menuOpen && (
                <motion.ul
                  variants={variants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`links-group 
                  flex absolute p-3 bg-[#023047] flex-col w-[300px] rounded left-0 mt-10  divide-y-2 divide-double divide-[var(--logo-color)]
          `}
                >
                  <motion.li onClick={() => setMenuOpen(false)} variants={childVariants}>
                    <a className="header-link-mobile" href="#home">
                      Home
                    </a>
                  </motion.li>
                  <motion.li onClick={() => setMenuOpen(false)} variants={childVariants}>
                    <a className="header-link-mobile" href="#about">
                      About
                    </a>
                  </motion.li>
                  <motion.li onClick={() => setMenuOpen(false)} variants={childVariants}>
                    <a className="header-link-mobile" href="#skills">
                      Projects
                    </a>
                  </motion.li>
                  <motion.li onClick={() => setMenuOpen(false)} variants={childVariants}>
                    <a className="header-link-mobile" href="#projects">
                      Contact
                    </a>
                  </motion.li>
                  <motion.li onClick={() => setMenuOpen(false)} variants={childVariants}>
                    <a className="header-link-mobile" href="#contact">
                      contact
                    </a>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <ul
            className={`links-group xsm:hidden
          flex items-center divide-x-2 divide-double divide-[var(--logo-color)]
          `}
          >
            <li>
              <a className="header-link-normal" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="header-link-normal" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header-link-normal" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="header-link-normal" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="header-link-normal" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
