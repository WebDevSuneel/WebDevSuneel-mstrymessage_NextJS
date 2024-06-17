import { Message } from "@/model/User";
export interface ApiResponse{
    success: boolean;
    message:string;
    isAccesptinMessages?:boolean;
    messages?:Array<Message>
}