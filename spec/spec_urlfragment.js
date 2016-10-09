define(["QUnit", "urlfragment"], function(QUnit, urlfragment) {
    var actual, expected;

    QUnit.module("urlfragment", function(hooks) {
        QUnit.test("toJSON", function(assert) {
            actual = urlfragment.toJSON("date=20160101&region=globalocean");
            expected = {date: "20160101",
                        region: "globalocean"};
            assert.deepEqual(actual, expected);
        });

        QUnit.test("toJSON given alternative delimiter", function(assert) {
            actual = urlfragment.toJSON("date=20160101;region=globalocean",
				                        {delimiter: ";"});
            expected = {date: "20160101",
                        region: "globalocean"};
            assert.deepEqual(actual, expected);
        });


        QUnit.test("toString", function(assert) {
            actual = urlfragment.toString({
                date: "20160101",
                region: "globalocean"
            });
            expected = "date=20160101&region=globalocean";
            assert.equal(actual, expected);
        });

        QUnit.test("toString given alternative delimiter", function(assert) {
            actual = urlfragment.toString({
                date: "20160101",
                region: "globalocean"
            }, {delimiter: ";"});
            expected = "date=20160101;region=globalocean";
            assert.equal(actual, expected);
        });
    });
});
