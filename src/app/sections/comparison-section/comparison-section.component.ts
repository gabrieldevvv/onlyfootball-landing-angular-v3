import { Component } from '@angular/core';

interface ComparisonRow {
  readonly feature: string;
  readonly player: string;
  readonly playmaker: string;
  readonly captain: string;
}

interface DecisionPoint {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-comparison-section',
  standalone: true,
  templateUrl: './comparison-section.component.html',
  styleUrl: './comparison-section.component.scss'
})
export class ComparisonSectionComponent {
  protected scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected readonly rows: readonly ComparisonRow[] = [
    {
      feature: 'Dołączanie do meczów i filtry',
      player: 'Tak',
      playmaker: 'Tak',
      captain: 'Tak'
    },
    {
      feature: 'Tworzenie meczów',
      player: 'Nie',
      playmaker: 'Pojedyncze',
      captain: 'Cykliczne'
    },
    {
      feature: 'Ranking wśród znajomych',
      player: 'Nie',
      playmaker: 'Tak',
      captain: 'Tak'
    },
    {
      feature: 'Zarządzanie uczestnikami',
      player: 'Nie',
      playmaker: 'Standard',
      captain: 'Zaawansowane'
    },
    {
      feature: 'Oceny boiska i zawodników',
      player: 'Nie',
      playmaker: 'Nie',
      captain: 'Tak'
    },
    {
      feature: 'System progresu i widoczność premium',
      player: 'Nie',
      playmaker: 'Nie',
      captain: 'Tak'
    }
  ];

  protected readonly decisionPoints: readonly DecisionPoint[] = [
    {
      title: 'Darmowy start dla graczy',
      description: 'Wejście do produktu jest proste: użytkownik może od razu wyszukiwać mecze i sprawdzać dostępne składy.'
    },
    {
      title: 'Upgrade dla organizatora',
      description: 'W momencie tworzenia własnych wydarzeń naturalnym krokiem staje się plan Playmaker lub Kapitan.'
    },
    {
      title: 'Premium dla regularnych grup',
      description: 'Cykliczne mecze, rankingi i widoczność premium zwiększają retencję i wartość społeczności.'
    }
  ];
}
