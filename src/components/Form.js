import "./Form.css"

const Form = () => {
    return(
        <div ckassName = "from">
        <form>
            <label>Your Name</label>
            <input type = "text"/>
            <label>Email</label>
            <input type = "email"/>
            <label >Subject</label>
            <input type = "text"/>
             <label>Message</label>
             <textarea rows = "7" placeholder = "Write your message here..."/>
             <button className = "btn">Submit</button>
        </form>

        </div>
    )
}
export default Form