export interface ReplyContent {
    isReplyMessage: boolean,
    targetId?: number,
    repliedMessageAuthor: string,
    repliedMessage: string
}