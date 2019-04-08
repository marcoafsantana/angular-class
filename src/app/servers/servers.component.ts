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
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";

  constructor() {
    setTimeout(()=>{
      console.log('Timeout End');
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
