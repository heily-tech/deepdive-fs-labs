// 1. Type Assertion
const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "Hello";


// 2.! : exclamation, bang operator
const bodyElement2 = document.querySelector('body');
bodyElement2!.innerText = "Hello";

// 3. Type guard
const bodyElement3 = document.querySelector('body');
if (bodyElement3) {
    bodyElement3.innerText = "Hello";
}

function func(arg: string | null) {
    if (arg)
        return arg.toLowerCase();
}

func('hello');
func(null);