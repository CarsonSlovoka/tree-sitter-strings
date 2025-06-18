/**
 * @file xcode strings
 * @author Carson <jackparadise520a@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'strings',

  extras: $ => [
    /\s/, // 空白
    $.comment,
  ],

  rules: {
    document: $ => repeat($.pair),

    pair: $ => seq(
      field("key", $.string),
      '=',
      field("value", $.string),
      ';'
    ),

    string: $ => /"(?:\\.|[^"\\])*"/,

    comment: $ => token(choice(
      seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/'),
      seq('//', /.*/),
    )),
  }
});

