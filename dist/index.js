'use strict';

var notifier = require('node-notifier');
var Rx = require('rx');

module.exports = function desktop(config) {
  var notify = Rx.Observable.fromNodeCallback(notifier.notify.bind(notifier));
  return function (title, message) {
    return notify({
      title: title, message: message, open: message
    }).takeUntilWithTime(1000);
  }; // Time out gracefully if nothing happens
};