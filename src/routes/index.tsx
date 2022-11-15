import React from "react";
import Payday2FC from "./Payday2";
import AboutFC from "./About";
import PerkDecksFC from "@component/payday2/PerkDecks";

const Home: React.FC = () => {

    //Information about Mods and different games I've modded ig?

    return <>
        <h1>Home</h1>
        <p>Hello, World!</p>
    </>
}

export default Home;
export const Payday2 = Payday2FC;
export const PerkDecks = PerkDecksFC;
export const About = AboutFC;
