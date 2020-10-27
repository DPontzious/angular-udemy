import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: "./server.component.css"
})
export class ServerComponent {
    serviceID: number = 10;
    statusServer: boolean = true;
    nameIs: string = "Danelle";
}