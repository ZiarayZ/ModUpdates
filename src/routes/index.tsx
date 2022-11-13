import React from "react";
import { useNavigate } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";
import Payday2FC from "./Payday2";
import AboutFC from "./About";
import PerkDecksFC from "./components/payday2/PerkDecks";
import { Button } from "../style/widgets/Button";

const Home: React.FC = () => {
    const redirect = useNavigate();

    //Redirects to different games ig?

    return <>
        <h1>Home</h1>
        <p>Hello, World!</p>
        <Button type='button' onClick={() => redirect(sitemap.Payday2.path)}>Payday 2</Button>
    </>
}

export default Home;
export const Payday2 = Payday2FC;
export const PerkDecks = PerkDecksFC;
export const About = AboutFC;