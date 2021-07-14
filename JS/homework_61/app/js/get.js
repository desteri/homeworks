import {post} from './post.js';

export function get() {
    console.log(`${post.title}: "${post.desk}"`);   
}

module.exports = get;