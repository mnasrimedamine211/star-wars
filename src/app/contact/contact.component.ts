import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  senderEmail: string ="";
  description: string = "";

  @Output() closeModalEvent = new EventEmitter<boolean>();

  submitForm() {
    // Send email logic goes here
    console.log("sending")
    this.closeModal();
  }

  closeModal() {
    this.closeModalEvent.emit(false);
  }
}
