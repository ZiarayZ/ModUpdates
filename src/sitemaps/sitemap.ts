import { CreateParameters, RouteWithoutParams, RouteMap } from "./routemap";

export const routes = new RouteMap({
    Home: RouteWithoutParams,
    /* Payday2: new RouteMap({
        PerkDecks: RouteWithoutParams //TODO
    }) */
});

export const sitemap = routes.Mount("/");