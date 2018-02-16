// @ts-check

"use strict";

module.exports = {
  "names": [ "letters-E-X", "letter-E-letter-X", "contains-ex" ],
  "description": "Rule that reports an error for lines with the letters 'EX'",
  "tags": [ "test" ],
  "function": function rule(params, onError) {
    params.tokens.filter(function filterToken(token) {
      return token.type === "inline";
    }).forEach(function forToken(inline) {
      inline.children.filter(function filterChild(child) {
        return child.type === "text";
      }).forEach(function forChild(text) {
        var index = text.content.toLowerCase().indexOf("ex");
        if (index !== -1) {
          onError({
            "lineNumber": text.lineNumber,
            "detail": null,
            "context": text.content.substr(index - 1, 4),
            "range": null
          });
        }
      });
    });
  }
};
