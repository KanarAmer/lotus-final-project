import React, { useEffect, useState } from 'react'
import { articlesContent, articlesContent__type } from '../utils/fake-instances'
// styles
import Styles from '../styles/Pages/Articles.module.css'
import Article from '../components/Article'


function Articles() {
  
  // states
  const [Data, setData] = useState<articlesContent__type[]>([])
  // handlers
  const fetchData = () => setData(articlesContent)
  // effects
  useEffect(fetchData, [])

  return (
    <div className={Styles['Articles']}>
      <h2 className={Styles['articles-title']}>Articles</h2>
      <section className={Styles['articles-section']}>
        {
          Data.length
            ? Data.map(article => 
            <Article key={article._id} article={article} />)
            : <h3 className={Styles['empty-list']}>No Articles found</h3>
        }
      </section>
    </div>
  )
}

export default Articles