import { CreateParameters, RouteWithoutParams, RouteMap } from "./routemap";

export const routes = new RouteMap({
    Payday2: new RouteMap({
        Home: RouteWithoutParams,
        PerkDecks: RouteWithoutParams //TODO
    })
});

export const sitemap = routes.Mount("/");