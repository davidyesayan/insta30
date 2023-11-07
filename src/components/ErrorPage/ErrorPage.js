import React from 'react'
import style from './ErrorPage.module.css'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function ErrorPage() {
    const navigate = useNavigate()
  return (
    <div className={style.error}>
        <Helmet>
                <style>{'body { background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%);; }'}</style>
        </Helmet>
      <h1>Sorry, something went wrong.</h1>
      <span onClick={() => navigate('/')}>Go back</span>
    </div>
  )
}

export default ErrorPage
