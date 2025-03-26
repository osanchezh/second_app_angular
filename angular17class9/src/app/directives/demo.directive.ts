import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {
  private element:ElementRef<HTMLInputElement> =inject(ElementRef);
  constructor(private renderer:Renderer2) { 
    console.log('DemoDirective');
    //this.element.nativeElement.style.backgroundColor="green";
    renderer.setStyle(this.element.nativeElement,'background-color','yellow');
  }

}
