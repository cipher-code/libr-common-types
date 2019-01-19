export default interface Post {
    userId : string,
    tags : Array<string>,
    type : string,
    assetUrl? : string,
    description : string,
    content : string,
    timestamp : number,
    interactions : number
}