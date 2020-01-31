const test = require("ava")
const allUnicodeRegex = require(".")

test("main", (t) => {
	t.is("a😃中文".replace(allUnicodeRegex, "."), "....")
})
