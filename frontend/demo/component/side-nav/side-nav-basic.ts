import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/side-nav';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { patchSideNavNavigation } from 'Frontend/demo/component/side-nav/side-nav-helper'; // hidden-source-line
import { applyTheme } from 'Frontend/generated/theme';

@customElement('side-nav-basic')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  /* prettier-ignore */ protected firstUpdated() { // hidden-source-line
    patchSideNavNavigation(this.shadowRoot!.querySelector('vaadin-side-nav')!); // hidden-source-line
  } // hidden-source-line

  protected override render() {
    return html`
      <div class="side-nav-sample">
        <div>
          <!-- tag::snippet[] -->
          <vaadin-side-nav style="width:100%" id="sideNav">
            <vaadin-side-nav-item path="/dashboard">
              <vaadin-icon icon="vaadin:dashboard" slot="prefix"></vaadin-icon>
              Dashboard
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="/inbox">
              <vaadin-icon icon="vaadin:envelope" slot="prefix"></vaadin-icon>
              Inbox
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="/calendar">
              <vaadin-icon icon="vaadin:calendar" slot="prefix"></vaadin-icon>
              Calendar
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="/settings">
              <vaadin-icon icon="vaadin:cog" slot="prefix"></vaadin-icon>
              Settings
            </vaadin-side-nav-item>
            <vaadin-side-nav-item path="https://vaadin.com">
              <vaadin-icon icon="vaadin:vaadin-h" slot="prefix"></vaadin-icon>
              Vaadin website
            </vaadin-side-nav-item>
          </vaadin-side-nav>
          <!-- end::snippet[] -->
        </div>
      </div>
    `;
  }
}
