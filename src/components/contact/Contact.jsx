import './contact.css'

const Contact = () =>{
    return(
        <div className="contat-form" id="contact">
            <form action="">
                <div className="form-group">
                    <input type="text" name="text" id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="number" name="telephone" id="" placeholder="Telephone" />
                </div>
                <div className="form-group">
                    <textarea 
                    name="message"
                    placeholder="message"
                    id='message'
                    cols={32}
                    rows={10}>
                    </textarea>
                </div>
                <button type="submit" className='button'>Submit</button>
            </form>
        </div>
    )
}

export default Contact