define(["QUnit", "urlfragment"], function(QUnit, urlfragment) {
    var actual, expected;

    QUnit.module("urlfragment", function(hooks) {
        QUnit.test("to_object", function(assert) {
            actual = urlfragment.to_object("date=20160101;region=globalocean");
            expected = {date: "20160101",
                        region: "globalocean"};
            assert.deepEqual(actual, expected);
        });


        QUnit.test("to_query", function(assert) {
            actual = urlfragment.to_query({
                date: "20160101",
                region: "globalocean"
            });
            expected = "date=20160101;region=globalocean";
            assert.equal(actual, expected);
        });
    });
});
