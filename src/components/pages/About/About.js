import "./About.css";
import {useLanguage} from "../../../Providers/LanguageContext";
import personalPhoto from "../../../_img/photoEderTolentino.jpeg"

function About() {
    const {data} = useLanguage();
    return <div className={"About"}>
        <div className="content">
            <div id="aboutme_content_text">
                <h2>{data.aboutme_title}</h2>
                <p>{data.aboutme_p1}</p>
                <p>{data.aboutme_p2}</p>
                <p>{data.aboutme_p3}</p>
                <p>{data.aboutme_p4}</p>
            </div>
            <div id="aboutme_content_photo">
                <img src={personalPhoto} alt="<?php echo $lang['aboutme_img'] ?>"/>
            </div>
        </div>
    </div>
};

export default About