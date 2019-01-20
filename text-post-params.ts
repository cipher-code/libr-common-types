export default interface TextPostParams {
    tags : Array<string>,
    description : string,
    content : string,
    nsfw? : boolean
}