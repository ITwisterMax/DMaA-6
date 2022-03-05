Array.prototype.fillArrayRandom = function (n, min, max) {
  this.fill(0);
  this.forEach((element, index, array) => (array[index] = Array(n).fillRandom(min, max)));
  return this;
};

Array.prototype.fillRandom = function (min, max) {
  this.fill(0);
  this.forEach((element, index, array) => (array[index] = Math.round(min + Math.random() * (max - min))));
  return this;
};

function Canvas() {
  var _obj = {},
    canvas = null,
    ctx = null,
    colors = [
      '#000000',
      '#ff0000',
      '#00ff00',
      '#00ffff',
      '#0000ff',
      '#0b670b',
      '#ffff00',
      '#ff00ff',
      '#797915',
      '#ff66cc',
    ];

  _obj.DrawText = function (x, y, c, str) {
    ctx.font = '14px Times';
    ctx.fillStyle = colors[c];
    ctx.fillText(str, x, y);
  };

  _obj.DrawLine = function (x, y, c, x1, x2, k) {
    ctx.beginPath();
    ctx.lineWidth = k;
    ctx.strokeStyle = colors[c];
    ctx.moveTo(x, y);
    ctx.lineTo(x1, x2);
    ctx.stroke();
  };

  _obj.Clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  _obj.Init = function (canvasId) {
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext("2d");
  };

  return _obj;
}
