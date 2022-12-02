import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(public router: Router, public loaderService: LoaderService ){
  }

}
