import { useRef, useEffect } from 'react';

const FormInput = ({ type, name, placeholder }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (name === 'name') {
      inputRef.current.focus();
    }
  }, []);


  return (
    <>
      <input
        type={type}
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        required
      />
    </>
  )
}

export default FormInput