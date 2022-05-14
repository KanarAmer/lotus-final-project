import React, { useEffect, useState } from 'react'
import { articlesContent__type } from '../utils/fake-instances'
import { useParams } from 'react-router-dom'
// utils
import { formatDate } from '../utils'
import { articlesContent } from '../utils/fake-instances'
// styles
import Styles from '../styles/Pages/SpecificArticle.module.css'


const SpecificArticle: React.FC = () => {

  // states
  const { id } = useParams()
  const [data, setData] = useState<{
    data: articlesContent__type | null, 
    isLoading: boolean
  }>({
   data: null,
   isLoading: true 
  })
  // handlers
  const fetchSpecificArticle = () => {
    const article = articlesContent.filter(article => article._id === id)
    if (article.length) setData({
      data: article[0],
      isLoading: false
    })
    else setData({
      ...data,
      isLoading: false,
    })
  }
  // on page load
  useEffect(fetchSpecificArticle, [])

  if (data.data !== null && !data.isLoading) return (
    <div className={Styles["SpecificArticle"]}>
      <div className={Styles["article-section"]}>
        <div className={Styles["article-metadata"]}>
          <h3 className={Styles['article-title']}>{data.data.title}&nbsp;</h3>
          <h3 className={Styles['article-doc']}>({formatDate(data.data.DoC)})</h3>
        </div>
        <hr />
        <p>{data.data.content}</p>
      </div>
    </div>
  )
  else if (data.data === null && data.isLoading === true) return (
    <div className={Styles["SpecificArticle"]}>
      <h2 className={Styles['article-msg']}>Loading...</h2>
    </div>
  )
  else return (
    <div className={Styles["SpecificArticle"]}>
      <h2 className={Styles['article-msg']}>Invalid Article</h2>
    </div>
  )
}

export default SpecificArticle
