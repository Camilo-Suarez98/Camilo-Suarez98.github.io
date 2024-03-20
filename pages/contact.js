import { useRef, useEffect } from 'react';
import FormInput from '../components/FormInput';
import Layout from '/components/Layout';

const contact = () => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Layout title="Contact">
      <h2 className="font-semibold text-4xl text-center mb-8">Contact Form</h2>
      <div className="flex flex-col items-center justify-start py-7">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Send me a message</h2>
          <form className="flex flex-col" action="https://getform.io/f/Qe1gmobJ" method='POST'>
            <FormInput ref={inputRef} type="text" name="name" placeholder="Full Name" />
            <FormInput type="email" name="email" placeholder="Email" />
            <textarea
              name="message"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Message"
              cols={50}
              required
            />
            <button
              type="submit"
              className="projects buttons-color-letter text-indigo-50 font-bold py-2 px-4 rounded-md mt-4 transition ease-in-out duration-150"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
