import React from 'react';
import heroImg from './media/HeroImg.png'
import linePeople from './media/LineofHappyPeople.jpg'
import family from './media/Family.jpg'
import ManLaptop from './media/MansittingLaptop.jpg'

function Main() {
    return (
        <>
            <main>
                <div className="heroBackground">
                    <div className="container">
                        <div className="wall row">
                            <div className=" col-sm-5 ">
                                <h1>Start free creating a form for yourself here!</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at suscipit dui, vitae ultricies elit. Curabitur tincidunt vestibulum felis, at semper metus tempor id.</p>
                                <button>Sign up Free!</button>
                            </div>
                            <div className=" col-sm-7 ">
                                <img className="img-responsive" src={heroImg}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-pull-1 col-sm-10 col-sm-push-1">
                                <p className='heroText'>lorem epson</p>
                                <h3 className='heroTextMid'>lorem</h3>
                                <p className='heroText'>lorem epson</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img className="img-responsive" src={ManLaptop}></img>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2>Create a form from Anywhere!</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at suscipit dui, vitae ultricies elit. Curabitur tincidunt vestibulum felis, at semper metus tempor id. Cras pretium hendrerit odio nec laoreet. Praesent feugiat urna eros, sit amet placerat magna varius sed. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img className="img-responsive" src={linePeople}></img>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2>Use these forms to survey people's opinion for anything!</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>Nullam mollis nibh eros. Cras in risus nec leo mollis dignissim. Aliquam ac sapien sapien. Vivamus tempor arcu vel lacus tincidunt, sit amet hendrerit purus dapibus. Maecenas eget ornare nibh. Sed lacus magna, luctus at felis at, dignissim consectetur arcu. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img className="img-responsive" src={family}></img>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2>We want you to be part of our familia!</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>Proin aliquet elit quis euismod consequat. Nunc tristique, odio sit amet elementum venenatis, libero justo fermentum sapien, in interdum quam massa in tellus. Pellentesque a nisi nec enim interdum porttitor. Etiam quis tellus et purus efficitur hendrerit. Quisque sit amet egestas urna. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <button>Sign Up!</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )

}


export default Main