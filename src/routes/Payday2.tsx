import React from "react";
import { useNavigate } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";
import Mods from "./components/payday2/Mods";

const Home: React.FC = () => {
    const redirect = useNavigate();
    //lists mods etc

    return <>
        <Mods />
        <button type='button' onClick={() => redirect(sitemap.Payday2.PerkDecks.path)}>Perk Decks</button>
    </>
}

export default Home;