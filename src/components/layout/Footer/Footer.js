import "./Footer.css";
import {a} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faStar, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FaWhatsapp} from "@react-icons/all-files/fa/FaWhatsapp";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";

function Footer() {
    return <div className={"Footer"}>
        <footer>
            <div id="footer_left">
                <p>Eder Tolentino © 2023</p>
            </div>

            <div id="footer_right">
                <ul>
                    <li>
                        <a href={"https://web.whatsapp.com/send?phone=351910116613"}><FaWhatsapp className={"fa fafooter fa-whatsapp"} /></a>
                    </li>
                    <li>
                        <a href={"https://www.linkedin.com/in/edertolentino/"}><FaLinkedin className={"fa fafooter fa-linkedin"} /></a>
                    </li>
                    <li>
                        <a href={"https://github.com/EderTolentino"}><FaGithub className={"fa fafooter fa-github"} /></a>
                    </li>
                </ul>
            </div>

            <a href="#" className="btn"></a>

        </footer>
    </div>;
}

export default Footer


