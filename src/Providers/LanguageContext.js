import React from "react";
import {useEffect, useState} from "react";
import dataEnglish from "../data/english.json";
import dataPortuguese from "../data/portuguese.json";
import dataSpanish from "../data/spanish.json";
import dataFrench from "../data/french.json";

// Cria um contexto abstrato para fazer a passagem dos dados
const LanguageContext = React.createContext();

// Cria uma caixa em volta do contexto para se comportar como um provedor
function ProviderLanguage(props) {

    const [language, setLanguage] = useState("english");

    const [data, setData] = useState(dataEnglish);
    useEffect(() => {
        if(language === "english")
            setData(dataEnglish);
        if(language === "portuguese")
            setData(dataPortuguese);
        if(language === "spanish")
            setData(dataSpanish);
        if(language === "french")
            setData(dataFrench);
    }, [language]);

    const [currentPage, setCurrentPage] = useState("home");

    const [showAbout, setShowAbout] = useState([]);
    const toShowAbout = (project_id) => {
        return showAbout.includes(project_id);
    }

    function toggleShowAbout(project_id) {
        let clone = [...showAbout];
        if (toShowAbout(project_id)) {
            // Remover
            clone.splice(clone.indexOf(project_id), 1);
        } else {
            // Adicionar
            clone.push(project_id);
        }        
        setShowAbout(clone);
    }

    // Criação de um componente que vai estar a volta do resto
    // Toda a app vai estar dentro do provider
    return <LanguageContext.Provider value={{language, setLanguage, data, setData, currentPage, setCurrentPage, showAbout, toShowAbout, toggleShowAbout}}>
        {props.children}
    </LanguageContext.Provider>
}

function useLanguage() {
    return React.useContext(LanguageContext);
}

export {useLanguage, ProviderLanguage};