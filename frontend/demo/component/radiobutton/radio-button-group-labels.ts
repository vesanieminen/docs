import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/radio-group';
import '@vaadin/vertical-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('radio-button-group-labels')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-vertical-layout>
        <!-- tag::snippet[] -->
        <vaadin-radio-group label="Job title" theme="vertical">
          <vaadin-radio-button value="analyst" label="Analyst" checked></vaadin-radio-button>
          <vaadin-radio-button value="administrator" label="Administrator"></vaadin-radio-button>
          <vaadin-radio-button value="engineer" label="Engineer"></vaadin-radio-button>
        </vaadin-radio-group>

        <vaadin-radio-group label="Department" theme="vertical">
          <vaadin-radio-button
            value="engineering"
            label="Engineering"
            checked
          ></vaadin-radio-button>
          <vaadin-radio-button value="humanResources" label="Human Resources"></vaadin-radio-button>
          <vaadin-radio-button value="marketing" label="Marketing"></vaadin-radio-button>
        </vaadin-radio-group>
        <!-- end::snippet[] -->
      </vaadin-vertical-layout>
    `;
  }
}
