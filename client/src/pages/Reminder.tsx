import React, { useEffect, useState } from 'react'
// utils
import { reminderContent, reminderContent__type } from '../utils/fake-instances'
// styles
import Styles from '../styles/Pages/Reminder.module.css'
import ReminderCard from '../components/ReminderCard'


function Reminder() {

  // states
  const [Data, setData] = useState<reminderContent__type[]>([])
  // handlers
  const fetchData = () => setData(reminderContent)
  // effects
  useEffect(fetchData, [])

  return (
    <div className={Styles['Reminder']}>
      <h2 className={Styles['reminders-title']}>Reminders</h2>
      <section className={Styles['reminders-section']}>
        {
          Data.length
            ? Data.map(reminder => 
            <ReminderCard key={reminder._id} reminder={reminder} />)
            : <h3 className={Styles['empty-list']}>No Reminders found</h3>
        }
      </section>
    </div>
  )
}

export default Reminder