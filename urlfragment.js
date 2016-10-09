(function() {
    var module = {};

    /**
     * convert fragment string to object
     */
    module.toJSON = function(fragment) {
        var name, value;
        var result = {};
        _.each(fragment.split(";"), function(pair) {
            name = pair.split("=")[0];
            value = pair.split("=")[1];
            result[name] = value;
        }, this);
        return result;
    };

    /**
     * convert object to fragment string
     */
    module.toString = function(data) {
        var pairs = _.map(data, function(value, key) {
            return [key, value].join("=");
        });
        return pairs.join(";");
    };

    // Support AMD or standard import
    if (typeof define === 'function' && define.amd) {
        define(["underscore"], function(_) {
            return module;
        });
    } else {
        window.urlfragment = module;
    }
})();
