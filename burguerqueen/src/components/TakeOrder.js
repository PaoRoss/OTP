function menuPrueba() {
    return (
        <div className="menuContainer">
            <nav className="superiorNav">
                <button className="logout">Logout</button>
                <img className="logo" src={require("../images/queen.png")} alt="Logo" />
            </nav>
            <main className="menu">
            <button className="breakfast-button" type="submit" onClick={() => x()}>Breakfast</button>
            <button className="lunch&dinner-button" type="submit" onClick={() => x()}>Lunch & dinner</button>
            </main>
        </div>
    )
}
