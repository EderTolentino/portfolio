import "./Portfolio.css";
import {useLanguage} from "../../../Providers/LanguageContext";
import Project from "../../component/Project/Project";

function Portfolio() {
    const {data} = useLanguage();

    return <div className={"Portfolio"}>
        <div className="content">

            <h1>{data.portfolio.title1}</h1>
            <>
                {data.portfolio.upskill.map((p) => <Project key={p.id} {...p} />)}
            </>

            <h1>{data.portfolio.title2}</h1>
            <>
                {data.portfolio.personalProjects.map((p) => <Project key={p.id} {...p} />)}
            </>

            <h1>{data.portfolio.title3}</h1>
            <>
                {data.portfolio.courseProjects.map((p) => <Project key={p.id} {...p} />)}
            </>
        </div>
    </div>
}

export default Portfolio