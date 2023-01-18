

const Form = () => {
    return (
        <form className="projects buttons-color-letter text-center w-96 sm:w-80 m-auto mb-10 rounded-xl py-10" action="https://formspree.io/f/xayagopa" method="POST">
            <label className="buttons-color-letter text-lg" htmlFor="fname">Name:</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder="Type your name" className="buttons-color-letter bg-blue-50 rounded border-2 border-gray-200 p-2.5 outline-none" />
            <br />
            <br />
            <label className="buttons-color-letter text-lg" htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" placeholder="Type your email" className="buttons-color-letter bg-blue-50 rounded p-2.5 border-2 border-gray-200 outline-none" />
            <br />
            <br />
            <label className="buttons-color-letter text-lg">Send me your message:</label>
            <br />
            <textarea name="comment" rows="3" cols="40" placeholder="Type your message" className="buttons-color-letter bg-blue-50 rounded p-2.5 border-2 border-gray-200 w-80 sm:w-60 outline-none"></textarea>
            <br />
            <br />
            <input className="send-form buttons-color-form font-bold p-2.5 w-40 rounded-3xl py-5 cursor-pointer transition-all duration-500 hover:text-gray-400 hover:bg-blue-500 hover:text-blue-50 active:transform hover:translate-y-1" type="submit" value="Submit" />
        </form>
    )
}

export default Form
