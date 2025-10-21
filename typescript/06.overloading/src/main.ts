function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}

add("hello", "world");
add(1, 1);



function saySomething(word: string | string[]): string {
    if (typeof word === "string")
        return word;
    else if (Array.isArray(word))
        return word.join(" ");

    throw new Error("unable to say something.");
}
saySomething(['hello', 'world']);  // 'hello'

/* function overloading */
function saySomething2(word: string): string;
function saySomething2(words: string[]): string;
function saySomething2(word: any): any {
    if (typeof word === "string")
        return word;
    else if (Array.isArray(word))
        return word.join(" ");

    throw new Error("unable to say something.");
}
saySomething(['hello', 'world']);  // 'hello'