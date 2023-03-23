import "../../../stylesheets/OrderDetails.css";

function OrderDetails(props) {
  function decreaseProduct() {
    props.removeItem(props.item);
    console.log("decreaseProduct");
  }
  function deleteProduct() {
    props.deleteItem(props.item);
    console.log("deleteProduct");
  }
  return (
    <tbody>
      <tr>
        <td>{props.qty}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>
          <img
            className="deleteIcon"
            onClick={props.qty <= 1 ? deleteProduct : decreaseProduct}
            src={require("../../../images/delete.png")}
          />
        </td>
      </tr>
    </tbody>
  );
}

export default OrderDetails;
