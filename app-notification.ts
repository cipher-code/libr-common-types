export default interface AppNotification {
    notificationId : string,
    targetUserId : string,
    fromUserId : string,
    fromUsername : string,
    action : string,
    timestamp : number,
    postContent? : string,
    postId? : string
    // Notification text will be built on the front end based on returned Notification objects
}