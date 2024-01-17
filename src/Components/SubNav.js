import React from 'react'

const SubNav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav snav">
                            {/* <img src="" alt="" /> */}
                            <p class="nav-link " aria-current="page" href="#">Home Icon</p>
                            <p class="nav-link " aria-current="page" href="#"> > Flashcard ></p>
                            <p class="nav-link" href="#">Mathematics ></p>
                            <p class="nav-link" href="#">Relation and function</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SubNav