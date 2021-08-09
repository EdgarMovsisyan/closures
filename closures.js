//1
function foo() {
    let a = 2;

    function bar() {
        console.log(a);
    }

    return bar;
}

let baz = foo();

baz();


//2
function func1() {
    let a = 2;

    function func2() {
        console.log(a);
    }

    return func2();
}

func1();