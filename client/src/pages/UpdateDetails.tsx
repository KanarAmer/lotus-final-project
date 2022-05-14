import axios from 'axios'
import React, { useEffect, useState } from 'react'
// Styles:
import Styles from "../styles/Pages/SignIn.module.css"

function UpdateDetails() {
    
    //if already logged in, redirect to home page
    const isLoggedIn = async (token: any) => {
        const result = await axios.get("http://localhost:5000/api/auth/", {
            headers: {
              'auth-token': token
            }
          })
          if(!result.data.success) {
            localStorage.removeItem('token')
            window.location.reload()
          }
        }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) isLoggedIn(token)
        if(!token) window.location.href = "/"
    }, [])

    //Inputs state
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        lastMenstruation: ""
    })

    //Response feedback state
    const [feedback, setFeedback] = useState("")

    //Change event handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    //Submit handler
    const handleSubmit = async (e: React.FormEvent) =>  {
        e.preventDefault()
        axios.patch("http://localhost:5000/api/auth/", {name: inputs.name, email:inputs.email, password:inputs.password, lastMenstruation: inputs.lastMenstruation}, {
            headers: {
              'auth-token': localStorage.getItem('token') || ''
            }
          })
        .then(result => {
            setFeedback(result.data.details)
        })
        .catch(err => {
            setFeedback(err.response.data.details || "Unknown error.")
        })
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        axios.delete("http://localhost:5000/api/auth/")
        .then(result => {
            setFeedback(result.data.details)
        })
        .catch(err => {
            setFeedback(err.response.data.details || "Unknown error.")
        })
    }

    return (
        <main className={Styles['SignIn']}>
            <fieldset>
                <legend><h1 className={Styles['updateDetailsTitle']}>Update Details</h1></legend> 
                <form className={Styles["some-class"]}>
                <input className={Styles['field']} type="name" onChange={(e) => handleChange(e)} name="name" placeholder="name" value={inputs.name}/>
                    <input className={Styles['field']} type="email" onChange={(e) => handleChange(e)} name="email" placeholder="email" value={inputs.email}/>
                    <input className={Styles['field']} type="password" onChange={(e) => handleChange(e)} name="password" placeholder="password" value={inputs.password}/>
                    <label>
                    last menstruation:
                    </label>
                    <input className={Styles['field']} type="date" onChange={(e) => handleChange(e)} name="lastMenstruation" placeholder="last menstruation" value={inputs.lastMenstruation}/>
                    <div className={Styles['buttonsBox']}>
                        <input type="submit" value="Update details" onClick={(e) => handleSubmit(e)}/>
                        <button onClick={(e) => handleDelete(e)}>Delete Account</button>
                    </div>
                </form>
            </fieldset>
            <p className={Styles["signin-feedback"]}>{feedback}</p>
        </main>
    )
}


export default UpdateDetails
