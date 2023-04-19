import { Directive, ElementRef, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({ selector: '[bgCarousel]' })
export class BackgroundCarouselDirective {
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
  }
  @Output() currentIndex = 0;
  @Input() bgCarousel: string[] = [];
  @Input() bgCarouselWidth = '';
  @Input() bgCarouselHeight = '';

  @HostListener('document:keyup', ['$event'])
  handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.bgCarousel.length - 1
        }
    } 
    
    if (e.key === 'ArrowRight') {
        this.currentIndex++;
        if(this.currentIndex >= this.bgCarousel.length) {
            this.currentIndex = 0
        }
    }
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', this.bgCarousel[this.currentIndex])
    this._renderer2.setStyle(this._elementRef.nativeElement, 'width', `${this.bgCarouselWidth}px`)
    this._renderer2.setStyle(this._elementRef.nativeElement, 'height', `${this.bgCarouselHeight}px`)
  }
}
