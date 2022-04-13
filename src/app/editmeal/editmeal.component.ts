import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-editmeal',
  templateUrl: './editmeal.component.html',
  styleUrls: ['./editmeal.component.css']
})
export class EditmealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  childSelectedMeal!: Meals;
  @Output() doneClickedSender = new EventEmitter();
    DoneClicked() {
      this.doneClickedSender.emit();
    }
}
