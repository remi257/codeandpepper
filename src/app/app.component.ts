import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codeandpepper';

  public score1: number = 0;
  public person1?: Person;

  public score2: number = 0;
  public person2?: Person;

  public winner?: Person;


  public processFight() {
    this.person1 = {name: 'abc', mass: 1};
    this.person2 = {name: 'def', mass: 5};

    if (this.person1.mass > this.person2.mass) {
      this.winner = this.person1;
      this.score1++;
    }
    else if (this.person1.mass < this.person2.mass) {
      this.winner = this.person2;
      this.score2++;
    }
    else {
      this.winner = undefined;
    }
    
  }
}
