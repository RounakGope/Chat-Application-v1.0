package com.chat_app.Chat_App.Entity;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Entity--Used in relational databases
@Document(collection = "rooms") //used in no sql databases here like mongodb
public class Room {
    @Id
    private String id;

   // @Size(min = 6 , max = 7,message = "Room Id must be 6-7 digit")
    private String roomId;
    private List<Message> messages=new ArrayList<>();

}
