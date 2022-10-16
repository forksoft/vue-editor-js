<template>
  <div class="demo">
    <h1 style="text-align: center;">Vue3 Editor.js Demo</h1>
    <editor :config="config"
            :initialized="onInitialized"/>
  </div>
</template>

<script>
import Editor from "@/Editor.vue";
import List from '@editorjs/list';
import Header from "@editorjs/header";

export default {
  components: {Editor, Header, List},
  data() {
    return {
      config: {
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 3,
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
        onReady: () => {
        },
        onChange: (args) => {
        },
        data: {
          "time": 1591362820044,
          "blocks": [
            {
              "type": "header",
              "data": {
                "text": "Editor.js",
                "level": 2
              }
            },
            {
              "type": "paragraph",
              "data": {
                "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            },
            {
              "type": "header",
              "data": {
                "text": "Key features",
                "level": 3
              }
            },
            {
              "type": "list",
              "data": {
                "style": "unordered",
                "items": [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API"
                ]
              }
            }
          ],
          "version": "2.25.0"
        }
      },
    }
  },
  methods: {
    onInitialized(editor) {
    }
  }
}
</script>

<style>
</style>
