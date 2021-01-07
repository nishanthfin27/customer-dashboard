import React, { useState } from 'react'
import Search from './Search'
import CustomersTable from './CustomersTable'
import {orderTotal,uniqueCustomers} from './helper-functions'

const CustomersContainer = (props) => {
    const {customers} = props
    const [term, setTerm] = useState('')

    const onlyUniqueCustomers = uniqueCustomers(customers)

    const showDetails = (customer) => {
        const customerOrders = customers.filter(c => c.Phone === customer.Phone)
        const cutomerOrderTotal = orderTotal(customerOrders)
        alert(`
            Name - ${customer.Name}
            Order Count - ${customerOrders.length}
            Order Total - ${cutomerOrderTotal}
        `)
    }

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
    }

    const filteredUniqueCustomers = () => {
        const result = onlyUniqueCustomers.filter((c) => {
            return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
        })
        return result
    }

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-md-8 ">
                    <h2>Listing Customers - ({onlyUniqueCustomers.length})</h2>
                </div>
                <div className="col-md-4 ">
                    <Search term={term} handleChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <CustomersTable customers={filteredUniqueCustomers()} showDetails={showDetails}/>
                </div>
            </div>                        
        </div>
    )
}

export default CustomersContainer