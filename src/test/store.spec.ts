import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useStore } from '@/stores/store'
import { ElementTypes, Size } from "@/types";

describe('Testing the component store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("Set size canvas", () => {
        const store = useStore();
        const newSize = {width: 1000, height: 500};
        store.setSize(newSize);
        expect(store.canvas.size.height).toBe(newSize.height)
        expect(store.canvas.size.width).toBe(newSize.width)
    })

    it("Change background", () => {
        const store = useStore();
        store.setBackgroundColor("red");
        expect(store.canvas.backgroundColor).toMatch("red")
        // expect(store.canvas.value.size.width).toBe(newSize.width)
    })

    it('Add element text to the canvas', () => {
        const store = useStore();
        store.addElement(ElementTypes.Text)

        expect(store.canvas.elements.length).toBe(1);
        store.addElement(ElementTypes.Text);

        expect(store.canvas.elements.length).toBe(2);
    })

    it('Add element image to the canvas', () => {
        const store = useStore();
        store.addElementImage("esto es un link")

        expect(store.canvas.elements.length).toBe(1);
        store.addElementImage("");

        expect(store.canvas.elements.length).toBe(1);
    })

    it('Set active element in the canvas', () => {
        const store = useStore();
        store.addElement(ElementTypes.Text);
        store.setActive(store.canvas.elements[0]);

        expect(store.canvas.elements[0].id === store.activeElement?.id).toBe(true);
    })

    it('Delete element in the canvas', () => {
        const store = useStore();
        store.addElement(ElementTypes.Text);
        store.setActive(store.canvas.elements[0]);
        expect(store.canvas.elements[0].id === store.activeElement?.id).toBe(true);

        store.addElementImage("esto es un link")
        store.deleteActualItem();

        expect(store.canvas.elements.length).toBe(1);
        expect(store.canvas.elements[0].id !== store.activeElement?.id).toBe(true);
    });

    it('Save Actual element Text into the clipboard', () => {
        const store = useStore();
        store.addElement(ElementTypes.Text);
        store.canvas.elements[0].size.width = 500; 
        store.setActive(store.canvas.elements[0]);
        expect(store.canvas.elements[0].id === store.activeElement?.id).toBe(true);

        store.saveActualItem();
        expect(store.clipBoardElement.size.width == store.activeElement.size.width).toBe(true);
        expect(store.clipBoardElement.size.height == store.activeElement.size.height).toBe(true);
        expect(store.clipBoardElement.background == store.activeElement.background).toBe(true);
        expect(store.clipBoardElement.scale == store.activeElement.scale).toBe(true);
        expect(store.clipBoardElement.rotate == store.activeElement.rotate).toBe(true);
    });

    it('Save Actual element Image into the clipboard', () => {
        const store = useStore();
        store.addElementImage("https://image.com/image.png");
        store.canvas.elements[0].size.width = 500; 
        store.setActive(store.canvas.elements[0]);
        expect(store.canvas.elements[0].id === store.activeElement?.id).toBe(true);

        store.saveActualItem();

        expect(store.clipBoardElement.size.width == store.activeElement.size.width).toBe(true);
        expect(store.clipBoardElement.size.height == store.activeElement.size.height).toBe(true);
        expect(store.clipBoardElement.backgroundUrl == store.activeElement.backgroundUrl).toBe(true);
        expect(store.clipBoardElement.scale == store.activeElement.scale).toBe(true);
        expect(store.clipBoardElement.rotate == store.activeElement.rotate).toBe(true);
    });

    it('PushClipboard element to the canvas', () => {
        const store = useStore();
        store.addElementImage("https://image.com/image.png");
        store.canvas.elements[0].size.width = 500; 
        store.setActive(store.canvas.elements[0]);
        expect(store.canvas.elements[0].id === store.activeElement?.id).toBe(true);

        store.saveActualItem();

        store.pushClipboardElement()
        expect(store.canvas.elements.length).toBe(2);
        expect(store.clipBoardElement.size.width == store.canvas.elements[1].size.width).toBe(true);
        expect(store.clipBoardElement.size.height == store.canvas.elements[1].size.height).toBe(true);
        expect(store.clipBoardElement.backgroundUrl == store.canvas.elements[1].backgroundUrl).toBe(true);
        expect(store.clipBoardElement.scale == store.canvas.elements[1].scale).toBe(true);
        expect(store.clipBoardElement.rotate == store.canvas.elements[1].rotate).toBe(true);
    });

})
