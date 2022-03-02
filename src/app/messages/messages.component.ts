import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**deve essere pubblica perche la bindo al template */
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
