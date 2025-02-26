package com.vaadin.demo.component.charts.charttypes;

import com.vaadin.demo.DemoExporter;
import com.vaadin.flow.component.charts.Chart;
import com.vaadin.flow.component.charts.model.AxisTitle;
import com.vaadin.flow.component.charts.model.ChartType;
import com.vaadin.flow.component.charts.model.Configuration;
import com.vaadin.flow.component.charts.model.HorizontalAlign;
import com.vaadin.flow.component.charts.model.LayoutDirection;
import com.vaadin.flow.component.charts.model.Legend;
import com.vaadin.flow.component.charts.model.ListSeries;
import com.vaadin.flow.component.charts.model.PlotBand;
import com.vaadin.flow.component.charts.model.PlotOptionsArea;
import com.vaadin.flow.component.charts.model.Title;
import com.vaadin.flow.component.charts.model.Tooltip;
import com.vaadin.flow.component.charts.model.VerticalAlign;
import com.vaadin.flow.component.charts.model.XAxis;
import com.vaadin.flow.component.charts.model.YAxis;
import com.vaadin.flow.component.charts.model.style.Color;
import com.vaadin.flow.component.charts.model.style.GradientColor;
import com.vaadin.flow.component.charts.model.style.SolidColor;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("chart-type-area-spline")
public class ChartTypeAreaSpline extends Div {
    public ChartTypeAreaSpline() {
        // tag::snippet[]
        Chart chart = new Chart(ChartType.AREASPLINE);
        Configuration conf = chart.getConfiguration();

        conf.setTitle(new Title("Average fruit consumption during one week"));

        Legend legend = new Legend();
        legend.setLayout(LayoutDirection.VERTICAL);
        legend.setAlign(HorizontalAlign.LEFT);
        legend.setFloating(true);
        legend.setVerticalAlign(VerticalAlign.TOP);
        legend.setX(150);
        legend.setY(100);
        conf.setLegend(legend);

        XAxis xAxis = new XAxis();
        xAxis.setCategories(new String[] { "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday", "Sunday" });
        PlotBand plotBand = new PlotBand(4.5, 6.5,
                new SolidColor(0, 0, 0, 0.05));
        plotBand.setZIndex(1);
        xAxis.setPlotBands(plotBand);
        conf.addxAxis(xAxis);

        YAxis yAxis = new YAxis();
        yAxis.setTitle(new AxisTitle("Fruit units"));
        conf.addyAxis(yAxis);

        Tooltip tooltip = new Tooltip();
        // Customize tooltip formatting
        tooltip.setShared(true);
        tooltip.setValueSuffix(" units");
        conf.setTooltip(tooltip);

        PlotOptionsArea plotOptions = new PlotOptionsArea();
        conf.setPlotOptions(plotOptions);

        ListSeries o = new ListSeries("John", 3, 4, 3, 5, 4, 10);
        // You can also add values separately
        o.addData(12);
        conf.addSeries(o);
        conf.addSeries(new ListSeries("Jane", 1, 3, 4, 3, 3, 5, 4));
        // end::snippet[]

        add(new VerticalLayout(chart));
    }

    public static class Exporter extends DemoExporter<ChartTypeAreaSpline> { // hidden-source-line
    } // hidden-source-line
}
