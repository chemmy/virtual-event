import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Save";
  @Input() type: string = "primary";
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
