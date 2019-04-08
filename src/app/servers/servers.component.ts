import { Component, OnInit } from '@angular/core';

@Component({
  //Temos varias formas de exibir o selector:
  //Pela tag:
  selector: 'app-servers',
  //Pela classe:
  // selector: '.app-servers',
  //Pelo atributo
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  //Aqui notamos que podemos usar uma string para declarar o template:
  // template:`<h3> meu template <h3>`,
  styleUrls: ['./servers.component.css'],
  //O mesmo para style:
  /*styles:[`
    h3 {
      color:blue;
    }
  `],*/
  
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
