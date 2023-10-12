export interface ChatMessage {
    mediaUrl:      string | null;
    id:            string;
    ack:           number;
    read:          boolean;
    fromMe:        boolean;
    body:          string;
    mediaType:     string;
    isPrivate:     boolean;
    isDeleted:     boolean;
    createdAt:     string;
    updatedAt:     string;
    quotedMsgId:   string | null;
    chatId:        string;
    contactId:     null | string;
    userId:        null | string;
    chatHistoryId: null | string;
    chatbotFlowId: null | string;
    msgId:         string;
    dataJson:      string;
    participant:   string;
    remoteJid:     string;
    isEdit:        boolean;
    contact:       Contact | null;
    attachments:   unknown[];
    chatHistory:   null;
    quotedMsg:     null;
    chat:          Chat;
}

export interface Chat {
    id:                 string;
    status:             string;
    unreadMessages:     number;
    lastMessage:        string;
    isGroup:            boolean;
    origin:             string;
    clientId:           string;
    userId:             string;
    contactId:          string;
    subject:            string;
    priority:           string;
    channelId:          string;
    sectorId:           string | null;
    chatbot:            string | null;
    isTransfer:         boolean;
    protocol:           string;
    syncHistoryMessage: boolean;
    createdAt:          string;
    updatedAt:          string;
    deletedAt:          string | null;
}

export interface Contact {
    id:             string;
    name:           string;
    number:         string;
    profilePicUrl:  string;
    email:          string | null;
    isGroup:        boolean;
    isBlocked:      boolean;
    notes:          string | null;
    origin:         string;
    channelId:      string | null;
    clientId:       string;
    createdAt:      string;
    updatedAt:      string;
    deletedAt:      string | null;
    isSyncMessages: boolean;
}
