import React, { useEffect, useRef } from 'react'
import style from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUsers } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { withPassword } from '../../hoc/withPassword'
import { Slide } from 'react-slideshow-image'

function Login({visible, toggleShowPassword}) {
  const dispatch = useDispatch()
  const { usersData, currentUser } = useSelector(selectUsers)
  const formRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const [{ value: login }, { value: password }] = formRef.current

    dispatch(logIn({ login, password }))

    formRef.current.reset()
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers())
    }
  }, [])

  const slideImages = [
    {
      url: IMAGES.blankImg
    },
    {
      url: IMAGES.cover10
    }
  ]
  return (
    <div className={style.login}>

      <div className={style.phones}>
        <img className={style.imgHolder} src={IMAGES.loginPhones} alt=""/>
        <img className={style.images} src={IMAGES.screenshot} alt="" />
      </div>

      <div className={style.loginWrapper}>

        <div className={style.formHolder}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <img className={style.logo} src={IMAGES.logo} alt="" />
            <input className={style.inputField} type="text" defaultValue={'bret'} placeholder='login' /><br /><br />
            <>
              <input className={style.inputField} type = {visible ? 'password' : 'text'} defaultValue={'gwenborough'} placeholder='password' />
              <span onClick={toggleShowPassword} className={style.showPass}>
                <FontAwesomeIcon icon={faEye} />
              </span>
            </><br /><br />
            <button>Log in</button>
            <div>________________________________<span>OR</span>________________________________</div>
            <div className={style.fb}> <img src={IMAGES.fbLogo} className={style.fbLogo} alt="" />Log in with Facebook</div>
            <div className={style.forgot}>Forgot password?</div>
          </form>
        </div>

      </div>
      <div className={style.signUp}>
        <span>Don't have an account?</span>
        <span className={style.signUpBtn}>Sign up</span>
      </div>
      <div className={style.getApp}>Get the app.</div>

      <div className={style.getAppHolder}>
        <img className={style.getAppImg} src={IMAGES.microsoft} alt="" />
        <img className={style.getAppImg} src={IMAGES.googlePlay} alt="" />
      </div>

      <footer>© 2023 Instagram from Meta</footer>

    </div>
  )
}

export default withPassword(Login)
