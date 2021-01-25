import { Component, OnInit } from '@angular/core';
 
export interface Posts {
  color: string;
  cols: number;
  rows: number;
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
      "following":"200",
      "type":"Carpediem!",
      "site":"@one8world",
      "members":"Followed by some members"
    },
    
  ]
  category=[
    {
      "name":"POSTS"
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

  posts: Posts[] = [
    {cols: 1, rows: 2.5, color: 'lightblue'},
    {cols: 1, rows: 2.5, color: 'lightgreen'},
    {cols: 1, rows: 2.5, color: 'lightpink'},
    {cols: 1, rows: 2.5, color: '#DDBDF1'},
    {cols: 1, rows: 2.5, color: 'lightpink'},
    {cols: 1, rows: 2.5, color: 'lightgreen'},
    {cols: 1, rows: 2.5, color: '#DDBDF1'},
    {cols: 1, rows: 2.5, color: 'lightpink'},
    {cols: 1, rows: 2.5, color: 'lightgreen'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
