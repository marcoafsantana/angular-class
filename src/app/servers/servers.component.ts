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
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];
  arrayNgFor = [
    {local: 'Recife', latencia:'128ms'},
    {local: 'Garanhuns', latencia:'28ms'},
    {local: 'Arcoverde', latencia:'88ms'},
    {local: 'Rio de Janeiro', latencia:'116ms'},
    {local: 'São Paulo', latencia:'64ms'},
    {local: 'Natal', latencia:'50ms'},
  ]

  constructor() {
    setTimeout(()=>{
      console.log('Timeout End');
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created. And his name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
