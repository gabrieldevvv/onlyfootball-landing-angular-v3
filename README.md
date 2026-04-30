# OnlyFootball Landing Page v4

Landing page w Angularze dla platformy organizacji meczów piłkarskich.

## Start

```bash
npm install
npm start
```

## Co zawiera ta wersja

- nowy branding w headerze i footerze na podstawie dostarczonych logotypów,
- landing page w języku polskim,
- sticky header z animacją zmniejszania przy scrollu,
- smooth scroll do sekcji,
- zaokrąglony scrollbar,
- formularz zapisu na listę zainteresowanych,
- przygotowaną wysyłkę formularza na e-mail przez FormSubmit.

## Konfiguracja wysyłki e-mail

Otwórz plik:

```text
src/app/core/config/waitlist.config.ts
```

Zmień wartość:

```ts
recipientEmail: 'SEU_EMAIL_AQUI@exemplo.com'
```

na docelowy adres e-mail, np.:

```ts
recipientEmail: 'kontakt@twojadomena.pl'
```

Po pierwszym wysłaniu formularza FormSubmit wyśle wiadomość aktywacyjną na ten adres.
Musisz kliknąć link potwierdzający w e-mailu, aby aktywować odbiór formularzy.

## Build

```bash
npm run build
```
