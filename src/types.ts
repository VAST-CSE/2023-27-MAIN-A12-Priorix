export type Category = 'Payment Issue' | 'Refund Request' | 'Account Access' | 'Technical Issue' | 'Order / Delivery' | 'Product Inquiry' | 'Billing' | 'General Inquiry'
export type Priority = 'High' | 'Medium' | 'Low'
export type Status = 'New' | 'Open' | 'In Progress' | 'Resolved'
export type Sentiment = 'Positive' | 'Neutral' | 'Frustrated'
export type Channel = 'Email' | 'Chat' | 'Web Form' | 'SMS'
export interface Ticket { id: string; subject: string; customerName: string; customerEmail: string; message: string; channel: Channel; category: Category; priority: Priority; sentiment: Sentiment; status: Status; assignedTeam: string; assignedAgent: string; createdAt: string; updatedAt: string; suggestedResponse: string; analysisExplanation: string }
