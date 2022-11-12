import React from "react";
import { redirect } from "react-router-dom";
import { sitemap } from "../sitemaps/sitemap";
import Payday2FC from "./Payday2";

const Home: React.FC = () => {

    //Redirects to different games ig?

    return <>
        <h1>Home</h1>
        <p>Hello, World!</p>
        <a onClick={() => redirect(sitemap.Payday2.Home.path)}>Payday 2</a>
    </>
}

export default Home;
export const Payday2 = Payday2FC;