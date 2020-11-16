/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCal {
        "_id": string;
        "color": string;
        "day": number;
        "month": number;
        "name": string;
        "year": number;
    }
    interface AppHome {
        "match": any;
    }
    interface AppProfile {
        "history": any;
        "match": any;
    }
    interface AppRoot {
    }
    interface AppTabs {
        "_id": number;
        "year": number;
    }
}
declare global {
    interface HTMLAppCalElement extends Components.AppCal, HTMLStencilElement {
    }
    var HTMLAppCalElement: {
        prototype: HTMLAppCalElement;
        new (): HTMLAppCalElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLElementTagNameMap {
        "app-cal": HTMLAppCalElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-tabs": HTMLAppTabsElement;
    }
}
declare namespace LocalJSX {
    interface AppCal {
        "_id"?: string;
        "color"?: string;
        "day"?: number;
        "month"?: number;
        "name"?: string;
        "year"?: number;
    }
    interface AppHome {
        "match"?: any;
    }
    interface AppProfile {
        "history"?: any;
        "match"?: any;
    }
    interface AppRoot {
    }
    interface AppTabs {
        "_id"?: number;
        "year"?: number;
    }
    interface IntrinsicElements {
        "app-cal": AppCal;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-tabs": AppTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-cal": LocalJSX.AppCal & JSXBase.HTMLAttributes<HTMLAppCalElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
        }
    }
}
