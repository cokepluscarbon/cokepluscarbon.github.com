function Coordinate(x, y, width, height, lineWidth, color, hookWidth) {
	if (lineWidth === undefined) {
		lineWidth = 2;
	}
	if (color === undefined) {
		color = "black";
	}
	if (hookWidth === undefined) {
		hookWidth = 10;
	}
	this.left = x;
	this.right = x + width;
	this.top = y;
	this.bottom = y + height;
	this.color = utils.parseColor(color);
	this.lineWidth = lineWidth;
	this.hookWidth = hookWidth;
}

Coordinate.prototype.draw = function(context) {
	// 绘画表格
	context.save();
	context.beginPath();
	context.strokeStyle = '#CCCCCC';
	context.lineWidth = 1;
	for (var i = this.bottom; i > this.top; i -= 15) {
		context.moveTo(this.left, i + 0.5);
		context.lineTo(this.right, i + 0.5);
	}
	for (var i = this.left; i < this.right; i += 15) {
		context.moveTo(i + 0.5, this.top);
		context.lineTo(i + 0.5, this.bottom);
	}
	context.stroke();
	context.closePath();
	context.restore();
	
	// 绘画主干
	context.save();
	context.lineWidth = this.lineWidth;
	context.strokeStyle = this.color;
	context.beginPath();
	context.moveTo(this.left, this.top);
	context.lineTo(this.left, this.bottom);
	context.lineTo(this.right, this.bottom);
	context.moveTo(this.left - this.hookWidth, this.top + this.hookWidth);
	context.lineTo(this.left, this.top);
	context.lineTo(this.left + this.hookWidth, this.top + this.hookWidth);
	context.moveTo(this.right - this.hookWidth, this.bottom - this.hookWidth);
	context.lineTo(this.right, this.bottom);
	context.lineTo(this.right - this.hookWidth, this.bottom + this.hookWidth);
	context.stroke();
	context.closePath();
	context.restore();
}; 