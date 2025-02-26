import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/combo-box';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('combo-box-styles')
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
      <vaadin-combo-box
        theme="align-right small helper-above-field"
        label="Label"
        helper-text="Helper text"
        .items="${['Value']}"
        value="Value"
        style="--vaadin-input-field-border-width: 1px;"
      >
      </vaadin-combo-box>
      <!-- end::snippet[] -->
    `;
  }
}
