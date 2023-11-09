import React from 'react'
import { ThunderboltFilled } from "@ant-design/icons"
import { NavLink } from 'react-router-dom';



export default function Header() {
    return (
        <div className='header-container' id='header-active'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between navbar-page-home top-header">
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className='left-header-home d-flex align-items-center'>
                    <NavLink className="navbar-brand name-home d-flex mr-3" to="/"><span className='mr-1'>Logo</span> <ThunderboltFilled className='logo-home' /></NavLink>
                    <form className="form-inline my-lg-0 top-btn">
                        <input className="form-control " type="search" placeholder="Find Service" aria-label="Search" />
                        <button className=" my-sm-0 btn-search-home" type="submit">Search</button>
                    </form>
                </div>
                <div className='right-header-home d-flex align-items-center'>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item li-1 active">
                            <a className="nav-link" href="/">Blog<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  user-item" to={`/title-home/${2}/${3}`}>
                                <img width={30} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avata" />
                                <p>Phan Nhut Thai</p>
                                {/* here I go wrong way so can't call Api true User */}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
