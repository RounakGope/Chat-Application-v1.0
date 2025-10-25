package com.chat_app.Chat_App.Repository;

import com.chat_app.Chat_App.Entity.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepo extends MongoRepository<Room,String> {

    Room findByRoomId(String roomId);
}
