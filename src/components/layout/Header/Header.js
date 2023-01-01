import "./Header.css";
import {NavLink} from "react-router-dom";
import logo from "../../../_img/logo.png";
import englishFlag from "../../../_img/english.jpg";
import portugueseFlag from "../../../_img/portuguese.jpg";
import spanishFlag from "../../../_img/spanish.jpg";
import frenchFlag from "../../../_img/french.jpg";
import {useEffect, useState} from "react";
import {useLanguage} from "../../../Providers/LanguageContext";

function Header() {
    const {language, setLanguage, data, setData, currentPage, setCurrentPage} = useLanguage();

    const chooseLanguage = (lang) => {
        setLanguage(lang);
    }
    //console.log(data);
    //console.log(language);

    const [menuMobile, setMenuMobile] = useState(false);
    const toggleMenuMobile = () => {
        //console.log(menuMobile)
        setMenuMobile(!menuMobile);
    }

    useEffect(() => {
        const clone = currentPage.replace("./", "");
        setCurrentPage("./" + clone);
    }, [language]);
    //console.log(currentPage);

    return <nav className="Header">
        <div id="header_container">
            <div id="header_container_left">
                <div id="header_content_left">
                    <div id="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div id="name">
                        <h2>{data.header_name}</h2>
                        <p>{data.header_job}</p>
                    </div>
                </div>
            </div>
            <div id="header_container_right">
                <ul id="menu-desktop">
                    <li id="select">
                        {language === "english" && <NavLink to={currentPage}>
                            <img src={englishFlag} alt="Language selected" />
                            <span id="selected_language">{data.header_language}</span>
                            <span id="arrow">&#9660;</span>
                        </NavLink>}
                        {language === "portuguese" && <NavLink to={currentPage}>
                            <img src={portugueseFlag} alt="Language selected" />
                            <span id="selected_language">{data.header_language}</span>
                            <span id="arrow">&#9660;</span>
                        </NavLink>}
                        {language === "spanish" && <NavLink to={currentPage}>
                            <img src={spanishFlag} alt="Language selected" />
                            <span id="selected_language">{data.header_language}</span>
                            <span id="arrow">&#9660;</span>
                        </NavLink>}
                        {language === "french" && <NavLink to={currentPage}>
                            <img src={frenchFlag} alt="Language selected" />
                            <span id="selected_language">{data.header_language}</span>
                            <span id="arrow">&#9660;</span>
                        </NavLink>}

                        <ul>
                            {language !== "english" && <li id="lang_en" className="options">
                                <NavLink to={currentPage}><img onClick={() => chooseLanguage("english")} src={englishFlag} alt="English flag" /> </NavLink>
                            </li>}
                            {language !== "portuguese" && <li id="lang_pt">
                                <NavLink to={currentPage}><img onClick={() => chooseLanguage("portuguese")} src={portugueseFlag} alt="Portuguese flag" /></NavLink>
                            </li>}
                            {language !== "spanish" && <li id="lang_sp">
                                <NavLink to={currentPage}><img onClick={() => chooseLanguage("spanish")} src={spanishFlag} alt="Spanish flag" /> </NavLink>
                            </li>}
                            {language !== "french" && <li id="lang_fr">
                                <NavLink to={currentPage}><img onClick={() => chooseLanguage("french")} src={frenchFlag} alt="French flag" /> </NavLink>
                            </li>}
                        </ul>
                    </li>
                    <li onClick={() => setCurrentPage("contact")}><NavLink to={"/contact"}>{data.header_contacts}</NavLink></li>
                    <li onClick={() => setCurrentPage("portfolio")}><NavLink to={"/portfolio"}>{data.header_portfolio}</NavLink></li>
                    <li onClick={() => setCurrentPage("about")}><NavLink to={"/about"}>{data.header_aboutme}</NavLink></li>
                    <li onClick={() => setCurrentPage("home")}><NavLink to={"/home"}>{data.header_home}</NavLink></li>
                </ul>

                {menuMobile && <ul id="menu-mobile">
                    <li onClick={() => {
                        setMenuMobile(false);
                        setCurrentPage("home");
                    }}><NavLink to={"/home"}>{data.header_home}</NavLink></li>
                    <li onClick={() => {
                        setMenuMobile(false);
                        setCurrentPage("about");
                    }}><NavLink to={"/about"}>{data.header_aboutme}</NavLink></li>
                    <li onClick={() => {
                        setMenuMobile(false);
                        setCurrentPage("portfolio");
                    }}><NavLink to={"/portfolio"}>{data.header_portfolio}</NavLink></li>
                    <li onClick={() => {
                        setMenuMobile(false);
                        setCurrentPage("contact");
                    }}><NavLink to={"/contact"}>{data.header_contacts}</NavLink></li>
                    <li>

                        <ul id="options_Mob">
                            {language !== "english" && <li id="lang_en_Mob">
                                <NavLink to={currentPage}><img onClick={() => {
                                    setMenuMobile(false);
                                    chooseLanguage("english");
                                }} src={englishFlag} alt="English flag" />
                                </NavLink>
                            </li>}
                            {language !== "portuguese" && <li id="lang_pt_Mob">
                                <NavLink to={currentPage}><img onClick={() => {
                                    setMenuMobile(false);
                                    chooseLanguage("portuguese");
                                }} src={portugueseFlag} alt="Portuguese flag" />
                                </NavLink>
                            </li>}
                            {language !== "spanish" && <li id="lang_sp_Mob">
                                <NavLink to={currentPage}><img onClick={() => {
                                    setMenuMobile(false);
                                    chooseLanguage("spanish");
                                }} src={spanishFlag} alt="Spanish flag" />
                                </NavLink>
                            </li>}
                            {language !== "french" && <li id="lang_fr_Mob">
                                <NavLink to={currentPage}><img onClick={() => {
                                    setMenuMobile(false);
                                    chooseLanguage("french");
                                }} src={frenchFlag} alt="French flag" />
                                </NavLink>
                            </li>}
                        </ul>
                    </li>
                </ul>}



                <div onClick={() => toggleMenuMobile()} id="menu-btn">
                    <svg width="30" height="30">
                        <path d="M0,5 30,5"     stroke="#fff" strokeWidth="4"/>
                        <path d="M0,15 30,15"   stroke="#fff" strokeWidth="4"/>
                        <path d="M0,25 30,25"   stroke="#fff" strokeWidth="4"/>
                    </svg>
                </div>
            </div>
        </div>
    </nav>;
}

export default Header;

