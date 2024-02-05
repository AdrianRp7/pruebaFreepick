import { createPinia, setActivePinia } from 'pinia'
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import PanelSearchImage from "@/components/PanelSearchImage.vue";
import helpers from '@/plugins/helpers.js';

function mountPanelImage() {
    const wrapper = mount(PanelSearchImage, 
        { global: {
        plugins: [helpers]
    }});

    return wrapper;
}

describe('Testing panel search img', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Open popup', async () => {
        const wrapper = mountPanelImage();
        
        expect(wrapper).toBeTruthy();
        expect(wrapper.text()).toContain('Add Image Api');

        expect(wrapper.find('#popup:not(.hidden)').exists()).toBeFalsy()

        const buttonOpened = wrapper.find('.mo-ButtonOpenApi');
        await buttonOpened.trigger('click');

        expect(wrapper.find('#popup:not(.hidden)').exists()).toBeTruthy()
    })

    it('Validate the input is working when the popup is open', async () => {
        const wrapper = mountPanelImage();
        
        expect(wrapper).toBeTruthy();
        expect(wrapper.text()).toContain('Add Image Api');

        expect(wrapper.find('#popup:not(.hidden)').exists()).toBeFalsy()

        const buttonOpened = wrapper.find('.mo-ButtonOpenApi');
        await buttonOpened.trigger('click');

        expect(wrapper.find('#popup:not(.hidden)').exists()).toBeTruthy()

        const findInput = wrapper.find("input");
        expect(findInput.text()).toContain('');

        await findInput.setValue('Tree');

        expect(findInput.element.value).toEqual('Tree');
    })


})