import React from 'react'
import {orderTotal,uniqueCustomers} from './helper-functions'
import StatsItem from './StatsItem'

const  StatsContainer = (props) => {
    const {customers} = props

    const ordersCount = customers.length

    return (
        <div className="row mb-3 mt-3" >
            <StatsItem count={ordersCount} text="Orders"/>
            <StatsItem count={orderTotal(customers)} text="Amount"/>
            <StatsItem count={uniqueCustomers(customers).length} text="Customers"/>
        </div>
    )
}

export default StatsContainer