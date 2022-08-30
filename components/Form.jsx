

const Form = () => {
    return (
        <form className="text-white text-center" action="https://formspree.io/f/xayagopa" method="POST">
            <label for="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname" className="text-gray-800 outline-none" />
            <br />
            <br />
            <label for="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname" className="text-gray-800 outline-none" />
            <br />
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" className="text-gray-800 outline-none" />
            <br />
            <br />
            <label>Send me your message:</label>
            <br />
            <textarea name="comment" rows="5" cols="40" className="text-gray-800 w-80 sm:w-60 outline-none"></textarea>
            <br />
            <br />
            <input className="bg-blue-600 text-blue-800 font-bold w-24 rounded-md cursor-pointer hover:text-white active:transform hover:translate-y-1" type="submit" value="Submit" />
        </form>
    )
}

export default Form
