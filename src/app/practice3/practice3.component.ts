import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {

  showParagraph = false;
  clickHistory = [];
  historyNumber = 1;
  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    if (this.showParagraph) {
      this.showParagraph = false;
      this.clickHistory.push(this.historyNumber + ' hide Paragraph');
    } else {
      this.showParagraph = true;
      this.clickHistory.push(this.historyNumber + ' show Paragraph');
    }
    this.historyNumber++;
  }
  getDisplayState() {
    return this.showParagraph ? 'block' : 'none';
  }

  getHistoryBackgroundColor(entry: string) {
    const entryNumber = +entry.substring(0, entry.indexOf(' '));
    if ( entryNumber >= 5 && entryNumber % 2 === 1) {
      return 'blue';
    }
    return 'transparent';
  }
  renderWhiteTextColor(entry: string) {
    const entryNumber = +entry.substring(0, entry.indexOf(' '));
    if ( entryNumber >= 5 && entryNumber % 2 === 1) {
      return true;
    }
    return false;
  }
}
