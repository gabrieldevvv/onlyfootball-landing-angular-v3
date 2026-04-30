import { Component } from '@angular/core';

interface FeatureCard {
  readonly title: string;
  readonly description: string;
  readonly tag: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
  protected readonly features: readonly FeatureCard[] = [
    {
      tag: 'Profil zawodnika',
      title: 'Kompletny profil gracza',
      description: 'Zdjęcie, bio, preferowane pozycje, ulubione typy boisk, osiągnięcia i pełna historia występów.'
    },
    {
      tag: 'Wyszukiwanie',
      title: 'Szybkie dopasowanie meczów',
      description: 'Wyszukuj rozgrywki po dystansie, porze dnia, cenie, intensywności i średniej wieku zawodników.'
    },
    {
      tag: 'Organizacja',
      title: 'Tworzenie meczów i grup',
      description: 'Ustaw datę, godzinę, format od 1x1 do 11x11, płatności, prywatność oraz dostępne miejsca.'
    },
    {
      tag: 'Zaproszenia',
      title: 'Powiadomienia i social share',
      description: 'Zapraszaj przez aplikację, link, WhatsApp, Messenger, Facebook lub SMS i zbieraj potwierdzenia.'
    },
    {
      tag: 'Rankingi',
      title: 'Statystyki i rozwój poziomu',
      description: 'Gole, asysty, obrony, MVP, nieobecności oraz progres od poziomu amatora do legendy.'
    },
    {
      tag: 'Oceny',
      title: 'Ocena meczu i obiektu',
      description: 'System ocen od 0,5 do 5 gwiazdek, bez autooceny, z wyborem najlepszego zawodnika przez społeczność.'
    }
  ];
}
