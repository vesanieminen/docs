import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/combo-box';
import '@vaadin/horizontal-layout';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { ComboBoxSelectedItemChangedEvent } from '@vaadin/combo-box';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('date-picker-individual-input-fields')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  private years = Array.from({ length: 100 }, (_, k) => new Date().getFullYear() - 99 + k);

  // tag::snippet[]
  @state()
  selectedYear: number | undefined;

  @state()
  selectedMonth: string | undefined;

  @state()
  selectedDay: number | undefined;

  @state()
  selectableDays: number[] = [];

  private handleYearChange(e: ComboBoxSelectedItemChangedEvent<number>) {
    this.selectedYear = e.detail.value!;
    this.selectedMonth = undefined;
    this.selectedDay = undefined;
    this.selectableDays = [];
  }

  private handleMonthChange(e: ComboBoxSelectedItemChangedEvent<string>) {
    this.selectedMonth = e.detail.value!;
    this.selectedDay = undefined;

    if (!this.selectedYear || !this.selectedMonth) {
      this.selectableDays = [];
      return;
    }

    const startOfMonth = new Date(this.selectedYear, this.months.indexOf(this.selectedMonth), 1);
    const lengthOfMonth = getDaysInMonth(startOfMonth);

    this.selectableDays = Array.from({ length: lengthOfMonth }, (_, k) => k + 1);
  }

  private handleDayChange(e: ComboBoxSelectedItemChangedEvent<number>) {
    this.selectedDay = e.detail.value!;
  }

  protected override render() {
    return html`
      <vaadin-horizontal-layout theme="spacing">
        <vaadin-combo-box
          label="Year"
          style="width: 6em;"
          .items="${this.years}"
          .selectedItem="${this.selectedYear}"
          @selected-item-changed="${this.handleYearChange}"
        ></vaadin-combo-box>
        <vaadin-combo-box
          label="Month"
          style="width: 9em;"
          .items="${this.months}"
          .selectedItem="${this.selectedMonth}"
          .disabled="${!this.selectedYear}"
          @selected-item-changed="${this.handleMonthChange}"
        ></vaadin-combo-box>
        <vaadin-combo-box
          label="Day"
          style="width: 5em;"
          .items="${this.selectableDays}"
          .selectedItem="${this.selectedDay}"
          .disabled="${!this.selectedYear || !this.selectedMonth}"
          @selected-item-changed="${this.handleDayChange}"
        ></vaadin-combo-box>
      </vaadin-horizontal-layout>
    `;
  }
  // end::snippet[]
}
