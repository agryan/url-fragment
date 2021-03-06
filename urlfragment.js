(function() {
    var module = {};

    /**
     * convert fragment string to object
     */
    module.toJSON = function(fragment, options) {
        var name, value, delimiter;
        var result = {};

		if (typeof options !== "undefined") {
			delimiter = options.delimiter;
		} else {
			delimiter = "&";
		}

        _.each(fragment.split(delimiter), function(pair) {
            name = pair.split("=")[0];
            value = pair.split("=")[1];
            result[name] = value;
        }, this);
        return result;
    };

    /**
     * convert object to fragment string
     */
    module.toString = function(data, options) {
		var delimiter = "&";
		if (typeof options !== "undefined") {
			delimiter = options.delimiter;
		}
        var pairs = _.map(data, function(value, key) {
            return [key, value].join("=");
        });
        return pairs.join(delimiter);
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
