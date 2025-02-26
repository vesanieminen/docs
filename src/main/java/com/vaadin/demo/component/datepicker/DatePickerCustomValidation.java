package com.vaadin.demo.component.datepicker;

import com.vaadin.demo.DemoExporter; // hidden-source-line
import com.vaadin.demo.domain.Appointment;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.datepicker.DatePicker.DatePickerI18n;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.Route;

@Route("date-picker-custom-validation")
public class DatePickerCustomValidation extends Div {

    public DatePickerCustomValidation() {
        // tag::snippet[]
        DatePicker datePicker = new DatePicker("Meeting date");
        datePicker.setHelperText("Mondays – Fridays only");
        datePicker.setI18n(new DatePickerI18n()
                .setBadInputErrorMessage("Invalid date format"));

        Binder<Appointment> binder = new Binder<>(Appointment.class);
        binder.forField(datePicker).withValidator(localDate -> {
            int dayOfWeek = localDate.getDayOfWeek().getValue();
            boolean validWeekDay = dayOfWeek >= 1 && dayOfWeek <= 5;
            return validWeekDay;
        }, "Select a weekday").bind(Appointment::getStartDate,
                Appointment::setStartDate);
        // end::snippet[]

        add(datePicker);
    }

    public static class Exporter extends // hidden-source-line
            DemoExporter<DatePickerCustomValidation> { // hidden-source-line
    } // hidden-source-line
}
