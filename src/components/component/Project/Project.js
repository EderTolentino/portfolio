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

function Project(props) {
    const {showAbout, toShowAbout, toggleShowAbout} = useLanguage();

    const getData = (photo) => {
        switch (photo) {
            case 'testeConjugaison':
                return ({photo: testeConjugaison, linkPage: 'https://edertolentino.github.io/MyProjects_Test-Conjugaison/'});
                break;
            case 'lesParoles':
                return ({photo: lesParoles, linkPage: 'https://github.com/EderTolentino/MyProjects_Les-Paroles'});
                break;
            case 'poliglota':
                return ({photo: poliglota, linkPage: 'https://github.com/EderTolentino/MyProjects_Poliglota'});
                break;
            case 'pizzariaFontenelle':
                return ({photo: pizzariaFontenelle, linkPage: 'https://edertolentino.github.io/IMedia_Pizzaria-Fontenelle/'});
                break;
            case 'andesLogin':
                return ({photo: andesLogin, linkPage: 'https://edertolentino.github.io/IMedia_Projeto-Andes/'});
                break;
            case 'andesInserir':
                return ({photo: andesInserir, linkPage: ''});
                break;
            case 'andesTransportadoras':
                return ({photo: andesTransportadoras, linkPage: ''});
                break;
            case 'andesContact':
                return ({photo: andesContact, linkPage: ''});
                break;
            case 'andesUpload':
                return ({photo: andesUpload, linkPage: ''});
                break;
            case 'bootstrap':
                return ({photo: bootstrap, linkPage: 'https://edertolentino.github.io/ProfessorRicardoSanches_Bootstrap/'});
                break;
            case 'jogoDaVelha':
                return ({photo: jogoDaVelha, linkPage: 'https://edertolentino.github.io/CFB_Jogo-do-Galo/'});
                break;
            case 'pingPong':
                return ({photo: pingPong, linkPage: 'https://edertolentino.github.io/CFB_Ping-Pong/'});
                break;
            case 'horaDoDia':
                return ({photo: horaDoDia, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Hora-do-Dia/'});
                break;
            case 'idadeDaPessoa':
                return ({photo: idadeDaPessoa, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Idade-da-Pessoa/'});
                break;
            case 'tabuada':
                return ({photo: tabuada, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Tabuada/'});
                break;
            case 'analisador':
                return ({photo: analisador, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Analisador-de-Numeros/'});
                break;
            case 'projetoUsuarios':
                return ({photo: projetoUsuarios, linkPage: 'https://edertolentino.github.io/HCode_Projeto-Usuarios/'});
                break;
            case 'calculadora':
                return ({photo: calculadora, linkPage: 'https://edertolentino.github.io/HCode_Calculadora/'});
                break;
            case 'vamosContar':
                return ({photo: vamosContar, linkPage: 'https://edertolentino.github.io/CursoEmVideo_Vamos-Contar/'});
                break;
            default:
                console.log(`Sorry, there is no image for this project`);
        }
    }

    console.log("show " + showAbout)

    return <div className="content_project">
        <a href={getData(props.name).linkPage} target="_blank">
            <img src={getData(props.name).photo} alt={props.img}/>
        </a>

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