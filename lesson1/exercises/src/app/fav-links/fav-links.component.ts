import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://www.youtube.com/channel/UC8eNyF9eYwgr_K-Nl4gSHWw', 'https://www.bungie.net/', 'https://www.youtube.com/user/ifscchannel']
  constructor() { }

  ngOnInit() {
  }

}
