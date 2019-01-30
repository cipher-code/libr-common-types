/**
 * A Libr user
 * For security reasons userId, password and apiToken may or may not be set depending on the situation
 * e.g. The only time password needs to be set is on the back end during signup. Then its removed before the User is sent back to the front end
 */
export default interface User {
    userId? : string;
    username : string;
    email : string;
    dob : number;
    displayAge : boolean;
    nsfw : boolean;
    showNsfw : boolean;
    gender : string;
    sexuality : string;
    relationshipStyle : string;
    relationshipStatus : string;
    avatarUrl? : string;
    backgroundUrl? : string;
    password? : string|null;
    apiToken? : string|null;
}