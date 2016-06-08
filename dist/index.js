'use strict';

var notifier = require('node-notifier');
var Rx = require('rx');

module.exports = function desktop(config) {
  var notify = Rx.Observable.fromNodeCallback(notifier.notify.bind(notifier));
  return function (title, text) {
    return notify({
      title: title, text: text, open: text
    }).takeUntilWithTime(1000);
  }; // Time out gracefully if nothing happens
};