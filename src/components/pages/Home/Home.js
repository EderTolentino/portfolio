import "./Home.css";
import {useLanguage} from "../../../Providers/LanguageContext";
import html5 from "../../../_img/_icons/html5.png";
import css3 from "../../../_img/_icons/css3.png";
import javascript from "../../../_img/_icons/javascript.png";
import responsive from "../../../_img/_icons/responsive.png";
import bootstrap from "../../../_img/_icons/bootstrap.png";
import jquery from "../../../_img/_icons/jquery.png";
import ajax from "../../../_img/_icons/ajax.png";
import php from "../../../_img/_icons/php.png";
import c from "../../../_img/_icons/c.png";
import database from "../../../_img/_icons/database.png";
import git from "../../../_img/_icons/git.png";
import github from "../../../_img/_icons/github.png";
import brackets from "../../../_img/_icons/brackets.png";
import visualstudio from "../../../_img/_icons/visual studio.png";
import netbeans from "../../../_img/_icons/netbeans.png";
import navicat from "../../../_img/_icons/navicat.png";
import xampp from "../../../_img/_icons/xampp.png";
import seo from "../../../_img/_icons/seo.png";
import nodejs from "../../../_img/_icons/nodejs.png";
import java from "../../../_img/_icons/java.png";
import python from "../../../_img/_icons/python.png";



function Home() {
    const {data} = useLanguage();
    console.log(data);
    return <div className={"Home"}>
        <div id="content">
            <h2 className="frontEndColor">{data.home_frontEnd}</h2>
            <div className="frontEnd frontEndColor">
                <div className="apps html">
                    <img src={html5} alt="HTML5 icon"/>
                        <h4>{data.home_html5}</h4>
                </div>
                <div className="apps css">
                    <img src={css3} alt="CSS3 icon"/>
                        <h4>{data.home_css3}</h4>
                </div>
                <div className="apps javascript">
                    <img src={javascript} alt="Java Script icon"/>
                        <h4>{data.home_javaScript}</h4>
                </div>
                <div className="apps responsive">
                    <img src={responsive} alt="Responsividade image"/>
                        <h4>{data.home_responsive}</h4>
                </div>
                <div className="apps bootstrap">
                    <img src={bootstrap} alt="Bootstrap icon"/>
                        <h4>{data.home_bootstrap}</h4>
                </div>
                <div className="apps jquery">
                    <img src={jquery} alt="jQuery icon"/>
                        <h4>{data.home_jQuery}</h4>
                </div>
                <div className="apps ajax">
                    <img src={ajax} alt="AJAX icon"/>
                        <h4>{data.home_ajax}</h4>
                </div>
            </div>

            <h2 className="backEndColor">{data.home_backEnd}</h2>
            <div className="backEnd backEndColor">
                <div className="apps php">
                    <img src={php} alt="PHP icon"/>
                        <h4>{data.home_php}</h4>
                </div>
                <div className="apps c">
                    <img src={c} alt="C icon"/>
                        <h4>{data.home_c}</h4>
                </div>
                <div className="apps database">
                    <img src={database} alt="Database icon"/>
                        <h4>{data.home_database}</h4>
                </div>
                <div className="apps git">
                    <img src={git} alt="Git icon"/>
                        <h4>{data.home_git}</h4>
                </div>
                <div className="apps github">
                    <img src={github} alt="Github icon"/>
                        <h4>{data.home_github}</h4>
                </div>
            </div>

            <h2 className="toolsColor">{data.home_tools}</h2>
            <div className="tools toolsColor">
                <div className="apps brackets">
                    <img src={brackets} alt="Brackets icon"/>
                        <h4>{data.home_brackets}</h4>
                </div>
                <div className="apps visualstudio">
                    <img src={visualstudio} alt="Visual Studio icon"/>
                        <h4>{data.home_visualStudio}</h4>
                </div>
                <div className="apps netbeans">
                    <img src={netbeans} alt="NetBeans icon"/>
                        <h4>{data.home_netBeans}</h4>
                </div>
                <div className="apps navicat">
                    <img src={navicat} alt="NaviCat icon"/>
                        <h4>{data.home_naviCat}</h4>
                </div>
                <div className="apps xampp">
                    <img src={xampp} alt="XAMPP icon"/>
                        <h4>{data.home_xampp}</h4>
                </div>
            </div>


            <h2 className="interestsColor">{data.home_nextSteps}</h2>
            <div className="interests interestsColor">
                <div className="apps seo">
                    <img src={seo} alt="SEO icon"/>
                        <h4>{data.home_seo}</h4>
                </div>
                <div className="apps nodejs">
                    <img src={nodejs} alt="NodeJS icon"/>
                        <h4>{data.home_nodeJS}</h4>
                </div>
                <div className="apps java">
                    <img src={java} alt="Java icon"/>
                        <h4>{data.home_java}</h4>
                </div>
                <div className="apps python">
                    <img src={python} alt="Python icon"/>
                        <h4>{data.home_python}</h4>
                </div>
            </div>
        </div>
    </div>
};

export default Home;