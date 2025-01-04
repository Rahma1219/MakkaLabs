import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import modules from './Navbar.module.css'
import Logo from '../../../public/Images/Logo.png'
import CLoseIcon from '../../../public/Images/cross.png'
import MenuIcon from '../../../public/Images/menu-bar.png'







function Navbar() {
    const [showSidebar, setshowSidebar] = useState(false)




    function ShowSidebar() {
        setshowSidebar(true)
    }
    function hiddenSidebar() {
        let Finalresult = !showSidebar
        setshowSidebar(Finalresult)

    }



    const [activeTab, setActiveTab] = useState("../../Pages/الصفحة _الرئيسية/الصفحة _الرئيسية.jsx");

    const routes = [
        { path: "/الصفحة_الرئيسية", label: "الرئيسية" },
        { path: "/عن_معامل_مكة", label: "عن معامل مكة" },
        { path: "/خدماتنا", label: "خدماتنا" },
        { path: "/للتواصل_معنا", label: "للتواصل معنا" },
    ];


    function scrollWin() {
        window.scrollTo(0, 0);
    }




    return (
        <header>
            <nav className={modules.navbar} >


                {showSidebar == true ? (
                    <div id={modules.bg3}>
                        <ul className={modules.Sidebar}>

                            <a href="#" onClick={hiddenSidebar} id={modules.closeicon}><img src={CLoseIcon}></img></a>
                            {routes.map((route) => (
                                <div className={modules.containersidebar}>
                                    <li key={route.path} className={activeTab === route.label ? modules.active : modules.none} onClick={() => setActiveTab(route.label)} >
                                        <Link to={route.path} id={modules.link} className={modules.link2} onClick={scrollWin}>
                                            {route.label}</Link>
                                    </li>
                                </div>

                            ))}
                        </ul>
                    </div>
                ) : null
                }





                <div className={modules.nav}>
                    <div className={modules.navsec}>
                        <div className={modules.rightnav}>
                            <ul className={modules.tabs}>

                                <div className={modules.logo}>
                                    <Link to="/الصفحة_الرئيسية">  <img src={Logo} alt="" /></Link>

                                    <Link to="/الصفحة_الرئيسية" id={modules.logotext} >  <span  > معامل مكة<br />للتحاليل الطبية</span> </Link>
                                </div>
                                {routes.map((route) => (
                                    <div className={modules.leftnav}>
                                        <li key={route.path} className={activeTab === route.label ? modules.active : modules.none} onClick={() => setActiveTab(route.label)} >
                                            <Link to={route.path} id={modules.link} onClick={scrollWin}>
                                                {route.label}</Link>
                                        </li>
                                    </div>

                                ))}
                            </ul>

                        </div>
                        
                        <div className={modules.leftnav2}>
                            <li onClick={ShowSidebar} className={modules.menubtn}><a href="#" id={modules.showicon}><img id={modules.dd} src={MenuIcon}></img></a></li>
                        </div>
                    </div>
                </div>



            </nav >



            {/* <nav className="navbar">

                <div className='logo'>
                    <Link to="/home"  >     <img src={Logo} alt=""  /></Link>
          
                    <span id='logotext'> معامل مكة<br />
                        للتحاليل الطبية</span> 
                    {/* <span id='logotext'>/span> */}

            {/* </div>


                <div className='nav'> 
                    <ul id='links'>
                        <li>
                            <Link to="/Home" id='link'  >الصفحة الرئيسية</Link>

                        </li>

                         <li>
                            <Link to="/contactus" id='link' className='link2' > للتواصل معنا</Link>
                        </li>

                       {/* <li> */}

            {/* <Link to="/contact" id='link' className='link3' >Contact</Link> */}

            {/* </li> */}





            {/* </ul>  */}



            {/* <Link>  <img src={carticon} alt="carticon" id='iconcart'  /></Link> */}



            {/* //     </div> */}






            {/* // </nav> */}
        </header >


    )
}

export default Navbar