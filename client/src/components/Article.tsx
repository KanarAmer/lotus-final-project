import React from 'react'
import { useNavigate } from 'react-router-dom'
// styles
import Styles from '../styles/Components/Article.module.css'
import { formatDate } from '../utils'
import { articlesContent__type } from '../utils/fake-instances'


const Article: React.FC<{article: articlesContent__type}> = ({article}) => {

  const navigate = useNavigate()
  return (
    <div className={Styles['Article']} onClick={() => navigate(`/article/${article._id}`)}>
      <div className={Styles["article-metadata"]}>
        <h3 className={Styles['article-title']}>{article.title}&nbsp;</h3>
        <h3 className={Styles['article-doc']}>({formatDate(article.DoC)})</h3>
      </div>
      <hr />
      <p>{article.content}</p>
    </div>
  )
}

export default Article
