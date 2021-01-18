import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
