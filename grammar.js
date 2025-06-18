/**
 * @file xcode strings
 * @author Carson <jackparadise520a@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'strings',

  // 定義解析器應該忽略的部份
  extras: $ => [
    /\s/, // 空白, 製表符(Tab), \n, \r等
    $.comment, // 註解
  ],

  rules: {
    // 不錯的參考: 
    // https://github.com/tree-sitter/tree-sitter-python/blob/710796b8b877a970297106e5bbc8e2afa47f86ec/grammar.js#L105-L110
    // https://github.com/nvim-treesitter/nvim-treesitter/blob/42fc28ba918343ebfd5565147a42a26580579482/lua/nvim-treesitter/parsers.lua#L60-L83

    // document(這是一個變數名稱，也可以自定義成其它的)是語法的頂級規則，表示整個文件的結構
    // repeat 函數，表示文件由零個或多個 pair（鍵值對）組成
    // repeat 也允許重覆0次，也就是可以為空文件
    document: $ => repeat($.pair),

    // 定義pair的規則
    // 允許它是鍵值對的形式: "key" = "value";
    // seq(...) 表示由這一系列的token組成
    pair: $ => seq(
      field("key", $.string), // 此第一個token命名為key, 它的類型為string(需定義)
      '=',
      field("value", $.string),
      ';'
    ),

    // \\. 匹配任何轉譯字，例如: \n, \\, \"
    // | 或
    // [^"\\] 匹配所有非 " 和 \ 外的字符
    string: $ => /"(?:\\.|[^"\\])*"/,

    // comment可以
    // token(...) 會將裡頭的內容視為不可分割的單元，即: 解析器會將整個註釋視為一個單獨的 token，而不是解析其內部結構
    // choice(...) 數值可以是這裡頭定義的其中一種都行
    comment: $ => token(choice(
      // 三部份組成: /*  
      // /[^*]*\*+([^/*][^*]*\*+)*/: 匹配註釋的內容：
      //   [^*] *: 匹配零個或多個非星號（*）的字符
      //   \* +: 匹配一個或多個星號（*）
      //   ([^/*][^*]*\*+)*: 匹配非結尾的內容：
      //     [^/*]: 匹配一個既不是斜杠（/）也不是星號（*）的字符
      //     [^*]*: 匹配零個或多個非星號的字符
      //     \*+: 匹配一個或多個星號
      //     *: 表示這個模式可以重複零次或多次
      // 這個正則表達式確保匹配的是有效的多行註釋內容，避免錯誤匹配結尾的 */
      seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/'),
      seq('//', /.*/),
    )),
  }
});


