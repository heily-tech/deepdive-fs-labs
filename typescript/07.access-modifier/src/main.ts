class Post {
    // public id: number = 0;
    // protected title: string = "";
    // private content: string = "";

    // constructor(id: number, title: string, content: string) {
    //     this.id = id;
    //     this.title = title;
    //     this.content = content;
    // }

    constructor(
        public id: number = 0,
        protected title: string = "",
        private content: string
    ) { }

    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}, content: ${this.content}`;
    }
}

class PostSummary extends Post {
    getSummary() {
        // title은 protected이므로 하위 클래스에서 접근 가능
        return `Summary: ${this.title}`;
    }

    // 아래는 불가능: content는 private이라 하위 클래스에서도 접근 불가
    // getContent() {
    //     return this.content; // ❌ 오류 발생
    // }
}

// 테스트
const post = new Post(1, "title 1", "This is the post content.");

console.log(post.id); // ✅ 1

// console.log(post.title); // ❌ Error: Property 'title' is protected
// console.log(post.content); // ❌ Error: Property 'content' is private

console.log(post.getPost()); // ✅ postId: 1, postTitle: title 1, content:
