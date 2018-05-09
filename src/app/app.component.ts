import { Component, OnInit } from '@angular/core';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private ibukiService: IbukiService) {
  }
  ngOnInit() {
    this.ibukiService.filterOn('test').subscribe(x => console.log(x.data));
  }

  ibukiTest() {
    this.ibukiService.emit('test', 'Hello I am there');
  }
}
