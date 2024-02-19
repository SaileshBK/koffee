import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendButtonText = 'Send!';

  constructor(private toastr: ToastrService) { }

  send(event: Event) {
    event.preventDefault();
    this.sendButtonText = 'Success!';
    setTimeout(() => {
      this.sendButtonText = 'Send!';
    }, 2000);
  }

}
