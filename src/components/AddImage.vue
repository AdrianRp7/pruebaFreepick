<template>
    <label class="p-2 rounded border border-blue-500" for="fileUpload">Add Image</label>
    <input v-show="false" name="fileUpload" id="fileUpload" type="file" accept="image/png, image/jpeg, image/gif, image/bmp" @change="onSelectFile($event)"/>
</template>

<script setup lang="ts">
    import {useStore} from "@/stores/store";

    const store = useStore();

    async function handleFiles(files: FileList) {
        if (files && files.length === 1) {
            const file = files[0];
            
            if (file.size > 0) {
                await loadPreview(file);
            }
        }
    }

    async function loadPreview(file: File) {
        const validMimeTypeImage = await validateMimeTypePic(file);
        if (validMimeTypeImage === true) {
            const reader = new FileReader();
            reader.onloadend = async (e) => {
                store.addElementImage(e?.target?.result);
            };
            reader.readAsDataURL(file);
        }
    }
    async function onSelectFile(e: Event) {
        const inputData: HTMLInputElement = e.target as HTMLInputElement;
        if(inputData?.files)
            await handleFiles(inputData.files);
    }

    function getMimetype(signature) {
        if (signature.slice(0, 4) === "424D") {
            return "image/bmp";
        }
        switch (signature) {
        case "89504E47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "25504446":
            return "application/pdf";
        case "FFD8FFDB":
        case "FFD8FFE0":
        case "FFD8FFE1":
            return "image/jpeg";
        case "504B0304":
            return "application/zip";
        case "52494646":
            return "image/webp";
        default:
            return "Unknown filetype";
        }
    }

    function validateMimeTypePic(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            let valid = false;
            reader.onloadend = function (evt) {
                if (evt.target.readyState === FileReader.DONE) {
                const uint = new Uint8Array(evt.target.result);
                const bytes = [];
                uint.forEach((byte) => {
                    bytes.push(byte.toString(16));
                });
                const hex = bytes.join("").toUpperCase();
                const mimetype = getMimetype(hex);
                if (["image/png", "image/jpeg", "image/gif", "image/bmp", 'image/webp'].includes(mimetype) === true) {
                    valid = true;
                }
                if (valid === true && file.type !== mimetype) {
                    valid = false;
                }
                }
                resolve(valid);
            }.bind(this);

            const blob = file.slice(0, 4);
            reader.readAsArrayBuffer(blob);
        });
    }
</script>

<style lang="scss" scoped>
    
</style>