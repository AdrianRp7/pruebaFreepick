import {Element} from "@/classes/Element";

export interface Size {
    width: number;
    height: number;
}

export interface Position {
    x: number;
    y: number;
}

export interface Canvas {
    size: Size;
    backgroundColor: string;
    elements: Element[];
}

export enum ElementTypes {
    Text = "text",
    Image = "image",
}

export interface ImageFetch {
    id: number;
    url: string;
    preview: string;
    transparent: any;
    duration: any;
    metadata: {
        raw: string;
    };
    type: string;
    origin: string;
    isPremium: boolean;
}

export type allTypes = Text | null;
