import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  array = [];
  sum = 20;
  throttle = 100;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  config = {
    suppressScrollX: true,
  };

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < this.sum; ++i) {
      this.array[_method](...[i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  // prependItems(startIndex, endIndex) {
  //   this.addItems(startIndex, endIndex, 'unshift');
  // }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);
    // add another 20 items
    const start = this.sum;
    this.sum += 10;
    this.appendItems(start, this.sum);
    this.direction = 'down';
  }

  // onUp(ev) {
  //   console.log('scrolled up!', ev);
  //   const start = this.sum;
  //   this.sum += 20;
  //   this.prependItems(start, this.sum);

  //   this.direction = 'up';
  // }
  generateWord() {
    return chance.word();
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
