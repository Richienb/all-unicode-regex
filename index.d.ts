/**
 * A regex which matches all unicode characters.
 * @example
 * ```
 * const allUnicodeRegex = require("all-unicode-regex");
 *
 * "a😃中文".replace(allUnicodeRegex, ".");
 * //=> '....'
 * ```
*/
declare const allUnicodeRegex: RegExp

export = allUnicodeRegex
