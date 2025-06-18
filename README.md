# tree-sitter

```sh
tree-sitter --version
# tree-sitter 0.25.6 (462fcd7c302b9df3a770b67f5be07f4ee604718e)
```

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


## [Writing Tests](https://tree-sitter.github.io/tree-sitter/creating-parsers/5-writing-tests.html)

範例: [test/corpus/example.txt](test/corpus/example.txt)

> [!TIP]
> 預設情況下，`tree-sitter test`是對[test/corpus/](test/corpus/)資料夾內的所有txt進行測試

要執行特定測試，您需要 可以使用 `-i`

```sh
tree-sitter test -i 'comments'
```

> 其中的`comments`是test中，該測試的標題名稱(因為有用單引號包起包，所以標題可以允許中間有空白)


### FAQ

#### expected的內容要寫什麼？

如果都沒有頭緒可以先用`tree-sitter parse`來查看

> [!WARNING]
> 它會顯示帶位置資訊的抽象語法樹，例如:
>
> `(comment [4, 0] - [4, 18])`
>
> 而實際上要寫的期望輸出要**不**包含位置資訊, 即:
>
> `(comment)`


#### expected的縮進會影響測試結果嗎？

不會。

在終端機上看到的，它是用2格來縮進, 但是就算用4格來縮進，也不會因此報錯

```diff
(source_file [0, 0] - [17, 0]
-  (comment [4, 0] - [4, 18])
+    (comment [4, 0] - [4, 18])
```

#### 括號配對可以不同列嗎？

可以。

只要有匹配即可

```diff
  (pair
      key: (string)
-     value: (string))
+     value: (string)
+ )
```


# tree-sitter.json參考寫法

[tree-sitter-python/tree-sitter.json](https://github.com/tree-sitter/tree-sitter-python/blob/710796b8b877a970297106e5bbc8e2afa47f86ec/tree-sitter.json#L1-L42)


> [!TIP]
> 其實init後，tree-sitter.json的一開始
>
> `"$schema": "https://tree-sitter.github.io/tree-sitter/assets/schemas/config.schema.json"`
>
> 此連結裡面就是此範文件的寫法

# tree-sitter parse

```
tree-sitter parse corpus/example.txt
```

# 參考資料

- https://tree-sitter.github.io/tree-sitter/index.html
- https://www.jonashietala.se/blog/2024/03/19/lets_create_a_tree-sitter_grammar/
