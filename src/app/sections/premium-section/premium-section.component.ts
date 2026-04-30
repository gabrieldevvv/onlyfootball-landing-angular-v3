import { Component } from '@angular/core';

interface PlanFeature {
  readonly text: string;
  readonly inactive?: boolean;
}

interface PlanCard {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly badge?: string;
  readonly description: string;
  readonly features: readonly PlanFeature[];
  readonly highlighted?: boolean;
  readonly cta: string;
}

interface PremiumBenefit {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-premium-section',
  standalone: true,
  templateUrl: './premium-section.component.html',
  styleUrl: './premium-section.component.scss'
})
export class PremiumSectionComponent {
  protected scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected readonly plans: readonly PlanCard[] = [
    {
      name: 'Gracz',
      price: '€0',
      period: '/ zawsze',
      description: 'Dla osób, które chcą szybko znaleźć mecz.',
      features: [
        { text: 'Dołączanie do dostępnych meczów' },
        { text: 'Podstawowe filtry wyszukiwania' },
        { text: 'Przypomnienia o spotkaniach' },
        { text: 'Tworzenie własnych meczów', inactive: true }
      ],
      cta: 'Zacznij grać'
    },
    {
      name: 'Playmaker',
      price: '€9',
      period: '/ miesiąc',
      badge: 'Najpopularniejszy',
      description: 'Dla organizatora, który prowadzi pojedyncze wydarzenia i zarządza składem.',
      features: [
        { text: 'Tworzenie pojedynczych meczów' },
        { text: 'Zarządzanie miejscami i uczestnikami' },
        { text: 'Zaawansowany system zaproszeń' },
        { text: 'Ranking wśród znajomych' },
        { text: 'Pełna historia meczów' }
      ],
      highlighted: true,
      cta: 'Wybierz Playmaker'
    },
    {
      name: 'Kapitan',
      price: '€24',
      period: '/ miesiąc',
      description: 'Dla grup, które chcą grać regularnie i rozwijać społeczność premium.',
      features: [
        { text: 'Wszystko z planu Playmaker' },
        { text: 'Cykliczne mecze miesięczne' },
        { text: 'Ocena zawodników i boiska' },
        { text: 'System poziomów i progresu' },
        { text: 'Priorytetowa widoczność meczów' }
      ],
      cta: 'Wybierz Kapitana'
    }
  ];

  protected readonly benefits: readonly PremiumBenefit[] = [
    {
      title: 'Lepsza ekspozycja meczów',
      description: 'Wydarzenia premium są bardziej widoczne dla graczy szukających wolnych miejsc.'
    },
    {
      title: 'Mocniejsze narzędzia organizatora',
      description: 'Zaproszenia, potwierdzenia, płatności i prywatność grup w jednym panelu.'
    },
    {
      title: 'Społeczność, która wraca',
      description: 'Statystyki, poziomy i oceny budują rytm cotygodniowych rozgrywek.'
    }
  ];
}
