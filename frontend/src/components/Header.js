import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const HeaderNav = (props) => {
    const navigate = useNavigate();

    return (
            <nav className="navbar bg-light sticky-top">
                <div className="container-fluid">

                    <a className="navbar-brand mx-left" onClick={()=>navigate(-1)}>
                        <img src="https://img.icons8.com/ios/50/000000/back--v1.png" alt="" width="30" height="24"
                             className="d-inline-block align-text-top"/>

                    </a>
                    <a className="navbar-brand mx-auto" href="#">
                        <img src="https://img.icons8.com/dusk/64/000000/restaurant-menu.png" alt="" width="30"
                             height="24" className="d-inline-block align-text-top"/>
                            Online menu
                    </a>

                    <Link className="navbar-brand mx-right " to={"/orders"}>

                        <img src="https://img.icons8.com/ios/50/000000/buy--v1.png" alt="" width="30" height="24"
                             className="d-inline-block align-text-top"/>

                    </Link>
                </div>
            </nav>
    );
};

export default HeaderNav;