import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'capp-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Input() title: string;
  @Input() counter = 0;
  @Output() increase = new EventEmitter<number>();
  @Output() decrease = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
