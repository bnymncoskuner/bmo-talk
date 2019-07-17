import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {

  messages$;
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages$ = this.messageService.getMessages();
  }

}
