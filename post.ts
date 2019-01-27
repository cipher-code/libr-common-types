export default interface Post {
    postId? : string,
    userId : string,
    username? : string,
    avatar? : string,
    tags : Array<string>,
    type : string,
    assetUrl? : string,
    content : string,
    timestamp : number,
    interactions : number,
    nsfw: boolean
}