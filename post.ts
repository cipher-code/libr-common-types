export default interface Post {
    postId? : string,
    userId : string,
    username? : string,
    tags : Array<string>,
    type : string,
    assetUrl? : string,
    assetContentType? : string,
    content : string,
    timestamp : number,
    interactions : number,
    nsfw: boolean
}