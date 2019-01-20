export default interface ImagePostParams {
    tags : Array<string>,
    description : string,
    extension? : string,
    tempFilename? : string,
    nsfw? : boolean
}