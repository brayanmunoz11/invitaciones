import React from 'react';
import "./Invitaciones.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function  Invitaciones (){

   

   

    return (
        <>
        <div class="blog-card spring-fever">
        
        

        <div class="utility-info">

            
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="https://www.google.com/maps/place/11%C2%B035'10.8%22S+77%C2%B016'04.6%22W/@-11.5863353,-77.2701394,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x84185586518b108d!8m2!3d-11.5863353!4d-77.2679507?hl=es" target="_blank"><h4>Ubicanos</h4></a>
                <br/>
                <a href="https://api.whatsapp.com/send?phone=51912924249&text=Feliz cumpleaños, si asistiré :)" target="_blank"><h4>Confirma tu asistencia</h4></a>

            
           
            
            
        </div>

        
       
        
        </div>
        </>
    )
}   