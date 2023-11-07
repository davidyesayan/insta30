import React from 'react'
import style from './Spinner.module.css'

function Spinner() {
  return (
    <div className={style.spinner}>
      <div className={style["lds-ring"]}><div></div><div></div><div></div><div></div></div>
      <div className={style.loadingTxt}>Loading will take 2 seconds...</div>
    </div>
  )
}

export default Spinner
