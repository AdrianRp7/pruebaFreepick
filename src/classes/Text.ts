import {Element} from "@/classes/Element";
import type {Position, Size} from "@/types";
import {ElementTypes} from "@/types";

export class Text extends Element {
    type = ElementTypes.Text;
    content: string;
	background: string;
    colorText: string;

    constructor(content: string, size: Size, position: Position, 
        background: string, colorText: string, scale: string = "", rotate: string = "") {
        super(size, position, scale, rotate);
        this.content = content;
        this.background = background;
        this.colorText = colorText;
    }

    static createDefault() {
        return new Text("Text", {width: 200, height: 100}, {x: 100, y: 0}, '#ff55ff', '#fff');
    }

    static isAText(element: Element): element is Text {
        return element && "colorText" in element;
    }
}