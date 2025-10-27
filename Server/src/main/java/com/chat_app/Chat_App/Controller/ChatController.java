package com.chat_app.Chat_App.Controller;

import com.chat_app.Chat_App.Entity.Message;
import com.chat_app.Chat_App.Entity.Room;
import com.chat_app.Chat_App.IO.MessageRequest.MessageRequest;
import com.chat_app.Chat_App.Repository.RoomRepo;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Controller
@CrossOrigin("http://localhost:5173")
public class ChatController {

    RoomRepo roomRepo;
    ChatController(RoomRepo roomRepo)
    {
        this.roomRepo=roomRepo;
    }

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/{roomId}")//Subscribe
    public Message sendMessage(@DestinationVariable String roomId,
                               @RequestBody MessageRequest messageRequest)
    {
        Room room=roomRepo.findByRoomId(messageRequest.getRoomId());
        Message message=new Message();
        message.setContent(messageRequest.getContent());
        message.setSender(message.getSender());
        message.setTimeStamp(LocalDateTime.now());
        if (room!=null)
        {
            room.getMessages().add(message);
            roomRepo.save(room);

        }
        else
            throw new RuntimeException("Cannot find room");

        return message;
    }
}
