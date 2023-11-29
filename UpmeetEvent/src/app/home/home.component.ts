import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  viewing: string = "events"

  setViewing(showView: string){   
    this.viewing = showView
  }

}
