import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder;
  @Input() icon;
  @Input() value;
  @Input() maxlength;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateValue(event) {
    this.value = event;
    this.valueChange.emit(event);
  }

  onClick() {
    this.btnClick.emit();
  }
}
