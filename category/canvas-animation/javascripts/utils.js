/*
 * 工具类
 */
 
utils = {};
 
// 捕获鼠标在canvas上element上的坐标
utils.captureMouse = function(element) {
	var mouse = {x: 0, y: 0}; // 坐标对象
	
	element.addEventListener('mousemove', function(event){
		var x, y; // 鼠标相对于页面的坐标
		if(event.pageX || event.pageY) {
			x = event.pageX;
			y = event.pageY;
		} else { // 兼容性考虑
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
		}
		mouse.x = x - element.offsetLeft; // 鼠标在页面在的坐标 - 元素在页面上的坐标 = 鼠标在元素在的坐标
		mouse.y = y - element.offsetTop;
	}, false)
	
	return mouse; // 返回坐标对象
}