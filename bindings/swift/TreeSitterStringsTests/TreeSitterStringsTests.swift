import XCTest
import SwiftTreeSitter
import TreeSitterTreeSitterStrings

final class TreeSitterTreeSitterStringsTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_tree_sitter_strings())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading TreeSitterStrings grammar")
    }
}
