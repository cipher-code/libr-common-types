import PostParams from './post-params';

/**
 * Params for Reposting a post
 * When reposts are liked or reposted, "interactions" and/or "likes" are incremented on both the source post and repost?
 */
export default interface RepostParams extends PostParams {
    username : string,
    sourcePostId: string,
    sourceUserId : string,
    sourceUsername : string,
    comment : string,
    tags : Array<string>,
    type : string,
    assetUrl? : string,
    assetContentType? : string,
    content : string,
    nsfw: boolean
}