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
        "history": any;
        "match": any;
    }
    interface AppNew {
    }
    interface AppOptions {
        "_id": string;
        "go": any;
        "show": boolean;
        "year": number;
    }
    interface AppProfile {
        "history": any;
        "match": any;
    }
    interface AppRoot {
    }
    interface AppShare {
        "_id": string;
        "year": number;
    }
    interface AppTabs {
        "_id": string;
        "year": number;
    }
    interface CalMonth {
        "days": number;
        "name": string;
        "num": number;
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
    interface HTMLAppNewElement extends Components.AppNew, HTMLStencilElement {
    }
    var HTMLAppNewElement: {
        prototype: HTMLAppNewElement;
        new (): HTMLAppNewElement;
    };
    interface HTMLAppOptionsElement extends Components.AppOptions, HTMLStencilElement {
    }
    var HTMLAppOptionsElement: {
        prototype: HTMLAppOptionsElement;
        new (): HTMLAppOptionsElement;
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
    interface HTMLAppShareElement extends Components.AppShare, HTMLStencilElement {
    }
    var HTMLAppShareElement: {
        prototype: HTMLAppShareElement;
        new (): HTMLAppShareElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLCalMonthElement extends Components.CalMonth, HTMLStencilElement {
    }
    var HTMLCalMonthElement: {
        prototype: HTMLCalMonthElement;
        new (): HTMLCalMonthElement;
    };
    interface HTMLElementTagNameMap {
        "app-cal": HTMLAppCalElement;
        "app-home": HTMLAppHomeElement;
        "app-new": HTMLAppNewElement;
        "app-options": HTMLAppOptionsElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-share": HTMLAppShareElement;
        "app-tabs": HTMLAppTabsElement;
        "cal-month": HTMLCalMonthElement;
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
        "history"?: any;
        "match"?: any;
    }
    interface AppNew {
    }
    interface AppOptions {
        "_id"?: string;
        "go"?: any;
        "show"?: boolean;
        "year"?: number;
    }
    interface AppProfile {
        "history"?: any;
        "match"?: any;
    }
    interface AppRoot {
    }
    interface AppShare {
        "_id"?: string;
        "year"?: number;
    }
    interface AppTabs {
        "_id"?: string;
        "year"?: number;
    }
    interface CalMonth {
        "days"?: number;
        "name"?: string;
        "num"?: number;
    }
    interface IntrinsicElements {
        "app-cal": AppCal;
        "app-home": AppHome;
        "app-new": AppNew;
        "app-options": AppOptions;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-share": AppShare;
        "app-tabs": AppTabs;
        "cal-month": CalMonth;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-cal": LocalJSX.AppCal & JSXBase.HTMLAttributes<HTMLAppCalElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-new": LocalJSX.AppNew & JSXBase.HTMLAttributes<HTMLAppNewElement>;
            "app-options": LocalJSX.AppOptions & JSXBase.HTMLAttributes<HTMLAppOptionsElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-share": LocalJSX.AppShare & JSXBase.HTMLAttributes<HTMLAppShareElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
            "cal-month": LocalJSX.CalMonth & JSXBase.HTMLAttributes<HTMLCalMonthElement>;
        }
    }
}
