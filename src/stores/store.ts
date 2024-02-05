import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Text } from '@/classes/Text'
import { Image } from '@/classes/Image'
import type {Canvas, Size} from "@/types";
import {ElementTypes} from "@/types";

export const useStore = defineStore('store', () => {
    const sizeCanva: Size = {
        width: 700,
        height: 700
    }
    const canvas = ref<Canvas>({
        size: sizeCanva,
        backgroundColor: '#fff',
        elements: [],
    })

    const activeElement = ref<Text | Image | null>(null);
    const clipBoardElement = ref<Text | Image | null>(null);

    const setActive = (element) => {
        activeElement.value = element;
    }

    const addElement = (type: ElementTypes) => {
        if(type === ElementTypes.Text) {
            canvas.value.elements.push(Text.createDefault());
        }
    }

    const addElementImage = (imagenUrl: string) => {
        if(imagenUrl !== "")
            canvas.value.elements.push(new Image(imagenUrl, {width: 200, height: 200}, {x: 100, y: 0}));
    };

    const setBackgroundColor = (backgroundColor: string) => {
        canvas.value.backgroundColor = backgroundColor
    };

    const setSize = ({width, height}: Size) => {
        canvas.value.size.height = height
        canvas.value.size.width = width
    };

    const deleteActualItem = () => {
        if(activeElement.value !== null) {
            const index: number = canvas.value.elements.map(element => element.id).indexOf(activeElement.value.id);
            if(index !== -1) {
                //Force reactivity
                canvas.value.elements.splice(index, 1);
            }
        }
    }

    const saveActualItem = () => {
        if(activeElement?.value?.type === ElementTypes.Text)
            clipBoardElement.value = new Text
            (
                activeElement.value?.content, 
                {width: activeElement.value?.size.width, height: activeElement.value?.size.height},
                {x: 100, y: 0},
                activeElement.value?.background,
                activeElement.value?.colorText,
                activeElement.value?.scale,
                activeElement.value?.rotate
            );
            
        if(activeElement?.value?.type === ElementTypes.Image) {
            clipBoardElement.value = new Image(activeElement.value.backgroundUrl, {width: activeElement.value?.size.width, height: activeElement.value?.size.height}, {x: 100, y: 0}, activeElement.value?.scale,
                activeElement.value?.rotate)
        }
    }

    const cutActualElement = () => {
        saveActualItem();
        deleteActualItem();
    }

    const pushClipboardElement = () => {
        if(clipBoardElement.value !== null)
            canvas.value.elements.push(clipBoardElement?.value);
    }

    const modifyColorText = (element: Text, color: string) => {
        const index = canvas.value.elements.map( element => element.id).indexOf(element.id);
        if(index !== -1) {
            canvas.value.elements[index].colorText = color;
        }
    }

    return { canvas, activeElement,clipBoardElement, setActive, addElement, setBackgroundColor, setSize, deleteActualItem, saveActualItem, cutActualElement, pushClipboardElement, modifyColorText, addElementImage}
})
