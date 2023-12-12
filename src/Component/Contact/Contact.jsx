import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        "service_9q8jdf8",
        "template_8qe189k",
        form,
        "xMLIxfNmpThLyxEov"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center p-4 w-4/5 bg-white shadow-md rounded-md">
        <div className="mb-6">
          <img
            className="mx-auto"
            src="https://i.postimg.cc/MKxyr2gc/Smartparcel-Mail-GIF-Smartparcel-Mail-Letter-Discover-Share-GIFs.gif"
            alt="Contact Image"
          />
          <p className="text-center text-gray-500">Connect with me</p>
          <div className="flex gap-5 justify-center mt-5">
            <a href="https://twitter.com/DinarWeb14783">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-mojahidul-islam-71675629b/">
              <img src="https://i.postimg.cc/pLNBXCxr/linkedin.png" alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552796227649">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name" // make sure this matches the email template
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email" // make sure this matches the email template
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // make sure this matches the email template
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value={"Send"}
              className="bg-blue-500 cursor-pointer btn text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
