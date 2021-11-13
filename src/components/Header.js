import React from 'react'

const Header = () => {
    return ( 
        // Buttons header
        <div className="containerCategory">
            <div className="input-group-append">
                <button className="btn btn-outline-success" type="button">Alimento</button>
                <button className="btn btn-outline-success" type="button">Snacks</button>
                <button className="btn btn-outline-success" type="button">Farmapet</button>
                <button className="btn btn-outline-success" type="button">Cuidado e Higiene</button>
                <button className="btn btn-outline-success" type="button">Juguetes</button>
                <button className="btn btn-outline-success" type="button">Accesorios</button>
                <button className="btn btn-outline-success" type="button">Para PetLovers</button>
            </div>
        </div>
     );
}
 
export default Header;
