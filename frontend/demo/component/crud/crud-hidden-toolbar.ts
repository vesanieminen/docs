import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/crud';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getPeople } from 'Frontend/demo/domain/DataService';
import type Person from 'Frontend/generated/com/vaadin/demo/domain/Person';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('crud-hidden-toolbar')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @state()
  private items: Person[] = [];

  protected override async firstUpdated() {
    const { people } = await getPeople();
    this.items = people;
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <!-- Adding the no-toolbar attribute hides the toolbar -->
      <vaadin-crud
        include="firstName, lastName"
        .items="${this.items}"
        @size-changed="${() => this.requestUpdate()}"
        no-toolbar
      ></vaadin-crud>
      <!-- end::snippet[] -->
    `;
  }
}
