import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
 
  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
 

}
