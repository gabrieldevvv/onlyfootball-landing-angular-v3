import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { WAITLIST_CONFIG } from '../../core/config/waitlist.config';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './final-cta-section.component.html',
  styleUrl: './final-cta-section.component.scss'
})
export class FinalCtaSectionComponent {
  private readonly http = inject(HttpClient);

  protected email = '';
  protected readonly submitted = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = WAITLIST_CONFIG.successMessage;

  protected async submitEmail(): Promise<void> {
    const normalizedEmail = this.email.trim();

    if (!normalizedEmail || this.isSubmitting()) {
      return;
    }

    this.errorMessage.set('');
    this.isSubmitting.set(true);

    try {
      const endpoint = `${WAITLIST_CONFIG.endpointBaseUrl}/${WAITLIST_CONFIG.recipientEmail}`;

      await firstValueFrom(
        this.http.post(endpoint, {
          email: normalizedEmail,
          _subject: WAITLIST_CONFIG.subject,
          _template: 'table',
          _captcha: 'false'
        }, {
          headers: {
            Accept: 'application/json'
          }
        })
      );

      this.submitted.set(true);
      this.email = '';
    } catch {
      this.errorMessage.set('Nie udało się wysłać formularza. Sprawdź konfigurację adresu e-mail i spróbuj ponownie.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
