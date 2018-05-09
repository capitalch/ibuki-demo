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

  }
}
