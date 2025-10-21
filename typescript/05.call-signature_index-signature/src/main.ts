interface getLikeNumber {
    (like: number): number;
}
interface Post {
    id: number;
    title: string;
    getLikeNumber: getLikeNumber

    [key: string]: unknown;
}
const post1: Post = {
    id: 1, 
    title: 'post 1',
    getLikeNumber(like: number) {
        return like
    }
}

post1.getLikeNumber(1);

/* index signature */
post1['description'] = 'desc 1';
post1['pages'] = 300;

/* array index signature */
interface Names {
    [item: number]: string;
}
const userNames: Names = ['John', 'Kim', 'Joe']