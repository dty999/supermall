import Vue from 'vue'

const formatDate = function(date, fmt) { // author: meizz
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

const bus = new Vue()

// fn 是需要防抖处理的函数
// wait 是时间间隔
function debounce(fn, wait) {
  // 通过闭包缓存一个定时器 id
  let timer = null
  // console.log('防抖函数');
  // 将 debounce 处理结果当作函数返回
  // 触发事件回调时执行这个返回函数
  return function(...args) {
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer){
       clearTimeout(timer)
       return
    }
    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}



export {
  formatDate,
  bus,
  debounce
}
