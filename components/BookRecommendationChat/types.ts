export interface Book {
    category: string;
    title: string;
    author: string;
    forWhom: string;
    summary: string;
    imageUrl: string;
    rating: number
  }
  
  export interface AdditionalResource {
    type: 'podcast' | 'video' | 'article';
    description: string;
    headline: string;
  }
  
  export type ChatMessage = {
    type: 'user' | 'bot';
    content: any;
  };