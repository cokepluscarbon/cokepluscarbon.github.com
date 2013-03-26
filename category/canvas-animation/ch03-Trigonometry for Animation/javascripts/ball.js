/*
 * 小球对象
 */
function Ball(radius, color ){
	if (radius === undefined) { radius = 40; } //默认半径
	if (color === undefined) { color = "#396"; } // 默认填充颜色
	this.x = 0; // 坐标
	this.y = 0;
	this.scaleX = 1; // x,y轴的拉伸比例
	this.scaley = 1;
	this.radius = radius;
	this.color = utils.parseColor(color); // 解析颜色函数
	this.lineWidth = 1;
}
/*
 * 绘制小球函数
 */
Ball.prototype.draw = function(context) {
	context.save(); 
	context.translate(this.x, this.y); 
	context.rotate(this.rotation); 
	context.scale(this.scaleX, this.scaleY); 
	context.lineWidth = this.lineWidth; 
	context.fillStyle = this.color; 
	context.beginPath(); 
	context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);  // 画圆圈
	context.closePath(); 
	context.fill(); 
	if (this.lineWidth > 0) { 
		context.stroke(); 
	} 
	context.restore();
}

