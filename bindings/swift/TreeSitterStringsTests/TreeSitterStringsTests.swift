import XCTest
import SwiftTreeSitter
import TreeSitterStrings

final class TreeSitterStringsTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_strings())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Strings grammar")
    }
}
