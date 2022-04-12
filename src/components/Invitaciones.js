import React from 'react';
import "./Invitaciones.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, } from '@fortawesome/free-solid-svg-icons';



export default function  Invitaciones (){

   

   

    return (
        <>
        <div class="blog-card spring-fever">
        <div class="title-content">
            <h3>FELIZ CUMPLEAÑOS</h3>
            <hr />
            <div class="intro"><h5 className="bg-sass"> Cristina Gamarra</h5></div>
            <hr />
            <div class="fecha   ">Sábado 20 de Abril</div>
            
    
        </div>
        

        <div class="card-info">
            <td class="first"> 
            Av antigua Pacasmayo, Cercado de Lima
            <br/>
            <br/>

            
            <FontAwesomeIcon icon={faLocationDot} />
            <a href="https://www.google.com/maps/place/Castillo+de+Chancay/@-11.5730818,-77.2695914,17z/data=!4m5!3m4!1s0x9106892ce9d61d51:0x740ed34f5b0aa2c1!8m2!3d-11.5741387!4d-77.2713388" target="_blank">Ubicanos</a>

            
            
            </td>
            <td class= "second"> Hora 21:00 ¡Te espero!</td>
            
        </div>

        

        <div class="utility-info">

            
            <a href="https://api.whatsapp.com/send?phone=51912924249&text=Feliz cumpleaños, si asistiré :)" target="_blank">Confirma tu asistencia</a>
            <i class="fa-brands fa-github-square"></i>
            
        </div>

        
       
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        </>
    )
}   