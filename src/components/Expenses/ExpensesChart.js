import React from "react";
import Chart from "../Chart/Chart";

// Expected to get filtred year as props
const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    for (const expense of props.expenses) {
        const expMonth = expense.date.getMonth(); // Jan = 0, used as index in chartDP
        chartDataPoints[expMonth].value += expense.amount;

    }
    return <Chart dataPoints={chartDataPoints} s/>
};

export default ExpensesChart;