/**
 * A Libr user
 * For security reasons userId, password and apiToken may or may not be set depending on the situation
 * e.g. The only time password needs to be set is on the back end during signup. Then its removed before the User is sent back to the front end
 */
export default interface UserProfileUpdate {
    userId : string;
    gender? : string;
    sexuality? : string;
    relationshipStatus? : string;
    relationshipStyle? : string;
    displayAge : boolean;
    bio? : string,
    city? : string,
    state? : string,
    country? : string
}