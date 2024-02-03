import emailjs from "@emailjs/browser";
import { useRef } from "react";
import swal from "sweetalert";

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
          swal('Great!', 'Message Delivered Successfully', 'success')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="flex justify-center items-center">
      <div className="md:flex justify-between gap-6 py-3 md:py-10 px-3 md:px-10 w-full mx-6 md:mx-32 bg-white shadow-md rounded-md">
        <div className="mb-6">
          <img
            className="mx-auto"
            src="https://i.postimg.cc/MKxyr2gc/Smartparcel-Mail-GIF-Smartparcel-Mail-Letter-Discover-Share-GIFs.gif"
            alt="Contact Image"
          />
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
