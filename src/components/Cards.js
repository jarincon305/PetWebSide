import React from 'react'
// Components
import Card from './Card'
import Header from './Header';
import Footer from './Footer';

import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faShoppingCart, faUser, faTruckMoving, faShieldVirus, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


// Images
import laika from '../assets/laika.jpg';
import footer from '../assets/footer.jpg';
import discount from '../assets/descuento.jpg';

function Cards() {

  // States
  const [pets, setPets]= useState([]);
  const [containerPets, setContainerPets]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [countries, setCountries] = useState([]);
  const [img, setImg] = React.useState("");

  // Api Mascotas
  const peticionGet = async() => {
    await axios.get("https://api.thecatapi.com/v1/breeds?limit=12")
    .then(response=>{
      setPets(response.data);
      setContainerPets(response.data);
    }).catch(error=>{
      console.log(error);
    });
  }

    // change data filter
  const handleChangeFilter = e =>{
    setBusqueda(e.target.value);
    filter(e.target.value);
  }

  // Filtrar por id y name
  const filter = (terminoBusqueda) => {
    var resultadosBusqueda=containerPets.filter((elemento)=>{
      if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    });

    setPets(resultadosBusqueda);
  }

  // Api countries
  const countriesGet = async () => {
    await axios.get("https://restcountries.com/v3.1/subregion/america")
    .then(response => {
      setCountries(response.data);
    });
  }

  // change data
  function handleChange(event) {
    setImg(event.target.value);
  }

  // Ejecutar funcions anonimas
  useEffect(()=>{
    peticionGet();
    countriesGet();
  },[])
  

  return (
    <div>
      <div className="containerHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <span className="white left"><FontAwesomeIcon icon={faShieldVirus}/></span>
              Compras seguras online |
            </div>
            <div className="col-sm-2">
              <span className="white left"><FontAwesomeIcon icon={faHandHoldingUsd}/></span>
              Pago contra entrega |
            </div>
            <div className="col-sm-2">
              <span className="white left"><FontAwesomeIcon icon={faTruckMoving}/></span>
              entregas el mismo dia | 
            </div>
            <div className="col-sm-2">
            </div>
            <div className="col-sm-2">
              Llamanos: 
              <span className="left"><FontAwesomeIcon icon={faPhone}/> | 3009108496</span>
            </div>
            <div className="col-sm-2">
              Escribenos 
              <span className="left"><FontAwesomeIcon icon={faYoutube}/></span>
              <span className="left"><FontAwesomeIcon icon={faInstagram}/></span>
              <span className="left"><FontAwesomeIcon icon={faFacebook}/></span>
            </div>
          </div>
        </div>
      </div>
      <div className="containerInput">
        <img src={laika} alt=""/>
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por id y nombre"
          onChange={handleChangeFilter}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
        <div className="col-sm-1">
          <img src={img !== "" ? img : "https://flagcdn.com/w320/co.png"} alt="" width="40px"/>
        </div>

        <div className="col-sm-1">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}>
            {countries.map((coun, key) => (
              <option value={coun.flags.png} key={key}>
                {key === 0 ? countries[22].cioc : coun.cca3}
              </option>
            ))}
          </select>
        </div>
          <h4 className="left white"><FontAwesomeIcon icon={faUser}/></h4>
          <h4 className="white">Mi Cuenta</h4>
          <h4 className="left white" ><FontAwesomeIcon icon={faShoppingCart}/></h4>
      </div>

      <div className="container">
        <div className="discount">
          <img src={discount} alt=""/>
        </div>
      </div>

      <Header/>

      <div className="d-flex justify-content-center align-items-center h-50">
        <div className="row">
          {pets.map(user => (
            <div className="col-md-4 mt-2 hoverPets" key={user.id}>
              <Card imageSource={user.image.url} title={user.name} url={user.phone} text={user.id}/>
            </div>
          ))}
        </div>
      </div>

      <Footer/>

      {/* Footer */}
      <div className="containerFooter">
        <img src={footer} alt=""/>
      </div>
    </div>
  )
}

export default Cards
