import { Component} from '@angular/core';

@Component({
    selector: 'profesor',
    template:`
    <h2>Profesor : {{profesor}}</h2>
    <h3>Alumno : {{alumno}}</h3> 

    <h3>Instituto Capacitas</h3>
    
    `  
})
export class ProfesorComponent{
 public profesor = 'Lucas Passalaqcua';
 public alumno = 'Leonardo Antío';

 public informacion = [
        'Instituto Capacitas',
        'Carrera : Desarrollo de Sistemas Informaticos'
 ];
}   