import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/radio-group';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('radio-button-basic')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-radio-group label="Travel class" theme="vertical">
        <vaadin-radio-button value="economy" label="Economy"></vaadin-radio-button>
        <vaadin-radio-button value="business" label="Business"></vaadin-radio-button>
        <vaadin-radio-button value="firstClass" label="First Class"></vaadin-radio-button>
      </vaadin-radio-group>
      <!-- end::snippet[] -->
    `;
  }
}
