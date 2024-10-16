import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

function Contact() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_pitrwoi',
        'template_9z9c6in',
        form.current,
        '1GtQ2moaDAl6DQ-MF'
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact mt-10">
      <div className="bg-gray-900 py-12 px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-white text-6xl font-bold opacity-10 tracking-widest text-center">
              CONTACT
            </h1>
            <div className="flex flex-col items-center mt-[-70px]">
              <h2 className="text-white text-2xl font-bold">Get in Touch</h2>
              <div className="bg-aqua h-1 w-20 mt-2"></div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
            <div className="md:col-span-4">
              <h3 className="text-white text-xl">Send Us a Note</h3>
              <div className="bg-aqua h-1 w-16 mt-2"></div>

              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg mt-8 gap-4"
              >
                <h2 className="text-white text-xl font-bold text-center">
                  Email Me ✉️
                </h2>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 focus:border-aqua focus:outline-none"
                />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 focus:border-aqua focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 focus:border-aqua focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 focus:border-aqua focus:outline-none"
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-md cursor-pointer"
                />
              </form>
            </div>

            <div className="md:col-span-3 mt-20">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-aqua h-8 w-1"></div>
                    <h3 className="text-white text-xl">Contact Us</h3>
                  </div>
                   <p className="text-gray-400 text-sm mt-2">
                    If you have any questions regarding Me, please do not
                    hesitate to get in touch with Me today.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-aqua h-8 w-1"></div>
                    <h3 className="text-white text-xl">Contact Details</h3>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center space-x-4">
                      <i className="fa-solid fa-location-dot text-white"></i>
                      <span className="text-gray-400">AP, India</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <i className="fa-solid fa-phone text-white"></i>
                      <a href="tel:+91 7095392139" className="text-gray-400">
                        +91 7095392139
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <i className="fa-regular fa-envelope text-white"></i>
                      <a
                        href="mailto:praveenpkumar.2024@gmail.com"
                        className="text-white"
                      >
                        praveenpkumar.2024@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-aqua h-8 w-1"></div>
                    <h3 className="text-white text-xl">Follow Me</h3>
                  </div>
                  <div className="flex space-x-6 mt-4">
                    <a
                      href="https://www.instagram.com/praveen_9866/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/praveen-kumar-paradesi-99a53022a/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://github.com/praveenkumar-ui-developer"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div> 
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-800">
        <div className="py-4 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <p className="text-aqua text-lg">
              Thanks for visiting my Portfolio! We define your project and your
              goals together with you.
            </p>
            <ul className="flex space-x-6 justify-center sm:justify-end mt-4 sm:mt-0">
              <li>
                <Link to="home" spy={true} smooth={true} offset={0} duration={400}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={0} duration={400}>
                  About
                </Link>
              </li>
              <li>
                <Link to="whatido" spy={true} smooth={true} offset={0} duration={400}>
                  What I Do
                </Link>
              </li>
              <li>
                <Link to="resume" spy={true} smooth={true} offset={0} duration={400}>
                  Resume
                </Link>
              </li>
            </ul>
          </div> 
        </div>
      </div>*/}
    </div>
  );
}

export default Contact;
