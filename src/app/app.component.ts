import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Person } from './models/person';
import { randomIntFromInterval } from './utils/math';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codeandpepper';

  public fightResult: string = '';
  public score1: number = 0;
  public person1?: Person;

  public score2: number = 0;
  public person2?: Person;

  public winner?: Person;


  public async processFight() {
    this.person1 = await this.getRandomPerson();
    this.person2 = await this.getRandomPerson();

    if (this.person1.mass > this.person2.mass) {
      this.winner = this.person1;
      this.score1++;
      this.fightResult = "LEFT WON"
    }
    else if (this.person1.mass < this.person2.mass) {
      this.winner = this.person2;
      this.score2++;
      this.fightResult = "RIGHT WON"
    }
    else {
      this.winner = undefined;
      this.fightResult = "DRAW"
    }
  }

  private async getRandomPerson(): Promise<Person> {
    const index = randomIntFromInterval(1, 12);

    return fetch(`https://swapi.dev/api/people/${index}`).then(res => res.json()).then(x => x as Person);
  }
}
