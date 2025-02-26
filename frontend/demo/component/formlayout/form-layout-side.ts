import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/form-layout';
import '@vaadin/form-layout/vaadin-form-item';
import '@vaadin/text-field';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('form-layout-side')
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
      <vaadin-form-layout style="--vaadin-form-item-label-width: 60px;">
        <!-- Wrap fields into form items, which
             displays labels on the side by default -->
        <vaadin-form-item>
          <label slot="label">Revenue</label>
          <vaadin-text-field>
            <span slot="suffix">EUR</span>
          </vaadin-text-field>
        </vaadin-form-item>
        <vaadin-form-item>
          <label slot="label">Expenses</label>
          <vaadin-text-field>
            <span slot="suffix">EUR</span>
          </vaadin-text-field>
        </vaadin-form-item>
        <vaadin-form-item>
          <label slot="label">Invoices</label>
          <vaadin-text-field>
            <span slot="suffix">EUR</span>
          </vaadin-text-field>
        </vaadin-form-item>
      </vaadin-form-layout>
      <!-- end::snippet[] -->
    `;
  }
}
