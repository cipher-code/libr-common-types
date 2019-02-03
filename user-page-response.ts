export default interface UserPageResponse {
    username : string,
    userId : string,
    backgroundUrl? : string,
    avatarUrl? : string,
    age? : number,
    gender? : string,
    sexuality? : string,
    relationshipStatus? : string,
    relationshipStyle? : string,
    bio? : string,
    city? : string,
    state? : string,
    country? : string,
    nsfw : boolean
}