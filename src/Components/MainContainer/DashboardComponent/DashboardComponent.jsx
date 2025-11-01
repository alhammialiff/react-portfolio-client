import './DashboardComponent.scss';
import { useRef, useEffect } from 'react';
import { createStockChart } from '../../../utils/charts/stockChart';

function DashboardComponent() {

    // const chartRef = useRef(null);
    const chartContainerRef = useRef(null);
    const chartContainerRef2 = useRef(null);
    const chartContainerRef3 = useRef(null);

    useEffect(() => {

        const chart = createStockChart(chartContainerRef.current);
        const chart2 = createStockChart(chartContainerRef2.current);
        const chart3 = createStockChart(chartContainerRef3.current);

        // Resize charts on window resize
        // const handleResize = () => {
        //     chart.resize(chartContainerRef.current.clientWidth, 400);
        //     chart2.resize(chartContainerRef2.current.clientWidth, 400);
        //     chart3.resize(chartContainerRef3.current.clientWidth, 400);
        // };

        // window.addEventListener('resize', handleResize);

        return () => {
            chart.remove();
            chart2.remove();
            chart3.remove();
        }

    }, []);

    return (
        <div className="dashboard-chart-container">
            <div className="grid-chart" ref={chartContainerRef} />
            <div className="grid-chart" ref={chartContainerRef2} />
            <div className="grid-chart" ref={chartContainerRef3} />
        </div>
    );

}

export default DashboardComponent;