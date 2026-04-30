import { Component } from '@angular/core';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './sections/features-section/features-section.component';
import { HowItWorksSectionComponent } from './sections/how-it-works-section/how-it-works-section.component';
import { PremiumSectionComponent } from './sections/premium-section/premium-section.component';
import { ComparisonSectionComponent } from './sections/comparison-section/comparison-section.component';
import { FinalCtaSectionComponent } from './sections/final-cta-section/final-cta-section.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    HowItWorksSectionComponent,
    PremiumSectionComponent,
    ComparisonSectionComponent,
    FinalCtaSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
