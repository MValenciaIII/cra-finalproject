import React, { useState, useEffect } from 'react';


const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        question:"",
        description:""
    })

    const handleSubmit = (event) => {
        

        fetch('http://localhost:3030/api/contact/create' , {
            method: 'POST', 
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify(inputs),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error', error);
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setInputs(prevState => {
            return {...prevState, [name]: value};
        });
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Want to Contact us?</h1>
                        <div className="row">
                            <div className="col-sm-12 text-center ">
                                <h3>Fill out these fields and Well get back as soon as possible</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        
                    </div>
                    <div className="col-sm-4">
                    
                    </div>
                    <div className="col-sm-4">
                    
                    </div>
                </div>
                <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate>
                    <div className="row contactFirst">
                        <div className="col-sm-4 text-center">
                            <p className="contactWords"> How can we Help?</p>
                        </div>
                        <div className="col-sm-4">
                            <input className="inputFill" name="name" value={inputs.name} onChange={handleChange} type="text" placeholder="Your Name" required ></input>
                        </div>
                        <div className="col-sm-4">
                        <input className="inputFill" name="email" value={inputs.email} onChange={handleChange} type="text" placeholder="Email"></input>
                            
                        </div>
                    </div>
                    <div className="row contactSecond">
                        <div className="col-sm-4">
                            
                        </div>
                        <div className="col-sm-8">
                        <input className="inputFill" name="question" value={inputs.question} onChange={handleChange} type="text" placeholder="Question"></input>
                            
                        </div>
                    </div>
                    <div className="row contactThird">
                        <div className="col-sm-4">
                            
                        </div>
                        <div className="col-sm-8">
                        <textarea id="" name="description" value={inputs.description} onChange={handleChange} rows="8" cols="110"></textarea>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-push-11 col-sm-1">
                            <button>Send it!</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>       
    )
}

export default Contact