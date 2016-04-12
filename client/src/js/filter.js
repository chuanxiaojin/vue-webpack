/**
 * 自己写一个 filter 玩玩
 *
 * 使用方法
 * {{reverseData | reverse}}
 */

export function setFilter(Vue) {
	Vue.filter('reverse', function(value) {
		return value.split('').reverse().join('');
	})

	// ps 还可以传任意数量的的参数
	Vue.filter('reverse2', function(value, begin, end) {
		return begin + value.split('').reverse().join('') + end;
	})
}


