import { createChart, LineSeries, BarSeries, CandlestickSeries } from "lightweight-charts";
import { DUMMY_STOCK_PRICE } from "./data/dummyStockPrice";

export function createStockChart(container) {

    const chart = createChart(container, {
        width: container.clientWidth || 500,
        height: 300,
        layout: {
            backgroundColor: '#ffffff',
            textColor: '#000000',
        }
    });

    const barSeries = chart.addSeries(CandlestickSeries, {
        upColor: 'green',
        downColor: 'red',
        borderVisible: true
    });

    barSeries.setData(DUMMY_STOCK_PRICE);

    return chart;

}
