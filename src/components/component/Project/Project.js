import "./Project.css";
import {useLanguage} from "../../../Providers/LanguageContext";
import testeConjugaison from "../../../_img/test_conjugaison.jpg";
import lesParoles from "../../../_img/les_paroles.jpg";
import poliglota from "../../../_img/poliglota.jpg";
import pizzariaFontenelle from "../../../_img/pizzariafontenelle.jpg";
import andesLogin from "../../../_img/andes_login.jpg";
import andesInserir from "../../../_img/andes_inserir.jpg";
import andesTransportadoras from "../../../_img/andes_transportadoras.jpg";
import andesContact from "../../../_img/andes_contacto.jpg";
import andesUpload from "../../../_img/andes_upload.jpg";
import bootstrap from "../../../_img/bootstrap.jpg";
import jogoDaVelha from "../../../_img/jogodavelha.jpg";
import pingPong from "../../../_img/pingpong.jpg";
import horaDoDia from "../../../_img/horadodia.jpg";
import idadeDaPessoa from "../../../_img/idadedapessoa.jpg";
import tabuada from "../../../_img/tabuada.jpg";
import analisador from "../../../_img/analisador.jpg";
import projetoUsuarios from "../../../_img/projetousuarios.jpg";
import calculadora from "../../../_img/calculadora.jpg";
import vamosContar from "../../../_img/vamoscontar.jpg";
import jogosJS from "../../../_img/jogosJS.jpg";
import aeroporto from "../../../_img/aeroporto.jpg";
import upbnb from "../../../_img/upbnb.jpg";
import uptube from "../../../_img/uptube.jpg";

function Project(props) {
    const {toShowAbout, toggleShowAbout} = useLanguage();

    const getData = (photo) => {
        switch (photo) {
            case 'testeConjugaison':
                return ({photo: testeConjugaison, linkPage: 'https://edertolentino.github.io/MyProjects_Test-Conjugaison/'});
            case 'lesParoles':
                return ({photo: lesParoles, linkPage: 'https://github.com/EderTolentino/MyProjects_Les-Paroles'});
            case 'poliglota':
                return ({photo: poliglota, linkPage: 'https://github.com/EderTolentino/MyProjects_Poliglota'});
            case 'jogosJS':
                return ({photo: jogosJS, linkPage: 'https://edertolentino.github.io/UPSkill_JavaScript-Jogos/'});
            case 'aeroporto':
                return ({photo: aeroporto, linkPage: 'https://github.com/EderTolentino/UPSkill_NodeJS-API-aeroporto'});
            case 'upbnb':
                return ({photo: upbnb, linkPage: 'https://github.com/EderTolentino/UPSkill_React-UPBNB'});
            case 'uptube':
                return ({photo: uptube, linkPage: 'https://github.com/EderTolentino/web-uptube'});
            case 'pizzariaFontenelle':
                return ({photo: pizzariaFontenelle, linkPage: 'https://edertolentino.github.io/IMedia_Pizzaria-Fontenelle/'});
            case 'andesLogin':
                return ({photo: andesLogin, linkPage: 'https://edertolentino.github.io/IMedia_Projeto-Andes/'});
            case 'andesInserir':
                return ({photo: andesInserir, linkPage: ''});
            case 'andesTransportadoras':
                return ({photo: andesTransportadoras, linkPage: ''});
            case 'andesContact':
                return ({photo: andesContact, linkPage: ''});
            case 'andesUpload':
                return ({photo: andesUpload, linkPage: ''});
            case 'bootstrap':
                return ({photo: bootstrap, linkPage: 'https://edertolentino.github.io/ProfessorRicardoSanches_Bootstrap/'});
            case 'jogoDaVelha':
                return ({photo: jogoDaVelha, linkPage: 'https://edertolentino.github.io/CFB_Jogo-do-Galo/'});
            case 'pingPong':
                return ({photo: pingPong, linkPage: 'https://edertolentino.github.io/CFB_Ping-Pong/'});
            case 'horaDoDia':
                return ({photo: horaDoDia, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Hora-do-Dia/'});
            case 'idadeDaPessoa':
                return ({photo: idadeDaPessoa, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Idade-da-Pessoa/'});
            case 'tabuada':
                return ({photo: tabuada, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Tabuada/'});
            case 'analisador':
                return ({photo: analisador, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Analisador-de-Numeros/'});
            case 'projetoUsuarios':
                return ({photo: projetoUsuarios, linkPage: null});
            case 'calculadora':
                return ({photo: calculadora, linkPage: null});
            case 'vamosContar':
                return ({photo: vamosContar, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Vamos-Contar/'});
                break;
            default:
                return ({photo: testeConjugaison, linkPage: null});
        }
    }


    const projectData = getData(props.name);
    const image = <img src={projectData.photo} alt={props.img || props.project_name || props.project}/>;

    return <div className="content_project">
        {projectData.linkPage ? (
            <a href={projectData.linkPage} target="_blank" rel="noopener noreferrer" aria-label={`Open ${props.project_name || props.project}`}>
                {image}
            </a>
        ) : (
            <div title="Project preview — no public demo available">{image}</div>
        )}

        {!toShowAbout(props.id) &&
            <div onClick={() => toggleShowAbout(props.id)} className="content_text hide">
                <h3 className="content_text_title" id="project1">
                    <span className="h3_project">{props.project}</span>
                </h3>
            </div>}
        {toShowAbout(props.id) && <div onClick={() => toggleShowAbout(props.id)} className="content_text show">
            <h3 className="content_text_title" id="project1">
                <span className="h3_project_name">{props.project_name}</span>
            </h3>
            <p className="content_text_subtitle">{props.about_1}</p>
            <p className="content_text_subtitle">{props.about_2}</p>
            <p className="content_text_subtitle">{props.about_3}</p>
        </div>}
    </div>
}

export default Project