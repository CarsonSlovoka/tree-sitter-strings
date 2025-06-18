# tree-sitter init

```sh
tree-sitter init
tree-sitter generate
```

生成 [src](./src) 目錄的內容

## update

如果在init之後又想要修改套件的名稱

沒有辦法只改一個json文件，就套用到所有的項目

因此要將之前所自動創件的文件和目錄都刪除，再重新init

> [!IMPORTANT]
> 如果保留之前舊有文件，那麼再用tree-sitter init時，發現該文件已經存在，就不會再重新生成，所以相關的文件都要刪掉讓其重新產生

# scm

[highlights.scm](queries/strings/highlights.scm) 是選擇性檔案，用來定義語法高亮規則，主要用途是在編輯器中（如 VSCode、Neovim）進行語法著色

# tree-sitter test

如果修改了[grammar.js](grammar.js)要先使用

```sh
tree-sitter generate
```

使parser.c重新更新

如此 `tree-sitter test` 才會正常


# tree-sitter.json參考寫法

[tree-sitter-python/tree-sitter.json](https://github.com/tree-sitter/tree-sitter-python/blob/710796b8b877a970297106e5bbc8e2afa47f86ec/tree-sitter.json#L1-L42)


> [!TIP]
> 其實init後，tree-sitter.json的一開始
>
> `"$schema": "https://tree-sitter.github.io/tree-sitter/assets/schemas/config.schema.json"`
>
> 此連結裡面就是此範文件的寫法
