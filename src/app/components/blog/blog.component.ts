import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
      title:'Baryłki',
      text:'baryłki sa super',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/%C3%96lf%C3%A4sser_Wietze.jpg'
    }
    ,
    {
      text:'Tytuł',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/%C3%96lf%C3%A4sser_Wietze.jpg'
    }
    ,
    {
      text:'Tytuł',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/%C3%96lf%C3%A4sser_Wietze.jpg'
    }
    ,
    {
      text:'Tytuł',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/%C3%96lf%C3%A4sser_Wietze.jpg'
    }
    ,
    {
      text:'Tytuł',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/%C3%96lf%C3%A4sser_Wietze.jpg'
    }
    ,
    {
      text:'Tytuł',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/%C3%96lf%C3%A4sser_Wietze.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
