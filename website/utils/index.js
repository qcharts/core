export function throttle(
  fn,
  wait,
  options = { leading: false, trailing: false }
) {
  let context = null
  let args = null
  let result = null
  let previous = 0
  let timer = null

  const later = () => {
    previous = options.leading ? Date.now() : 0
    result = fn.apply(context, args)
    timer = null
  }

  return function() {
    const now = Date.now()

    if (!previous && !options.leading) {
      previous = now
    }

    const remaining = wait - (now - previous)
    context = this
    args = arguments

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      previous = now
      result = fn.apply(context, args)
    } else if (!timer && options.trailing) {
      timer = setTimeout(later, remaining)
    }

    return result
  }
}
