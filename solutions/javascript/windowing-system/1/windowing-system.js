// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size (width=80, height=60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) { 
  [this.width, this.height] = [newWidth, newHeight];
}

export function Position(x=0, y=0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(targetSize) {
    const minSizeValue = {width: 1, height: 1};
    const maxSizeValue = { width: this.screenSize.width -this.position.x, height: this.screenSize.height -  this.position.y };
    let finalSize = {}
    for (const [key,value] of Object.entries(targetSize)) {
  const finalValue = Math.max(minSizeValue[key], Math.min(maxSizeValue[key], targetSize[key]));
      finalSize[key] = finalValue;
}
    this.size.resize(finalSize.width, finalSize.height)    
  }

  move(targetPosition) {
    const minPositionValue = { x: 0, y:0 };
    const maxPositionValue = { x: this.screenSize.width - this.size.width, y: this.screenSize.height - this.size.height };
    let finalSize = {};
    for (const [key,value] of Object.entries(targetPosition)) {
      const finalValue = Math.max(minPositionValue[key], Math.min(maxPositionValue[key], targetPosition[key]));
      finalSize[key] = finalValue;
}
    this.position.move(finalSize.x, finalSize.y);
  }  
}

export function changeWindow(ProgramWindow) {
  ProgramWindow.resize(new Size(400,300));
  ProgramWindow.move(new Position(100,150));
  return ProgramWindow;
}








