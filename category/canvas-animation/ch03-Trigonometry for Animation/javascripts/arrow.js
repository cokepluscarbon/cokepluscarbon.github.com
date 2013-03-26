/*
 *定义箭头对象
 */
function Arrow(){
	this.x = 0; // x y 坐标
	this.y = 0; 
	this.color = '#369'; // 颜色
	this.rotation = 0; // 旋转角度
}

/*
 *绘图方法draw
 */
Arrow.prototype.draw = function(context) {
	context.save(); // 保存context的当前状态
	context.translate(this.x, this.y); // 将箭头的中心移到坐标 {x, y}
	context.rotate(this.rotation); // 旋转角度
	context.width = 2; // 画笔宽度
	context.fillStyle = this.color; // 填充颜色
	context.beginPath(); // 开始绘制
	context.moveTo(-50, -25); 
	context.lineTo(0, -25); 
	context.lineTo(0, -50); 
	context.lineTo(50, 0); 
	context.lineTo(0, 50); 
	context.lineTo(0, 25); 
	context.lineTo(-50, 25); 
	context.lineTo(-50, -25); 
	context.closePath();  // 闭合画笔
	context.fill(); // 填充颜色
	context.stroke(); // 描边
	context.restore(); // context退回到之前保存的状态
}