import type {Position, Size} from "@/types";
import type {ElementTypes} from "@/types";

export abstract class Element {
    id: string;
    abstract type: ElementTypes;
    size: Size;
    position: Position;
    scale: string;
    rotate: string;

    protected constructor(size: Size, position: Position, scale: string = "", rotate: string = "") {
        this.id = Math.random().toString(36).substr(2, 9);

        this.size = size;
        this.position = position;
        this.scale = scale;
        this.rotate = rotate;
    }

    getDomElement() {
        return document.getElementById(this.id);
    }
}
