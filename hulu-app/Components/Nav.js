import requests from "../utils/requests";

function Nav() {
    return (
        <Nav>
            <div>
                {Object.entries(requests).map(([key,  {title , url }]) => (
                    <h2 key={key}>{title}</h2>
                ))}
            </div>
        </Nav>
    )
}

export default Nav;

