import { Component } from '@angular/core';

interface StepItem {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  templateUrl: './how-it-works-section.component.html',
  styleUrl: './how-it-works-section.component.scss'
})
export class HowItWorksSectionComponent {
  protected readonly steps: readonly StepItem[] = [
    {
      index: '01',
      title: 'Tworzysz profil gracza',
      description: 'Dodajesz zdjęcie, pozycje, preferowane boiska, dyspozycyjność i krótki opis.'
    },
    {
      index: '02',
      title: 'Szukasz lub organizujesz mecz',
      description: 'Filtrujesz wydarzenia albo zakładasz własną grupę z pełnym zestawem ustawień.'
    },
    {
      index: '03',
      title: 'Grasz, oceniasz i awansujesz',
      description: 'Po meczu zbierasz statystyki, oceny, punkty XP i budujesz miejsce w rankingach.'
    }
  ];
}
