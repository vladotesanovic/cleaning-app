import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'capp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Output() click = new EventEmitter<boolean>();
  @Input() label: string;
  @Input() type: 'primary' | 'default' = 'default';

  constructor() { }

  ngOnInit() {
  }

}
