//Backend part - 3 ;
//Express.js Framework :

//Introduction to Express.js
// express js ek npm package hai
// framework --> flow 
// 
 
//Mern stack
//Setting up a basic express application
//Routing
//Middlewares
//Request and response handling
//error handling

//form handling and working with forms
//handle backend process of forms and making sure the data coming from any forntend lib, fw, we wil handle it in backend

//Hum log kuch data frontend par browser par rakh skte hai and jab bhi aap kkuch bhi request backend par karoge wo fe par saved data automatically backend par chala jaayega

//initialize the project with npm
// express install
//dynamic routing 
// how to get data coming from frontend at backend route
//setting up parsers for form 
//setting up ejs for ejs pages
// setting up public static files





let a = [1,2,3,4];
console.log(a);

a.forEach((e)=>{
    console.log(e + 4)
})

let blank = a.map((e)=>{
     return e + 12;
})
console.log(blank)

let filter = a.filter((e)=>{
    return (
        e % 2==0 && e>3
    );
})
console.log(filter)

let find = a.find((val)=>{
    if(val==2){
        return val;
    }
})

console.log(find)

const obj = {   
    name : "Prakhar",
    age : 12,
    college : "Technocrats Institute of Technology"
}
Object.freeze(obj)
console.log(obj.name)
obj.age = 29;
console.log(obj.age)

//function 

//async

//  let blob = await.fetch(`https://randmouser.me/api`);
//  let res = await.blob.json();
//  console.log(res)

async function abcd() {
   let blob =  await fetch(`https://randomuser.me/api/`)
   let ans = await blob.json();
   console.log(ans.results.male)

}
abcd();
