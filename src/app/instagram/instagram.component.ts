import { Component, OnInit } from '@angular/core';
 
export interface Posts {
  color: string;
  cols: number;
  rows: number;
  // imageUrl: string;
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
    // {imageUrl:'assets/images/virat.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.png',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    // {imageUrl:'assets/images/virat1.jpg',cols: 1, rows: 2.5},
    {cols: 1, rows: 2.5,color:"lightblue"},
    {cols: 1, rows: 2.5,color:"lightgreen"},
    {cols: 1, rows: 2.5,color:"lightpink"},
    {cols: 1, rows: 2.5,color: '#DDBDF1'},
    {cols: 1, rows: 2.5,color:"lightpink"},
    {cols: 1, rows: 2.5,color:"lightblue"},
    {cols: 1, rows: 2.5,color: '#DDBDF1'},
    {cols: 1, rows: 2.5,color:"lightblue"},
    {cols: 1, rows: 2.5,color:"lightpink"},
  ];

  items = [
    { text: 'A', color: 'red' },
    { text: 'B', color: 'green' },
    { text: 'C', color: 'blue' },
    { text: 'D', color: '#54e5d7' } ,
    { text: 'A', color: 'red' },
    { text: 'B', color: 'green' },
    { text: 'C', color: 'blue' },
    { text: 'D', color: '#54e5d7' } 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
