(function() {
    var module = {};

    /**
     * convert query string to object
     */
    module.to_object = function(query) {
        var name, value;
        var result = {};
        _.each(query.split(";"), function(fragment) {
            name = fragment.split("=")[0];
            value = fragment.split("=")[1];
            result[name] = value;
        }, this);
        return result;
    };

    /**
     * convert object to query string
     */
    module.to_query = function(data) {
        var fragments = _.map(data, function(value, key) {
            return [key, value].join("=");
        });
        return fragments.join(";");
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
