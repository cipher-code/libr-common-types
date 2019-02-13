import User from './user';
import Follow from './follow';
import TagFollow from './tag-follow';
import Like from './like';


export default interface LoginResponse {
    user : User,
    following : Array<Follow>,
    followingTags : Array<TagFollow>,
    likes : Array<Like>
}