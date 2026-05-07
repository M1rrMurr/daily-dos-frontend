import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore('uiStore', () => {

    type ContentType = "activity" | "foo" | null

    const modalType = ref<ContentType>(null)
    const modalContent = ref()

    const openModal = function(type: ContentType, payLoad: any) {
        modalType.value = type
        modalContent.value = payLoad
    }

    const closeModal = function() {
        modalType.value = null
        modalContent.value = null
    }

    return { modalType, modalContent, openModal, closeModal }
})
