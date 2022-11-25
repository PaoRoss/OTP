import '../../../stylesheets/TakeOrder.css';

function OrderDetails(props){
    return(
        <table>
            <tr>
            <td>{props.qty}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><img src={require('../../../images/delete.png')} /></td>
            </tr>
        </table>
    )
}

export default OrderDetails;

