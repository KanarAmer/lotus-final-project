import React, { useState } from 'react'
// utils
import { feedContent } from '../utils/fake-instances'
import FeedElement from '../components/FeedElement'
// styles
import Styles from '../styles/Pages/Community.module.css'


const Community = () => {

  // States
  const [Data, setData] = useState(feedContent)

  return (
    <div className={Styles["Community"]}>
      <div className={Styles["feed"]}>
        {/* feed */}
        <h3 className={Styles['feed-title']}>Welcome To Our Community</h3>
        {/* feed form */}
        <form className={Styles['feed-form']} onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder='Image URI' />
          <input type="text" placeholder='Description' />
          <input type="submit" value="+" title='Submit' />
        </form>
        {
          Data.length
            ? Data.map((element, i) => 
              <FeedElement key={i} element={element} />)
            : <h3>Feed is empty.</h3>
        }
      </div>
    </div>
  )
}

export default Community
