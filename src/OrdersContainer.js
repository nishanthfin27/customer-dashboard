import React from 'react'
import OrdersTable from './OrdersTable'
import OrdersChart from './OrdersChart'

const OrdersContainer = (props) => {
    const {customers} = props

    const customerFrequency = () => {
    const  customersData = customers
    const frequencyObj = { 1 : 0 , 2 : 0 , 3 : 0 , 4 : 0 ,'5+' : 0 }
    customersData.forEach((customer) => {
        const customerOrders = customers.filter((c) => {
            return c.Phone === customer.Phone
        })
        if(customerOrders.length >= 5) {
            frequencyObj['5+']++
        } else {
            frequencyObj[customerOrders.length]++
        }
    })
    return frequencyObj
}


    return (
        <div className="row">
            <div class="col-md-12">
                <h2>Orders Distribution</h2>                        
            </div>

            <OrdersTable data={customerFrequency()}/>
            <OrdersChart data={customerFrequency()}/>
        </div>
    )
}

export default OrdersContainer