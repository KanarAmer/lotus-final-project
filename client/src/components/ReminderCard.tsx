import React from 'react'
// styles
import Styles from '../styles/Components/ReminderCard.module.css'
import { formatDate } from '../utils'
import { reminderContent__type } from '../utils/fake-instances'


const ReminderCard: React.FC<{reminder: reminderContent__type}> = ({reminder}) => {

  return (
    <div className={Styles['ReminderCard']}>
      <h3 className={Styles['reminder-name']}>{reminder.name}</h3>
      <h4 className={Styles['reminder-docnam']}>{reminder.Docname}</h4>
      <h4 className={Styles['reminder-doc']}>{formatDate(reminder.DoC)}</h4>
    </div>
  )
}

export default ReminderCard
