import { CreateParameters, RouteWithoutParams, RouteMap } from "./routemap";

export const routes = new RouteMap({
    Home: RouteWithoutParams,
    Payday2: new RouteMap({
        Mods: RouteWithoutParams, // TODO
        PerkDecks: RouteWithoutParams, // TODO
    }),
    About: RouteWithoutParams,
});

export const sitemap = routes.Mount("/");
