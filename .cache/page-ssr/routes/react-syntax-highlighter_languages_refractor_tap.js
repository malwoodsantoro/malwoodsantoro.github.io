"use strict";
exports.id = "react-syntax-highlighter_languages_refractor_tap";
exports.ids = ["react-syntax-highlighter_languages_refractor_tap"];
exports.modules = {

/***/ "./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/***/ ((module) => {



module.exports = tap
tap.displayName = 'tap'
tap.aliases = []
function tap(Prism) {
  Prism.languages.tap = {
    fail: /not ok[^#{\n\r]*/,
    pass: /ok[^#{\n\r]*/,
    pragma: /pragma [+-][a-z]+/,
    bailout: /bail out!.*/i,
    version: /TAP version \d+/i,
    plan: /\d+\.\.\d+(?: +#.*)?/,
    subtest: {
      pattern: /# Subtest(?:: .*)?/,
      greedy: true
    },
    punctuation: /[{}]/,
    directive: /#.*/,
    yamlish: {
      pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
      lookbehind: true,
      inside: Prism.languages.yaml,
      alias: 'language-yaml'
    }
  }
}


/***/ })

};
;
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tap.js.map