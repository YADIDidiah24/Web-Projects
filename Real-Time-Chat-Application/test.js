import { ChatService } from '../../supabase/chat.service';
chatService: ChatService



const participants = ['participant1', 'participant2']; 

chatService.createConversation(participants)
  .then(result => {
    // Handle success
    console.log("Conversation created:", result);
  })
  .catch(error => {
    // Handle error
    console.error("Error creating conversation:", error);
  });