import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number = 3;
    serverStatus: string = 'online';

    getStatus(){
        return this.serverStatus;
    }
}