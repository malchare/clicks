import { Component, OnInit } from '@angular/core';
import { ClickService } from './click.service';
import { randomColor } from 'randomcolor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allClicks = 0;
  title = 'app';
  task1 = 0;
  task2 = 0;
  colors = [];

  constructor(private clickService: ClickService) { }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(data => {
      this.allClicks = data;
      this.colors.push(randomColor());
    });
  }

  addTask1(task: number): void {
    this.task1 = task;
  }

  addTask2(task: number): void {
    this.task2 = task;
  }

  remove(t: number) {
      if (t === 1 && this.task1 > 0) {
        this.task1 -= 1;
        this.removeSum();
      } else if (t === 2 && this.task2 > 0) {
        this.task2 -= 1;
        this.removeSum();
      }
  }

  private removeSum() {
    this.clickService.sum -= 1;
    this.allClicks = this.clickService.sum;
    this.colors.pop();
  }

  getColor(): string {
    return this.colors[0];
  }
}
