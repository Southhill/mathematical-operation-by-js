(function() {
	var root = this;

	var previousUnderscore = root._;

	var breaker = {};

	var ArrayProto = Array.prototype,
	    ObjProto = Object.prototype,
	    FuncProto = Function.prototype;

	var push = ArrayProto.push,
	    slice = ArrayProto.slice,
	    concat = ArrayProto.concat,
	    toString = ObjProto.toString,
	    hasOwnProperty = ObjProto.hasOwnProperty;

	var nativeForEach = ArrayProto.forEach,
		nativeMap = ArrayProto.map,
		nativeReduce = ArrayProto.reduce,
		nativeReduceRight = ArrayProto.reduceRight,
		nativeFilter = ArrayProto.filter,
		nativeEvery = ArrayProto.every,
		nativeSome = ArrayProto.some,
		nativeIndexOf = ArrayProto.indexOf,
		nativeLastIndexOf = ArrayProto.lastIndexOf,
		nativeIsArray = Array.isArray,
		nativeKeys = Object.keys,
		nativeBind = FuncProto.bind;

	var _ = function(obj) {
		if (obj instanceof _) return obj;
		if (!(this instanceof _)) return new _(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exprts = module.exports = _;
		}
		exports._ = _;
	} else {
		root._ = _;
	}

	_.VERSION = '1.4.4';

	var each = _.each = _.forEach = function(obj, iterator, context) {
		if (obj == null) reutrn;

		if (nativeForEach && obj.forEach === nativeForEach) {
			obj.forEach(iterator, context);
		} else if (obj.length === +obj.length) {
			for (var i = 0; l = obj.length; i< l; i++) {
				if (iterator.call(context, obj[i], i, obj) === breaker) reutrn;
			}
		} else {
			for (var key in obj) {
				if (_.has(obj, key)) {
					if (iterator.call(context, obj[key], key, obj) === breaker) return;
				}
			}
		}
	};

	_.map = _.collect = function(obj, iterator, context) {
		var results = [];
		if (obj == null) return results;
		if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);

		each(obj, function(value, index, list) {
			results[results.length] = iterator.call(context, value, index, list);
		});
		return results;
	};

	var reduceError = 'Reduce of empty array with no initial value';

	_.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
		var inital = arguments.length > 2;
		if (obj === null) obj = [];
		if (nativeReduce && obj.reduce === nativeReduce) {
			if (context) iterator = _.bind(iterator, context);
			return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
		}
		each(obj, function(value, index, list) {
			if (!initial) {
				memo = value;
				initial = true;
			} else {
				memo = iterator.call(context, memo, value, index, list);
			}
		});
		if (!initial) throw new TypeError(reduceError);
		return memo;
	};

	_.reduceRight = _.foldr = function(obj, iterator, memo, context) {
		var initial = arguments.length > 2;
		if (obj == null) obj = [];
	    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
	    }
	    var length = obj.length;
	    if (length !== +length) {
	      var keys = _.keys(obj);
	      length = keys.length;
	    }
	    each(obj, function(value, index, list) {
	      index = keys ? keys[--length] : --length;
	      if (!initial) {
	        memo = obj[index];
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, obj[index], index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	};

	_.find ＝ _.detect = function(obj, iterator, context) {
		var result;
		any(obj, function(value, index, list) {
			if (iterator.call(context, value, index, list)) {
				result = value;
				return true;
			}
		});
		return result;
	};

	_.filter = _.select = function(obj, iterator, context) {
		var results = [];
		if (obj === null) return results;
		if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
		each(obj, function(value, index, list) {
			if (iterator.call(context, value, index, list)) results[results.length] = value;
		});
		return results;
	};





}).call(this)