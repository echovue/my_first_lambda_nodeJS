exports.handler = function (event, context, callback) {
    var value = event.initialValue;
    var value2 = value + 1;
    callback(null, {
        initialValue: value,
        incrementedValue: value2
    });
};