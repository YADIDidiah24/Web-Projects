import { TestBed } from '@angular/core/testing';
import { ChatService } from './chat.service';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a message', async () => {
    const conversationId = 'test-conversation-id';
    const senderId = 'test-sender-id';
    const text = 'Hello, World!';
    const response = await service.sendMessage(conversationId, senderId, text);
    expect(response).toBeTruthy();
  });

  it('should fetch messages', async () => {
    const conversationId = 'test-conversation-id';
    const messages = await service.getMessages(conversationId);
    expect(messages).toBeTruthy();
  });


});
