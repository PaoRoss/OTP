import "../../../src/stylesheets/Modal.css";
export const Modalex = ({closemodal}) => {
        function close() {
            console.log('funcionaaaaa')
          closemodal();
        }
    return (
        <section className="modal">
            <div className="modalOrder">
                <p>Do you want to send this order?</p>
                <div className='buttons-modal'>
                    <button className="yes-button">YES</button>
                    <button className="no-button" onClick={close}>NO</button>
                </div>
            </div>
        </section>
    )
}