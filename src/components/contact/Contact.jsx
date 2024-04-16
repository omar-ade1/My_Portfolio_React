import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "../shared/Title";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    showCloseButton : true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });



  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()

    emailjs
      .sendForm("service_cpvrnnk", "template_9svkwho", form.current, {
        publicKey: "bfTIidr9Ou9sgFPyr",
      })
      .then(
        () => {
          Toast.fire({
            icon: "success",
            title: "The message was sent successfully"
          });
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="bg-[#051923]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#000814"
            fillOpacity="1"
            d="M0,224L0,224L288,224L288,32L576,32L576,224L864,224L864,32L1152,32L1152,192L1440,192L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-[#000814] py-[50px]">
          <Title title="contact us" />

          <div className="container smT0:flex-col flex justify-around items-start ">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-4 grid-rows-7 smT0:grid-rows-8 smT0:w-full w-[50%] gap-5">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                className="all-input-filld-contact input-contact "
                type="text"
                required
                placeholder="Name"
                name="from_name"
              />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                className="all-input-filld-contact input-contact "
                type="email"
                required
                placeholder="Email"
                name="from_email"
              />

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                className="all-input-filld-contact col-span-4 outline-none p-2 bg-[#013566] row-span-4 rounded resize-none text-white"
                id="msg"
                required
                placeholder="Message"
                name="message"
                
              ></motion.textarea>
              <motion.button whileTap={{ scale: 1.01 }} className="border col-start-3 col-end-5 row-span-1 rounded bg-red-500 text-white font-bold">
                send
              </motion.button>
            </form>

            <div className="img w-[40%] smT0:w-full flex justify-center items-center">
              <img loading="lazy" className="w-[300px]" src="./contact.svg" alt="contact-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
