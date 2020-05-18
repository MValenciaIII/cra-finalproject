import React from 'react'

const About = () => {
    return (
        <main>
            <div className="aboutUsHero">
                <div className='container'>
                    <div className='row'>
                        <div className='aboutUs col-sm-12 text-left'>
                            <h1>About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row myself">
                    <div className="col-sm-4">
                        <h2>Who I am</h2>
                        <img className="img-responsive" src="https://via.placeholder.com/300x300?text=Visit+ValensForm"></img>
                        <p>My name is Margarito Valencia. I created this website to show that I understand react, mySQL, and nodeJS.</p>
                    </div>
                    <div className="col-sm-push-2 col-sm-6">
                        <h2>Purpose of this website.</h2>
                        <p>This website will help you create forms for any kind of purposes. This could create surveys, or questions.</p>
                    </div>
                </div>
            </div>    
        </main>
    )
}

export default About