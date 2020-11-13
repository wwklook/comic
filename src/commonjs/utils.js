export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function throttle(func, delay) {
  let lastTime = null;
  let timeout;
  return function () {
    let context = this;
    let now = new Date();
    let arg = arguments;
    if (now - lastTime - delay > 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      func.apply(context, arg)
      lastTime = now
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(context, arg)
      }, delay)
    }
  }
}
