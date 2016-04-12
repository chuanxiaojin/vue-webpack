/**
 * 自己写一个 directive 玩玩 
 *
 * 使用方法
 */

export function setDirective(Vue) {

	// ps: 用来实时监听 input 值得变化 
	Vue.directive('vue-change', function(newValue, oldValue) {
		// 需要做属性判断, type = radio/checkbox return 出去
		// 在 bind 之后立即以初始值为参数第一次调用, 之后每当绑定值变化时调用, 参数为新值和旧值
	});
}