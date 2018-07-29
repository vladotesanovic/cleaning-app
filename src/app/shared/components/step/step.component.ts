import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'capp-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {
  @Input() left = false;
  @Input() right = false;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
