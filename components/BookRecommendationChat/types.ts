export interface Book {
    category: string;
    title: string;
    author: string;
    forWhom: string;
    summary: string;
    imageUrl: string;
  }
  
  export interface AdditionalResource {
    type: 'podcast' | 'video' | 'article';
    title: string;
    summary: string;
  }
  
  export type ChatMessage = {
    type: 'user' | 'bot';
    content: any;
  };