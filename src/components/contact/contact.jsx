import React from 'react'
import "./contact.css"

export default function Contact(props) {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "1955a0b6-7a19-4e17-82e7-72d5b2f4a6d9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };
    

    return (
        <div id='contact' className='contact'>
            <h2>Contact me</h2>

            <div className='container'>

                <div className='left'>
                    <h3>Let's talk</h3>
                    <p className='last'>
                        I'm currently avialable to take on new projects, so feel
                        free to send me a message about anything that you want me 
                        to work on. You can contact any time. 

                    </p>

                    <div>
                        <p> <i class='bx bxs-envelope'></i>  thxdeadshotxht@gmail.com </p>
                    </div>

                    <div>
                        <p> <i class='bx bxs-phone-call' ></i> +976 959-220-72</p>
                    </div>

                </div>

                <form onSubmit={onSubmit} className='right'>
                    <h5>Your name</h5>
                    <input className='name' type='text' placeholder='Enter your name' name='name'></input>
                    <h5>Your email</h5>
                    <input className='email' type='text' placeholder='Enter your email' name='email'></input>
                    <h5>Write your message here</h5>
                    <textarea className='message' name='message' placeholder='Enter your message'></textarea>

                    <button type='submit'>Submit now</button>
                </form>

            </div>
        </div>
    )
}
