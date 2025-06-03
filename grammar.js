/**
 * @file xcode strings
 * @author Carson <jackparadise520a@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check


module.exports = grammar({
  name: 'tree_sitter_strings',

  rules: {
    source_file: $ => repeat($._line),

    _line: $ => choice(
      $.comment,
      $.assignment,
      $.empty_line
    ),

    comment: $ => token(seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/')),

    assignment: $ => seq(
      field("key", $.quoted_string),
      '=',
      field("value", $.quoted_string),
      ';'
    ),

    // key對應highlights.scm的內容
    quoted_string: $ => seq(
      '"',
      repeat(choice(
        /[^"\\]/,
        /\\./
      )),
      '"'
    ),

    empty_line: $ => /\s*/,
  }
});
