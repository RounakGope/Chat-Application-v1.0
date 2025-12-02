package com.chat_app.Chat_App.Controller;

import com.chat_app.Chat_App.Entity.Message;
import com.chat_app.Chat_App.Entity.Room;
import com.chat_app.Chat_App.Repository.RoomRepo;
import com.chat_app.Chat_App.config.AppConstants;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
@CrossOrigin(AppConstants.FRONT_END_BASE_URL)
public class RoomController {

   private RoomRepo roomRepo;
   public RoomController(RoomRepo roomRepo)
   {
       this.roomRepo=roomRepo;
   }

    @PostMapping("/create-room")
    public ResponseEntity<?> createRoom(@RequestBody Room room)
    {
        if (roomRepo.findByRoomId(room.getRoomId())==null)
        {

          Room savedRoom= roomRepo.save(room);
           return ResponseEntity.status(HttpStatus.CREATED).body(room);
        }
        else
        {
            return ResponseEntity.badRequest().body("Room Already Present");
        }

    }
    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId)
    {
        Room room=roomRepo.findByRoomId(roomId)
                ;
        if (room==null)
        {
            return ResponseEntity.badRequest().body("Room Not Found.");
        }

        return ResponseEntity.ok(room);
    }
    @GetMapping("/messages/{roomId}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String roomId
                                        )
    {
        Room room=roomRepo.findByRoomId(roomId);
        if (room==null)
        {
            return  ResponseEntity.badRequest().build();
        }
        //TODO Pagination

        List<Message> messages=room.getMessages();
        return ResponseEntity.ok().body(messages);

    }

}
