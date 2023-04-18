import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App 1';
  name = 'Angular App';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onIntervalFierd(fierdNumber: number) {
    if(fierdNumber % 2 === 0){
      this.evenNumbers.push(fierdNumber);
    }
    else{
      this.oddNumbers.push(fierdNumber);
    }
  }

}

