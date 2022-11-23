type iRouteMapEntryNoParams = null;
type iRouteMapEntryWithParams<PARAM_K extends string> = PARAM_K[];
function joinUrl(...parts: (string[] | string)[]): string {
    return `/${parts.map((part) => (Array.isArray(part) ? part : part.split("/"))).reduce((prev, curr) => prev.concat(curr)).filter((v) => v != "").join("/")}/`;
}
function routeMapTypeGuard(a: iRouteMapEntryNoParams | RouteMap<any> | iRouteMapEntryWithParams<any> | iRouteMapConfig) {
    if (isRouteMap(a)) return { type: "routemap" as const, val: a };
    if (isRouteMapEntryWithParams(a)) return { type: "withparams" as const, val: a };
    if (isRouteMapConfig(a)) return { type: "config" as const, val: a };
    return { type: "noparams" as const, val: a };
}
function isRouteMap(a: iRouteMapEntryNoParams | RouteMap<any> | iRouteMapEntryWithParams<any> | iRouteMapConfig): a is RouteMap<any> {
    return a != null && (a instanceof RouteMap);
}
function isRouteMapConfig(a: iRouteMapEntryNoParams | RouteMap<any> | iRouteMapEntryWithParams<any> | iRouteMapConfig): a is iRouteMapConfig {
    return a != null && typeof a === "object" && !(a instanceof RouteMap) && !Array.isArray(a);
}
function isRouteMapEntryWithParams(a: iRouteMapEntryNoParams | RouteMap<any> | iRouteMapEntryWithParams<any> | iRouteMapConfig): a is iRouteMapEntryWithParams<any> {
    return a != null && Array.isArray(a);
}
type iRouteMapConfig = {
    [PATH: string]:
    iRouteMapEntryNoParams | RouteMap<any> | iRouteMapEntryWithParams<any>
};
type iParamRouteInfo<PARAM_K extends string> = { pattern: string, params: PARAM_K[], createUrl(params: { [P in PARAM_K]: string | number }): string }
type tPaths<T extends iRouteMapConfig> = { [P in keyof T]:
    (
        T[P] extends iRouteMapEntryWithParams<infer PARAMS_T>
        ? iParamRouteInfo<PARAMS_T>
        : T[P] extends RouteMap<infer C>
        ? tPaths<C>
        : T[P] extends iRouteMapConfig
        ? tPaths<T[P]>
        : T[P] extends iRouteMapEntryNoParams
        ? { path: string, pattern: string }
        : never
    )
} & { path: string, pattern: string };

// route types
export const RouteWithoutParams: iRouteMapEntryNoParams = null;
export function CreateParameters<T extends string>(params: T[]) { return params; }

// map of routes
export class RouteMap<T extends iRouteMapConfig> {
    static rootMount: tPaths<any> | undefined = undefined;

    constructor(readonly map: T) { }

    static getPattern(baseUrl: string, path?: string, params?: string[]) {
        return joinUrl(baseUrl, path || "", params ? params.sort().map((p) => `:${p}`) : "");
    }

    Mount(baseUrl: string) {
        const ret = this.SiteMap(baseUrl);
        RouteMap.rootMount = ret;
        return ret;
    }

    SiteMap(baseUrl: string): tPaths<T> {
        const ret = {} as any;
        Object.keys(this.map).forEach((k) => {
            const entry = this.map[k];
            const entryType = routeMapTypeGuard(entry);
            switch (entryType.type) {
            case "config":
                const rm = new RouteMap(entryType.val);
                ret[k] = rm.SiteMap(joinUrl(baseUrl, k));
                break;
            case "routemap":
                ret[k] = entryType.val.SiteMap(joinUrl(baseUrl, k));
                break;
            case "withparams":
                const e: iParamRouteInfo<any> = {
                    params: entryType.val,
                    createUrl(_params: { [P: string]: string }) {
                        const paramUrl = entryType.val.sort().map((p) => encodeURIComponent(_params[p]) || "");
                        return joinUrl(baseUrl, k, paramUrl);
                    },
                    pattern: joinUrl(baseUrl, k, entryType.val.sort().map((v) => `:${v}`)),
                };
                ret[k] = e;
                break;
            case "noparams":
                ret[k] = { path: joinUrl(baseUrl, k), pattern: joinUrl(baseUrl, k) };
                break;
            default:
                break;
            }
        });
        return Object.assign(ret, { path: baseUrl, pattern: baseUrl });
    }
}
