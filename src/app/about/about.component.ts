import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  info: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.info = data;
      console.log(this.info);

    });
  }

}
