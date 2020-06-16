import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSimplestyle]',
})
export class SimplestyleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'skyblue0;';
  }
}
