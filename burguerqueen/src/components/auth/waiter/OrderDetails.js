function OrderDetails(props){
    return(
        <table>
            <tr>
            <td>{props.qty}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <img src={require('../../../images/delete.png')} />
            </tr>
        </table>
    )
}

export default OrderDetails;

