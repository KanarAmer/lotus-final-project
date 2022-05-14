import React from 'react'
// utils
import { feedContent__type } from '../utils/fake-instances'
// styles
import Styles from '../styles/Components/FeedElement.module.css'
import AddCommentIcon from '@mui/icons-material/AddComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const FeedElement: React.FC<{element: feedContent__type}> = ({element}) => {

  return (
    <div className={Styles["FeedElement"]}>
      <section className={Styles["header"]}>
        <img src={element.profilePic} alt={element.username} />
        <h5>{element.username}</h5>
      </section>
      <section className={Styles["content"]}>
        <p className={Styles['description']}>{element.description}</p>
        
      </section>
      <div>
      <button className={Styles["button"]}>
         <AddCommentIcon/>
         </button>
         <button className={Styles["button"]}>
       <ThumbUpIcon/>
        </button>
        </div>
    </div>
  )
}

export default FeedElement
