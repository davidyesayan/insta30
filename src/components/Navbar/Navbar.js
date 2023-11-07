import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, toggleSearch } from '../../store/slices/search/searchSlice'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const search = useSelector(selectSearch)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="navbar">
        <div className="nav-wrapper">
            <NavLink to='/'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
            {location.pathname === '/' && <input value={search} onChange={(e) => dispatch(toggleSearch(e.target.value))} type="text" className="search-box" placeholder="Search"/>}
            <div className="nav-items">
                <NavLink to='/'><img src={IMAGES.home} className="icon" alt=""/> </NavLink>
                <NavLink to='/messenger'><img src={IMAGES.messenger} className="icon" alt=""/> </NavLink>
                <NavLink to='/create'><img src={IMAGES.add} className="icon" alt=""/></NavLink>
                <span to='/explore' onClick={() => navigate('/error')}><img src={IMAGES.explore} className="icon" alt=""/></span>
                <span to='/notification' onClick={() => navigate('/error')}><img src={IMAGES.like} className="icon" alt=""/></span>
                <NavLink to='/profile'><img src={IMAGES.blankImg} className="icon user-profile" /></NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar