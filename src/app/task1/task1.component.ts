import { Component, OnInit, Input, Output } from '@angular/core';
import { ClickService } from '../click.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component implements OnInit {

  @Input()
  click = 0;

  @Output()
  eventTask = new EventEmitter<number>();

  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

  add() {
    this.click += 1;
    this.clickService.add();
    this.eventTask.emit(this.click);
  }
}
