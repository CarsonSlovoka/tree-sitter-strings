# init

```sh
tree-sitter init
tree-sitter generate
```

生成 [src](./src) 目錄的內容

# scm

[highlights.scm](queries/strings/highlights.scm) 是選擇性檔案，用來定義語法高亮規則，主要用途是在編輯器中（如 VSCode、Neovim）進行語法著色

# tree-sitter test

如果修改了[grammar.js](grammar.js)要先使用

```
tree-sitter generate
```

使parser.c重新更新

如此 `tree-sitter test` 才會正常

