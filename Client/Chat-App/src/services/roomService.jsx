import axios from "axios"
import { httpClient } from "../config/Caxios"
export const createRoom = async(roomDetail)=>{
   const response= await httpClient.post(`room/create-room`,roomDetail);
   return response.data;

}
export const joinRoom=async(roomId)=>{
   const response=await httpClient.get(`room/${roomId}`)
   return response.data;
};