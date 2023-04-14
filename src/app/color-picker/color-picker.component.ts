import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  @Input() colorPickerId: string | undefined;

  @Input() colorPickerValue: string | undefined;

  @Input() colorPickerTitle: string | undefined;

}