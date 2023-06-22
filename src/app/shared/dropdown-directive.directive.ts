import { Directive, HostListener, HostBinding, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isDropdownOpen: boolean = false;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }


  @HostListener('click') dropDownClick(eventType: Event) {
    this.isDropdownOpen = !this.isDropdownOpen
  }

}

