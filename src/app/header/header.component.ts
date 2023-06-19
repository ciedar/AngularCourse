import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() event = new EventEmitter<string>();

  navigationChanged(event: string) {
    this.event.emit(event);
  }
}
