import React, { useEffect, useState } from 'react'
import Styles from '../styles/Pages/Tracker.module.css'
import axios from 'axios';
import checkToken from '../tokenInit';
import { Button, Typography } from '@mui/material'
import {weekInfo} from '../utils/data'

function Tracker() {

    const [currentWeek, setCurrentWeek] = useState(0)


    const getWeek = async () => {
        const countFrom = await axios.get('http://localhost:5000/api/tracker/',{
            headers: {
                'auth-token': localStorage.getItem('token') || ''
            }}
        )
        const currentDate = new Date(Date.now()).getTime()
        const lastM = new Date(countFrom?.data.details).getTime()
        const diffInMs = Math.abs(currentDate - lastM);
        const week = Math.trunc(diffInMs / 604800000) + 1
        setCurrentWeek(week)
}


    useEffect(() => {
        checkToken()
        getWeek()
    }, [])

    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', minHeight: '50vh'}}>
            <Typography fontFamily="Dongle" fontSize="5em" color="#0029FFB5" textAlign="center">Week {currentWeek}</Typography>
            <Typography fontFamily="Dongle" maxWidth="45%" fontSize="2.5em" color="rgba(206, 0, 112, 0.9)" textAlign="center" >{weekInfo[currentWeek]}</Typography>
            <Button href="/update" variant='contained' style={{ backgroundColor: 'rgba(0, 102, 255)', fontSize: '1.2em', paddingLeft: '32px', paddingRight: '32px' }}>Update my last menstruation date</Button>
            
        </main>
    )
}

export default Tracker