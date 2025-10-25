package com.chat_app.Chat_App.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class Message {
    private String sender;
    private String content;
    private LocalDateTime timeStamp;

    public Message (String sender,String content)
    {
        this.content=content;
        this.sender=sender;
        timeStamp=LocalDateTime.now();
    }
}
