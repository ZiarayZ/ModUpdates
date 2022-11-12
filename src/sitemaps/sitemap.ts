import { CreateParameters, RouteWithoutParams, RouteMap } from "./routemap";

export const routes = new RouteMap({
    Home: RouteWithoutParams
});

export const sitemap = routes.Mount("/");