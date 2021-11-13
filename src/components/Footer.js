import React from 'react';
import laikaFooter from '../assets/laikaFooter.jpg';

const Footer = () => {
    return ( 
    <div className="footerList mt-4">
        <div className="container">
            <div className="row">
            <div className="col-sm-4">
                <img className="laikaFooter" src={laikaFooter} alt=""/>
            </div>
            <div className="col-sm-2">
                <ul>
                <li className="fontWeight">ACERCA DE LAIKA</li>
                <li>Sobre Laika</li>
                <li>Servicios</li>
                <li>Trabaja con nosotros</li>
                <li>Blog</li>
                <li>Términos y condiciones</li>
                </ul>
            </div>
            <div className="col-sm-2">
                <ul>
                <li className="fontWeight">LINKS DE INTERÉS</li>
                <li>Preguntas frecuentes</li>
                <li>¿Cómo comprar en Laika?</li>
                <li>Política de Privacidad</li>
                <li>Contáctanos</li>
                <li>Politicas de Entrega</li>
                </ul>
            </div>

            <div className="col-sm-2">
                <ul>
                    <li className="fontWeight">INFORMACIÓN</li>
                    <li>Teléfono: 3009108496</li>
                    <li>servicioclientes@laika.com.co</li>
                    <li>Bogotá D.C, Colombia</li>
                </ul>
            </div>
            <div className="col-sm-2">
                <ul>
                <li className="fontWeight">SUSCRÍBETE</li>
                <li>Recibe noticias y promociones al instante</li>
                </ul>
                <div className="input-group-append">
                <button className="btn btn-outline-success" type="button">Correo electrónico</button>
                </div>
                <div className="form-check">
                <label className="form-check-label politicas">
                    <input className="form-check-input" type="checkbox"/>He leido y acepto politicas de privacidad
                </label>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
 
export default Footer;