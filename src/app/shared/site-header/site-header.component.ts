import { Component, HostListener, signal } from '@angular/core';

interface NavItem {
  readonly label: string;
  readonly target: string;
}

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  protected readonly navItems: readonly NavItem[] = [
    { label: 'Funkcje', target: 'funkcje' },
    { label: 'Jak to działa', target: 'jak-to-dziala' },
    { label: 'Cennik', target: 'premium' },
    { label: 'Porównanie', target: 'porownanie' }
  ];

  protected readonly compact = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.compact.set(window.scrollY > 24);
  }

  protected scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
