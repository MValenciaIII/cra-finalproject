import React, { useState, useEffect } from 'react';

interface Person {
    id: string;
    firstName: string;
    lastName: string;
}

/* Must be signed in to create a form. Create a conditional if signed in or up to create a form. 

Whenever someone clicks create a new form, it will save to their account, and create a new table in the database


*/
const Createform = () => {
   const [change, changeInput] = useState(false)
   const [array, arrayData] = useState([

       {
         type:'',
         fields:''
       }
   ]
   )

    
    const dataSend = (event) =>  {
       /*   let matchWords = document.querySelectorAll('.boxDetail')
        
        for (let i = 0; i < matchWords.length; i++) {
            const element = matchWords[i];
            let word = document.querySelectorAll('inputTitle')[i]
            let inputWord = document.querySelectorAll('inputTitle')[i + 1]
            
            
            
        } */

        // array.map(p => {
        //     return (

        //     )
        // )}
        const fields = event.target.value;
        
        arrayData(array => {
            return{
               
                ...array[0], fields: fields
            }
            
        })
        console.log(array.fields)

        
    }
    /* 
    const addSkill = () => {
        setUser(prevState => {
            return {
                ...prevState.user,
                skills: [...prevState.skills, ""]
            };
        });
    };
    
    
    const updateSkill = (e, index) => {
        const userCopy = { ...user };
        userCopy.skills[index] = e.target.value;
        setUser(userCopy);
    };
    
    const removeSkill = index => {
        const userCopy = { ...user };
        const userCopySkills = [...userCopy.skills];
        
        userCopySkills.splice(index, 1);
        
        setUser({
            ...userCopy,
            skills: [...userCopySkills]
        });
    };
    
    */
   /*    function update(e, index) {
          const arrayCopy = {...array}
          arrayCopy.type[index] += e.target.value
          arrayData(arrayCopy)
          console.log(array.type)
    
   
          
       } */
   const changeButton = (event) => {
    
        changeInput(change => !change)
     
   }



   function submit() {
    fetch('http://localhost:3030/api/fields' , {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body:JSON.stringify(array),

    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

    })
    .catch((error) => {
        console.error('Error', error);
    })
    
   }




   function dataMatch() {

   }

   function addElement(event) {
        event.preventDefault();
        
        const {type, value} = event.target;

        let page = document.querySelector('.Page');
        let box = document.createElement('div')
        box.setAttribute('class', 'row boxDetail');
        page.appendChild(box);

        let column = document.createElement('div');
        column.setAttribute('class', 'col-sm-12')
        box.appendChild(column);

        if(value == 'dropdown') {
            console.log('dropdown')
        } else if (value == 'text') {
            console.log('text')
        }   else if (value == 'choices') {
            console.log('choices')
        }


   }



   useEffect(() => {
    
    })


    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Creating your Form</h1>
                        <div className="row">
                            <div className="col-sm-6 text-left ">
                                <form onSubmit={addElement}>
                                    <select id="typeOption" name='type'  >
                                        <option value="dropdown">dropdown</option>
                                        <option value="text">Text</option>
                                        <option value="choices">Multiple Choice</option>
                                    </select>
                                    <button type="submit" >Add Form element</button>
                               </form>
                            </div>
                            <div className="col-sm-6 text-right">
                                <button onClick={changeButton}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row Page">
                        <div className="row boxDetail">
                            <div className="col-sm-12 text-center">
                                <h1 id='inputTitle' >{array.fields}Title</h1>
                                {change && <input type="text" name="fields" id="inputTitle" onChange={dataSend} placeholder="Title Change"></input>}
                            </div>
                        </div>
                        <div className="row boxDetail">
                            <div className="col-sm-12">
                                <h1 id='dropdown' >Lorem</h1>
                                    <select name>
                                        <option  name="fields"  id="inputTitle" value="Lorem">{array.field}Lorem</option>
                                        <option  name="fields"  id="inputTitle" value="Lorem">Lorem</option>
                                        <option  name="fields"  id="inputTitle" value="Lorem">Lorem</option>

                                    </select>
                                    {change && <input type="text" name="fields" onChange={dataSend}  id="dropdownValue" placeholder="Title Change"></input>}
                                    {change && <input type="text" name="fields"  id="dropdownValue" placeholder="Title Change"></input>}
                                    {change && <input type="text" name="fields"  id="dropdownValue" placeholder="Title Change"></input>}

                            </div>
                        </div>
                    <div className="row boxDetail">
                            <div className="col-sm-12">
                                <h1 id='dropdown' >Lorem</h1>
                                <ul>
                                    <li>
                                        <input type="radio"></input><p>1</p>
                                        {change && <input type="text" name="fields"  id="Choice" placeholder="Title Change"></input>}
                                    </li>
                                    <li>
                                        <input type="radio"></input><p>2</p>
                                        {change && <input type="text" name="fields"  id="Choice" placeholder="Title Change"></input>}
                                    </li>
                                    <li>
                                        <input type="radio"></input><p>3</p>
                                        {change && <input type="text" name="fields"  id="Choice" placeholder="Title Change"></input>}
                                    </li>
                                    <li>
                                        <input type="radio"></input><p>4</p>
                                        {change && <input type="text" name="fields"  id="Choice" placeholder="Title Change"></input>}
                                    </li>

                                </ul>
                                    
                                    {JSON.stringify(array, null, 2)}
                            </div>    
                        </div>
                </div>
            </div>
        </main>       
    )
}

export default Createform