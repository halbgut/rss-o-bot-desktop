const notifier = require('node-notifier')
const Rx = require('rx')

module.exports = function desktop (config) {
  const notify = Rx.Observable.fromNodeCallback(notifier.notify.bind(notifier))
  return (title, message) => notify({
    title, message, open: message
  }).takeUntilWithTime(1000) // Time out gracefully if nothing happens
}

