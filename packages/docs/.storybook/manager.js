import { addons} from "@storybook/addons"
import {  themes } from "@storybook/theming" 

import theme from "./theme"

addons.setConfig({
  theme: theme,
  showRoots: true,
  sidebar: {
    showRoots: true,
  },
})