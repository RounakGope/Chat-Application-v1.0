package com.chat_app.Chat_App.IO.MessageRequest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MessageRequest {
    String roomId;
    String sender;
    String content;

}
