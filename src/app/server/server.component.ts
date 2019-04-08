import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent {
    serverID: number = 3;
    serverStatus: string = Math.random()>0.5? 'online' : 'offline';

    getStatus(){
        return this.serverStatus;
    }

    getColor(){
        if(this.serverStatus == 'online'){
            return 'green';
        }
        return 'red';
    }
}