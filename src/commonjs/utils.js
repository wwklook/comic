export function debounce(fn, delay) {
	let timer = null;
	return function(...args) {
		if (timer) clearTimeout(timer)
		let isFirst = !timer;
		if (isFirst) {
			fn.apply(this, args)
		}
		timer = setTimeout(() => {
			timer = null
		}, delay)
	}
}

export function throttle(fn, delay) {
	let lastTime = null;
	return function(...args) {
		let now = new Date().getTime()
		if (now - lastTime > delay) {
			fn.apply(this, args)
			lastTime = now
		}
	}
}

export function animate(obj, json, speed=10, fn=null) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var flag = true;
    for (var k in json) {
      if (k === "opacity") {
        var leader = getComputedStyle(obj, null)[k] * 100;
        var tag = json[k] * 100;
        var step = (tag - leader) / speed;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj.style[k] = leader / 100;
      } else if (k === "scrollTop") {
        var leader = obj[k];
        var tag = json[k];
        var step = (tag - leader) / speed;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj[k] = leader;
      } else {
        var leader = parseInt(getComputedStyle(obj, null)[k]) || 0;
        var tag = json[k];
        var step = (tag - leader) / speed;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj.style[k] = leader + "px";
      }
      if (leader !== tag) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(obj.timer);
      if (fn) {
        fn();
      }
    }
  }, 15);
}
