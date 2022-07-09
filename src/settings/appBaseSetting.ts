import type { AppConfig } from '@/interfaces/config'
import { MenuTypeEnum, MenuModeEnum, MenuFoldEnum } from '@/enums/menuEnum'
import { ThemeEnum } from '@/enums/appEnum'

export const appSetting: AppConfig = {
  // theme color
  themeColor: '#fff',
  headerSetting: {
    // show breadCrumb
  showBreadCrumb: true,
  // show page tags
  showPageTags: true,
  // turn on full screen
  showFullScreen: true,
  // show document button
  showDoc: true,
  // show github button
  showGithub: true,
  // locale setting
  localeSetting: {
      // show locale picker
      showLocalePicker: true,
      // current locale
      currentLocale: 'zh_CN'
    }
  },
  // Menu configuration
  menuSetting: {
    // menu type
    menuType: MenuTypeEnum.SIDE_MENU,
    // menu mode
    menuMode: MenuModeEnum.VERTICAL,
    // menu theme
    menuTheme: ThemeEnum.DARK,
    // menu collapse type
    menuFold: MenuFoldEnum.NONE,
    // menu collapse
    collapsed: false,
    // whether to display the menu name when folding the menu
    collapsedShowTitle: false,
    // menu width
    menuWidth: 210
  },
  // whether to show the global footer
  showFooter: false
}