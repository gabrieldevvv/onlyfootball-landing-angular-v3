import { Component } from '@angular/core';

interface HeroPoint {
  readonly title: string;
  readonly description: string;
}

interface HeroMetric {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  protected readonly points: readonly HeroPoint[] = [
    {
      title: 'Twórz mecze w kilka minut',
      description: 'Jednorazowe lub cykliczne rozgrywki, liczba miejsc, poziom meczu i prywatność ustawione w jednym flow.'
    },
    {
      title: 'Zapraszaj i uzupełniaj skład szybciej',
      description: 'Znajduj zawodników po dystansie, porze dnia, intensywności, wieku i cenie meczu.'
    },
    {
      title: 'Buduj ranking swojej społeczności',
      description: 'Statystyki, MVP, poziomy i oceny po meczu zwiększają zaangażowanie i powroty do aplikacji.'
    }
  ];

  protected readonly metrics: readonly HeroMetric[] = [
    { label: 'Typy meczów', value: '1x1–11x11' },
    { label: 'Kanały zaproszeń', value: '5+' },
    { label: 'Tryby prywatności', value: '4' }
  ];

  protected scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
