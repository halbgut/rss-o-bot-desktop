const notifier = require('node-notifier')
const { Observable: O } = require('rxjs/Rx')

module.exports = function desktop (config) {
  const notify = O.bindNodeCallback(notifier.notify.bind(notifier))
  return (blog, url, title) => notify({
    title: blog, message: title, open: url
  }).takeUntilWithTime(1000) // Time out gracefully if nothing happens
}

