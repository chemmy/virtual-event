import { Directive, HostListener, ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[nav-toggle-hover]'
})
export class NavToggleHoverDirective {
  constructor(public elementRef: ElementRef) { }
  @Input('nav-toggle-hover') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elementRef.nativeElement.querySelector('.dropdown-toggle')?.classList?.add(this.hoverClass);
    this.elementRef.nativeElement.querySelector('.dropdown-menu')?.classList?.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elementRef.nativeElement.querySelector('.dropdown-toggle')?.classList?.remove(this.hoverClass);
    this.elementRef.nativeElement.querySelector('.dropdown-menu')?.classList?.remove(this.hoverClass);
  }
}
