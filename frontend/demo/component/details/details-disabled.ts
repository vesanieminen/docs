import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/details';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

// tag::snippet[]
@customElement('details-disabled')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-details summary="Members (8)" disabled>
        <ul>
          <li>Blake Martin</li>
          <li>Caroline Clark</li>
          <li>Avery Torres</li>
          <li>Khloe Scott</li>
          <li>Camila Fisher</li>
          <li>Gavin Lewis</li>
          <li>Isabella Powell</li>
          <li>Zoe Wilson</li>
        </ul>
      </vaadin-details>
    `;
  }
}
// end::snippet[]
