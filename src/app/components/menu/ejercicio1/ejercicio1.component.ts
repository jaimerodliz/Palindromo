import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  form: FormGroup;
  palindromos: Number[];
  cadena_pali:String;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      lim_inferior: ['',[Validators.required]],
      lim_superior: ['',[Validators.required]]
    })

    this.palindromos = [];
    this.cadena_pali="";
  }

  ngOnInit(): void {
  }

  cacular_palindromo(){
    let lim_inferior=this.form.value.lim_inferior;
    let lim_superior=this.form.value.lim_superior;

    let array_numPrimos = [];
    let array_Palindromos = [];

    //guarda los numeros primos
    array_numPrimos = this.get_numPrimos(lim_inferior,lim_superior);

    array_Palindromos = this.get_Palindromos(array_numPrimos);

    this.palindromos= array_Palindromos;

    this.cadena_pali=this.palindromos.join(', ');
    console.log(this.palindromos);
  }


  //obtiene los numeros primos dentro del rango propuesto
  get_numPrimos(lim_inferior : number, lim_superior : number){
    var array_primos=[];
    //recorre los limites para obtener los numeros primos
    for(var num=lim_inferior; num < lim_superior; num++ ){
      var vali=1;
      //calcula si es numero primo o no
      for(var y=2;y < num; y++) {
        if (num % y == 0) {//no es un numero primo
          vali=0;
          break;
        }
      }

      if(vali==1 && num != 1){//si es numero primo se añade al arreglo
        array_primos.push(num);
      }
    }

    return array_primos;//retorna los numeros primos obtenidos
  }

  //obtiene los numeros palindromos
  get_Palindromos(array_numPrimos: Number[]){
    let array_pali=[];
    for(var i=0;i<array_numPrimos.length;i++ ){
      let palindromo=Number(array_numPrimos[i].toString().split("").reverse().join("")); //voltear numero

      if(array_numPrimos[i] == palindromo){
        array_pali.push(array_numPrimos[i]);//guardar numero palindromo
      }
      //console.log(array_numPrimos[i].toString().split("").reverse().join(""));
    }
    return array_pali;
  }
}
