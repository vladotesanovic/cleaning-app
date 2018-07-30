import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'capp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() model: NgModel;
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
