import React, { useState, useEffect } from 'react';
import heroImg from './media/HeroImg.png'
import linePeople from './media/LineofHappyPeople.jpg'
import family from './media/Family.jpg'
import ManLaptop from './media/MansittingLaptop.jpg'

function Main() {
    const [hero, setHero] = useState([]);
    const [boxOne, setBoxOne] = useState([]);
    const [boxTwo, setBoxTwo] = useState([]);
    const [boxThree, setBoxThree] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3030/api/main/hero")
        .then(response => response.json())
        .then(hero => {
            setHero(hero);
        });
        
        fetch("http://localhost:3030/api/main/descriptionOne")
        .then(response => response.json())
        .then(boxOne => {
            setBoxOne(boxOne);
        });

        fetch("http://localhost:3030/api/main/descriptionTwo")
        .then(response => response.json())
        .then(boxTwo => {
            setBoxTwo(boxTwo);
        });

        fetch("http://localhost:3030/api/main/descriptionThree")
        .then(response => response.json())
        .then(boxThree => {
            setBoxThree(boxThree);
        });
    }, []);
    return (
        <>
            <main>
                <div className="heroBackground">
                    <div className="container">
                        <div className="wall row">
                            <div className=" col-sm-5 ">
                                <h1>{hero.title}</h1>
                                <p>{hero.body}</p>
                                <button>Sign up Free!</button>
                            </div>
                            <div className=" col-sm-7 ">
                                <img className="img-responsive" src={heroImg}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-pull-1 col-sm-10 col-sm-push-1">
                               
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
                                        <h2>{boxOne.title}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>{boxOne.body} </p>
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
                                        <h2>{boxTwo.title}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>{boxTwo.body} </p>
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
                                        <h2>{boxThree.title}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>{boxThree.body} </p>
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