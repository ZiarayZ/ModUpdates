import React from "react";
import { useNavigate } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";
import { Button } from "../style/widgets/Button";
import Mods from "./components/payday2/Mods";

function Home(): JSX.Element {
    const redirect = useNavigate();
    // lists mods etc

    return (
        <>
            <Mods />
            <Button type="button" onClick={() => redirect(sitemap.Payday2.PerkDecks.path)}>Perk Decks</Button>
        </>
    );
}

export default Home;
