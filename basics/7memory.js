
//  Stack(Primitive) ==> jab bhi stack memory banti hai tab variable declare keya hai uski copy milti hai.
//  Heap(Non-primitive) ==> jo bhi object heap ke andar jata hai usko milta hai reference ,original value ka.
//                            jo bhi change karene ge orignal value me change hoga.



//primitive => it will make copy in stack
let myYoutubechannel = "saketshubham";

let anothername = myYoutubechannel;
anothername = "codewithsaket";

console.log(myYoutubechannel);
console.log(anothername);

// non-primitive => it will point the orignal in the heap memory
let userone = {
    email: "user@google.com",
    upi:  "user@ybl",
}

let usertwo = userone

usertwo.email = "saket@google.com"

console.log(userone.email);
console.log(usertwo.email);

//usertwo will change the orignal value of userone data.



