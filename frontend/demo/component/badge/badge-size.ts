import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/horizontal-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('badge-size')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-horizontal-layout theme="spacing">
        <!-- tag::snippet[] -->
        <span theme="badge small">Pending</span>
        <span theme="badge success small">Confirmed</span>
        <span theme="badge error small">Denied</span>
        <span theme="badge contrast small">On hold</span>
        <!-- end::snippet[] -->
      </vaadin-horizontal-layout>
    `;
  }
}
