import './Orders.css'
const Orders = () => {
    return (
        <>
            <div className="orders-container">
                <div className="orders-titles">
                    <table>
                        <thead>
                            <tr className="table-headers">
                                <th>CId</th>
                                <th>Customer Name</th>
                                <th>Order Time</th>
                                <th>Method</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10625</td>
                                <td>Mark Luther</td>
                                <td>Jan 11, 2024 12:58 PM</td>

                                <td>Card</td>

                                <td>€1,536</td>

                                <td>Delivered</td>
                                <td>
                                    <select

                                    >
                                        <option value="">Delivered</option>
                                        <option value="view">Pending</option>
                                        <option value="delete">Processing</option>
                                        <option value="delete">Cancle</option>                                    </select>
                                </td>

                            </tr>
                            <tr>
                                <td>10625</td>
                                <td>Mark Luther</td>
                                <td>Jan 11, 2024 12:58 PM</td>

                                <td>Card</td>

                                <td>€1,536</td>

                                <td>Delivered</td>
                                <td>
                                    <select

                                    >
                                        <option value="">Delivered</option>
                                        <option value="view">Pending</option>
                                        <option value="delete">Processing</option>
                                        <option value="delete">Cancle</option>                                    </select>
                                </td>

                            </tr>
                            <tr>
                                <td>10625</td>
                                <td>Mark Luther</td>
                                <td>Jan 11, 2024 12:58 PM</td>

                                <td>Card</td>

                                <td>€1,536</td>

                                <td>Delivered</td>
                                <td>
                                    <select

                                    >
                                        <option value="">Delivered</option>
                                        <option value="view">Pending</option>
                                        <option value="delete">Processing</option>
                                        <option value="delete">Cancle</option>                                    </select>
                                </td>

                            </tr>
                            <tr>
                                <td>10625</td>
                                <td>Mark Luther</td>
                                <td>Jan 11, 2024 12:58 PM</td>

                                <td>Card</td>

                                <td>€1,536</td>

                                <td>Delivered</td>
                                <td>
                                    <select

                                    >
                                        <option value="">Delivered</option>
                                        <option value="view">Pending</option>
                                        <option value="delete">Processing</option>
                                        <option value="delete">Cancle</option>                                    </select>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Orders
