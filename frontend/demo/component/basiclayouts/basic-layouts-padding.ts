import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/button';
import '@vaadin/radio-group';
import '@vaadin/vertical-layout';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { RadioGroupValueChangedEvent } from '@vaadin/radio-group';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('basic-layouts-padding')
export class Example extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('basic-layouts-example');
  }

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  // tag::snippet[]
  @state()
  private theme = 'padding';

  protected override render() {
    return html`
      <vaadin-vertical-layout
        theme="${this.theme} spacing"
        class="height-4xl"
        style="align-items: stretch"
      >
        <vaadin-button>Button 1</vaadin-button>
        <vaadin-button>Button 2</vaadin-button>
        <vaadin-button>Button 3</vaadin-button>
      </vaadin-vertical-layout>
      <vaadin-radio-group
        label="Padding"
        .value="${this.theme}"
        @value-changed="${(event: RadioGroupValueChangedEvent) => {
          this.theme = event.detail.value;
        }}"
      >
        <vaadin-radio-button value="padding" label="Enabled"></vaadin-radio-button>
        <vaadin-radio-button value="" label="Disabled"></vaadin-radio-button>
      </vaadin-radio-group>
    `;
  }

  // end::snippet[]
}
