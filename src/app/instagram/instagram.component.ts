import { Component, OnInit } from '@angular/core';
 
export interface Posts {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.sass']
})
export class InstagramComponent implements OnInit {
  users=[
    {
      "name":"Virat kholi",
      "post":"2000",
      "followers":"2m",
      "following":"200"
    },
    
  ]
  category=[
    {
      "name":"POST"
    },
    {
      "name":"REELS"
    },
    {
      "name":"IGTV"
    },
    {
      "name":"TAGGED"
    }
  ]

  post: Posts[] = [
    {text: 'One', cols:1 ,rows:1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Six', cols: 1, rows: 1, color: 'lightgreen'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
