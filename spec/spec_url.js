define(["QUnit", "url"], function(QUnit, url) {
	var actual, expected;

	QUnit.module("url", function(hooks) {
		QUnit.test("to_object", function(assert) {
			actual = url.to_object("date=20160101;region=globalocean");
			expected = {date: "20160101",
			            region: "globalocean"};
			assert.deepEqual(actual, expected);
		});


		QUnit.test("to_query", function(assert) {
			actual = url.to_query({
				date: "20160101",
				region: "globalocean"
			});
			expected = "date=20160101;region=globalocean";
			assert.equal(actual, expected);
		});
	});
});
