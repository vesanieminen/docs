import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/grid';
import '@vaadin/text-area';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import type { Grid, GridCellFocusEvent } from '@vaadin/grid';
import { getPeople } from 'Frontend/demo/domain/DataService';
import type Person from 'Frontend/generated/com/vaadin/demo/domain/Person';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('grid-cell-focus')
export class Example extends LitElement {
  static override styles = css`
    vaadin-text-area {
      width: 100%;
    }
  `;

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @query('vaadin-grid')
  private grid!: Grid<Person>;

  @state()
  private items: Person[] = [];

  @state()
  private eventSummary = '';

  protected override async firstUpdated() {
    const { people } = await getPeople();
    this.items = people;
  }

  // tag::snippet[]
  protected override render() {
    return html`
      <vaadin-grid
        class="force-focus-outline"
        .items="${this.items}"
        @cell-focus="${(e: GridCellFocusEvent<Person>) => {
          const eventContext = this.grid.getEventContext(e);
          const section = eventContext.section ?? 'Not available';
          const row = eventContext.index ?? 'Not available';
          const column = eventContext.column?.path ?? 'Not available';
          const person = eventContext.item;
          const fullName =
            person?.firstName && person?.lastName
              ? `${person.firstName} ${person.lastName}`
              : 'Not available';

          this.eventSummary = `Section: ${section}\nRow: ${row}\nColumn: ${column}\nPerson: ${fullName}`;
        }}"
      >
        <vaadin-grid-column path="firstName"></vaadin-grid-column>
        <vaadin-grid-column path="lastName"></vaadin-grid-column>
        <vaadin-grid-column path="email"></vaadin-grid-column>
        <vaadin-grid-column path="profession"></vaadin-grid-column>
      </vaadin-grid>
      <div>
        <vaadin-text-area
          label="Cell focus event information"
          readonly
          .value="${this.eventSummary}"
        ></vaadin-text-area>
      </div>
    `;
  }

  // end::snippet[]
}
