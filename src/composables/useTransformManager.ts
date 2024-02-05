import Moveable from "moveable";
import {useStore} from "@/stores/store";
import {onMounted, ref, watch} from "vue";

export const useTransformManager = () => {
    const store = useStore();
    const moveable = ref<Moveable>();

    onMounted(() => {
        startMoveable()
    });

    function startMoveable() {
        moveable.value = new Moveable(document.body, {
            target: store.activeElement?.getDomElement(),
            // If the container is null, the position is fixed. (default: parentElement(document.body))
            container: document.body,
            originDraggable: false,
            draggable: true,
            // resizable: true,
            scalable: true,
            rotatable: true,
            warpable: true,
            origin:false,
            throttleResize: 0,
            renderDirections: ["nw","n","ne","w","e","sw","s","se"],
            // Enabling pinchable lets you use events that
            // can be used in draggable, resizable, scalable, and rotateable.
            keepRatio: false,
        });

        moveable.value.on("drag", ({ translate }) => {
            store.activeElement.position.x = translate[0];
            store.activeElement.position.y = translate[1];
        });

        // moveable.value.on("resize", ({width, height}) => {
        //     store.activeElement.size.width = width;
        //     store.activeElement.size.height = height;
        // });

        moveable.value.on("scale", ({scale}) => {
            store.activeElement.scale = `scale(${scale[0]}, ${scale[1]})`;
        });

        moveable.value.on("rotate", ({ rotation }) => {
            store.activeElement.rotate = `rotate(${rotation}deg)`;
        });
    }

    watch(() => store.activeElement, (element) => {
        if(!moveable.value) return;

        moveable.value.target = element.getDomElement();
    });
}
