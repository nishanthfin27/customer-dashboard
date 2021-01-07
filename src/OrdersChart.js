import React from 'react'
import { Chart } from 'react-google-charts'

const OrdersChart = (props) => {
    const {data} = props

    const chartData = [
            ['No. of Orders', 'Customers Count']
        ]

        for(const key in data) {
            chartData.push([key, data[key]])
        }

    return (
        <div className="col-md-6">
            <Chart 
                width={'650px'} 
                height={'350px'} 
                chartType="PieChart" 
                loader={<div>Loading Charts</div>} 
                data={chartData}
                options={{
                    title: 'Orders Distribution'
                }}
             />
        </div>
    )
}

export default OrdersChart