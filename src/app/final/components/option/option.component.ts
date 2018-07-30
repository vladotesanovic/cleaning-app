import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'capp-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent implements OnInit {

  @Output() chooseTime = new EventEmitter<string>();
  @Input() value: string;
  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
