import React from 'react'

const NavBar = () => {
    return (
        // <h1>NavBar</h1>
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                
                <div className="container-fluid">
                    <div className="head">
                        <a className="navbar-brand cl" href="#">Hygge<b>X</b></a>
                    </div>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
                    <div className="head-1 collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Flashcard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar