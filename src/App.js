import React, { useState } from 'react'
import StatsContainer from './StatsContainer'
import CustomersCountainer from './CustomersContainer'
import OrdersContainer from './OrdersContainer'
import customersData from './customersData'



const App = (props) => {
  const [customers, setCustomers] = useState(customersData)
  
  return (
    <div className="container"> 
        <h1 className="display-4">Customers Dashboard</h1>
        <StatsContainer customers={customers}/>
        <CustomersCountainer customers={customers}/>
        <OrdersContainer customers={customers}/>
    </div>
  )
}

export default App