import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/login/vaadin-login-form.js';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { LoginI18n } from '@vaadin/login';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('login-internationalization')
export class Example extends LitElement {
  static override styles = css`
    :host {
      background-color: var(--lumo-contrast-5pct);
      display: flex !important;
      justify-content: center;
      padding: var(--lumo-space-l);
    }
  `;

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  // tag::snippet[]
  private i18n: LoginI18n = {
    form: {
      title: 'Kirjaudu sisään',
      username: 'Käyttäjänimi',
      password: 'Salasana',
      submit: 'Kirjaudu sisään',
      forgotPassword: 'Unohtuiko salasana?',
    },
    errorMessage: {
      title: 'Väärä käyttäjätunnus tai salasana',
      message: 'Tarkista että käyttäjätunnus ja salasana ovat oikein ja yritä uudestaan.',
      username: 'Käyttäjätunnus vaaditaan',
      password: 'Salasana vaaditaan',
    },
  };

  protected override render() {
    return html`
      <!-- no-autofocus is used to prevent the example from stealing focus when browsing the documentation -->
      <vaadin-login-form .i18n="${this.i18n}" no-autofocus></vaadin-login-form>
    `;
  }
  // end::snippet[]
}
