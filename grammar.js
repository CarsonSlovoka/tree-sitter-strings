/**
 * @file xcode strings
 * @author Carson <jackparadise520a@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "strings",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
