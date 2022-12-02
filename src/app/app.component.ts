import { Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router';
import { LoaderService } from './loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectNagarro';
  constructor(public router: Router ){
  }

  
}
