import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/item';
import '@vaadin/list-box';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('list-box-disabled-items')
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
      <vaadin-list-box selected="0">
        <vaadin-item>In progress (2)</vaadin-item>
        <vaadin-item>Done (4)</vaadin-item>
        <vaadin-item disabled>Cancelled (0)</vaadin-item>
      </vaadin-list-box>
      <!-- end::snippet[] -->
    `;
  }
}
