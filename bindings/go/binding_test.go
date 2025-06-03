package tree_sitter_tree_sitter_strings_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_tree_sitter_strings "github.com/carsonslovoka/tree-sitter-strings/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_tree_sitter_strings.Language())
	if language == nil {
		t.Errorf("Error loading TreeSitterStrings grammar")
	}
}
