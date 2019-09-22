export default interface Post {
    postId? : string,
    sourcePostId? : string,
    sourceUsername? : string,
    repostedFromUsername? : string,
    userId : string,
    username? : string,
    tags : Array<string>,
    type : string,
    assetUrl? : string,
    assetContentType? : string,
    content : string,
    comment? : string,
    timestamp : number,
    likes : number,
    interactions : number,
    repostCount : number,
    nsfw: boolean
}