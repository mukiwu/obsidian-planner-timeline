import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    // highlight-start
    this.addCommand({
      id: "obsidian-planner-timeline",
      name: "Convert time to timeline style",
      editorCheckCallback: (checking: boolean, editor: Editor, view: MarkdownView) => {
        const val = editor.getSelection()
        const getRequiredValue = (el: object) => {
          console.log('el', el)
          return true
        }
        const value = getRequiredValue(val)

        if (value) {
          if (!checking) {
            console.log('value', value)
          }
          return true
        }
        return false;
      },
    });
    // highlight-end
  }
}