// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

Number.prototype.clamp = function(min, max) {
  return Math.max(min, Math.min(this, max));
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    size.width = size.width.clamp(1, this.screenSize.width - this.position.x);
    size.height = size.height.clamp(1, this.screenSize.height - this.position.y);
    this.size = size;
  }

  move(position) {
    position.x = position.x.clamp(0, this.screenSize.width - this.size.width);
    position.y = position.y.clamp(0, this.screenSize.height - this.size.height);
    this.position = position;
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}