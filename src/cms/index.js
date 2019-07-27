import CMS from 'netlify-cms-app'
import widgetConfigs from './widgetConfigs'
import editorConfigs from './editorConfigs'

for (const widgetConfig of widgetConfigs) {
  CMS.registerWidget(...widgetConfig)
}

for (const editorConfig of editorConfigs) {
  CMS.registerEditorComponent(editorConfig)
}
