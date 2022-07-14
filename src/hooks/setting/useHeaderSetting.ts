import { computed } from 'vue'
import { useAppStore } from '@/stores/modules/app'

export function useHeaderSetting() {
    const appStore = useAppStore()

    const getShowBreadCrumb = computed(() => appStore.getHeaderSetting.showBreadCrumb)

    const getShowPageTags = computed(() => appStore.getHeaderSetting.showPageTags)

    const getShowLocale = computed(() => appStore.getHeaderSetting.showLocale)

    return {
        getShowBreadCrumb,
        getShowPageTags,
        getShowLocale
    }
}