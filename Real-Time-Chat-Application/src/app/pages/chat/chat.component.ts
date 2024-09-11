import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '../../supabase/chat.service';
import { CommonModule } from '@angular/common';

interface User {
  id: string; 
  full_name: string;
  avatar_url: string | null;
  last_seen: Date | null;
  created_at: Date;
  updated_at: Date;
  email: string | null;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  chatForm!: FormGroup;
  conversations: any[] = [];
  messages: any[] | null = null;
  conversationId: string = '';
  userId: string = '';  
  showTextField: boolean = false; 
  showInput: boolean = false;
  selectedUsers: any[] = [];
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService,
    private fb: FormBuilder
  ) {
    this.chatForm = this.fb.group({
      chat_message: ['', Validators.required],
      email: ['']
    });
  }

  toggleInput() {
    this.showInput = !this.showInput;
  }

  async findUsersByEmail(email: string) {
    try {
      this.selectedUsers = await this.chatService.getUsersByPartialEmail(email);
      console.log('Users found:', this.selectedUsers);
    } catch (error) {
      console.error('Error finding users by email:', error);
      this.selectedUsers = [];
    }
  }

  openNewChat() {
  }

  ngOnInit() {
    this.loadMessages();
  }

  async loadMessages() {
    try {
      this.messages = await this.chatService.getMessages(this.conversationId);
      if (this.messages === null) {
        this.messages = []; 
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  }



  getUserID() {
  

    if ('session' in localStorage) {
      const sessionData = JSON.parse(localStorage.getItem('session') || '{}'); 
      var sessionId = sessionData.id; 
      
      return(sessionId);
    }
  
    
  }
  selectUser(user: User) {
    const userId = this.getUserID();
    const participants = [userId, user.id];

    this.chatService.createConversation(participants,user.full_name)
      .then(result => {
        if (result) {
          const conversationId = result.conversationId;
          console.log("Conversation ID:", conversationId); 
          alert("created " + conversationId);
          
        }
      })
      .catch(error => {
        console.error("Error creating conversation:", error);
      });
      this.chatService.addParticipants(this.conversationId,userId);
      
  }
  
  
  
  async loadConversations() {
    try {
      this.conversations = await this.chatService.getConversations(this.userId);
      console.log('Conversations:', this.conversations);
    } catch (error) {
      console.error('Error loading conversations:', error);
    }
  }
  

  async logOut() {
    this.authService.SignOut().then(() => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      alert(err.message);
    });
  }

  async onSubmit() {
    const fromValue = this.chatForm.value.chat_message;
    try {
      const response = await this.chatService.sendMessage(this.conversationId, this.userId, fromValue);
      console.log(response);
      this.chatForm.reset();
      this.loadMessages();  
    } catch (err) {
      alert(err);
    }
  }
}
