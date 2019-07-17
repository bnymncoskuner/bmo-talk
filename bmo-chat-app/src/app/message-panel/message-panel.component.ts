import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagePanelComponent implements OnInit {

  messages$;
  message;

  constructor(private messageService: MessageService, public userService: UserService) { }

  ngOnInit() {
    this.messages$ = this.messageService.getMessages();
  }

  sendMessage() {
    this.messageService.sendMessage(this.message);
    this.message = '';
  }

}
