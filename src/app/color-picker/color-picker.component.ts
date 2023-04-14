import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  @Input() id: string | undefined;
  @Input() value: string | undefined;
  @Input() title: string | undefined;

}