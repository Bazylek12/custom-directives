import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[movable]' })
export class MovableDirective {
  private startX!: number;
  private startY!: number;
  private offsetX!: number;
  private offsetY!: number;

  private isMoving = false;
  private firstClick = true;

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isMoving = true;
    if (this.firstClick) {
      this.startX = event.clientX - event.offsetX;
      this.startY = event.clientY - event.offsetY;
      this.firstClick = false;
    }
    this.offsetX = event.offsetX;
    this.offsetY = event.offsetY;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (this.isMoving) {
      const x = event.clientX - this.offsetX;
      const y = event.clientY - this.offsetY;
      this._renderer2.setStyle(
        this._elementRef.nativeElement,
        'transform',
        `translate3d(${x - this.startX}px, ${y - this.startY}px, 0)`
      );
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this.isMoving = false;
  }
}
