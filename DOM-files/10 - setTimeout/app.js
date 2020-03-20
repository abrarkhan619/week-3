function greeting(name) {
    console.log("Hello " + name)

    setTimeout(function(){
        console.log("Today is Wednesday")
    }, 6000);

}

greeting("John");