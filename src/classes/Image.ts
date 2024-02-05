import {Element} from "@/classes/Element";
import type {Position, Size} from "@/types";
import {ElementTypes} from "@/types";

export class Image extends Element {
    type = ElementTypes.Image;
	backgroundUrl: string;
    

    constructor(backgroundUrl: string, size: Size, position: Position, scale: string = "", rotate: string = "") {
        super(size, position, scale, rotate);
        this.backgroundUrl = backgroundUrl;
    }

    static isAImage(element: Element): element is Image {
        return element && "backgroundUrl" in element;
    }
}