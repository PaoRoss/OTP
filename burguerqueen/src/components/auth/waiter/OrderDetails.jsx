import '../../../stylesheets/OrderDetails.css';

function OrderDetails(props){
    return(
            <tbody>
                <tr>
                <td>{props.qty}</td>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td><img className='deleteIcon' src={require('../../../images/delete.png')} /></td>
                </tr>
            </tbody>
    )
}

export default OrderDetails;

