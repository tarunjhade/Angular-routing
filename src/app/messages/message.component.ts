import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../messages/message.service';

@Component({
    template: `
        <div class="row">
            <h5 class="col-md-10 mt-3">Message Log</h5>
            <span class="col-md-2 mt-3">
                <a class="btn btn-default"
                    (click)="close()">
                    x
                </a>
            </span>
        </div>
        <div *ngFor="let message of messageService.messages; let i=index">
            <div *ngIf="i<10" class="message-row">
                {{ message }}
            </div>
        </div>
    `,
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {

    constructor(private messageService: MessageService,
        private router: Router) { }

    close(): void {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
}
