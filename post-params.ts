export default interface PostParams {
    tags : Array<string>,
    content : string,
    sourcePostId?: number,
    comment?: string
    nsfw? : boolean,
}