import { computed } from 'vue'
import { useAppStore } from '@/stores/modules/app'

export function useBaseSetting() {
    const appStore = useAppStore()

    const getThemeColor = computed(() => appStore.getAppConfig.themeColor)

    const getLockScreenTime = computed(() => appStore.getAppConfig.lockScreenTime)

    return {
        getThemeColor,
        getLockScreenTime
    }
}