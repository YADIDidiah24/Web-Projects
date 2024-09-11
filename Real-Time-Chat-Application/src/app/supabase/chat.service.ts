import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private supabase!: SupabaseClient;

  constructor() { 
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async sendMessage(conversationId: string, senderId: string, text: string) {
    try {
      const { data, error } = await this.supabase
        .from('messages')
        .insert({ conversation_id: conversationId, sender_id: senderId, text });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  async getMessages(conversationId: string) {
    try {
      const { data, error } = await this.supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  async addParticipants(conversationId: string, userId: string) {
    try {
      const { data, error } = await this.supabase
        .from('participants')
        .insert([{ conversation_id: conversationId, user_id: userId }]);
  
      if (error) {
        console.error('Error inserting participant:', error.message);
        throw new Error(error.message);
      }
  
      console.log('Participant added:', data);
      return data;
    } catch (error) {
      console.error('Error in addParticipants:', error);
      throw error;
    }
  }
  
  
  async getConversations(userId: string): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('conversations')
        .select('*')
        .eq('user1', userId)
        
        .order('created_at', { ascending: false });
  
      if (error) {
        throw new Error(error.message);
      }
  
      return data || [];
    } catch (error) {
      console.error('Error fetching conversations:', error);
      return [];
    }
  }
  

  async createConversation(participants: string[], name: string) {
    try {
      // Check if conversation already exists with the same participants
      const { data: existingConversation, error: existingError } = await this.supabase
        .from('conversations')
        .select('*')
        .eq('user1', participants[0])
        .eq('user2', participants[1])
        .single();
  
      if (existingError) {
        throw new Error(`Error checking existing conversation: ${existingError.message}`);
      }
  
      if (existingConversation) {
        alert(`Conversation already exists with participants ${participants[0]} and ${participants[1]}`);
        console.log(`Conversation already exists with participants ${participants[0]} and ${participants[1]}`);
        return { conversationId: existingConversation.id };
      }
  
      // Start a Supabase transaction to create a new conversation
      const { data: conversation, error: convError } = await this.supabase
        .from('conversations')
        .insert({ name: name, user1: participants[0], user2: participants[1] })
        .single<{ id: string }>();
  
      if (convError) {
        throw new Error(`Error inserting conversation: ${convError.message}`);
      }
  
      if (!conversation) {
        throw new Error("Conversation object is null");
      }
  
      const conversationId = conversation.id;
  
      return { conversationId };
    } catch (error) {
      console.error("Error in createConversation method:", error);
      return null;
    }
  }
  

  
  
  
  
  

  async getUserByEmail(email: string) {
    try {
      const { data, error } = await this.supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      return null;
    }
  }

  async getUsersByPartialEmail(email: string) {
    try {
      const { data, error } = await this.supabase
        .from('users')
        .select('*')
        .ilike('email', `${email}%`);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error('Error fetching users by partial email:', error);
      return [];
    }
  }
}
