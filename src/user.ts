//Define User class
class User {
//Field declartions
private username : string;
private password : string;
private contact : number;
private email : string;
private address : string;

//constuctor
constructor(username : string,password : string,contact : number,email : string,address :string){
this.username= username;
this.password = password;
this.contact =contact;
this.email = email;
this.address = address;
}
//getter and setter methods
// set userName(username : string){
//     this.username = username;
// }
// get userName(){
//     return this.username;
// }
// set password(username : string){
//     this.username = username;
// }
// get password(){
//     return this.username;
// }
// set contact(username : string){
//     this.username = username;
// }
// get contact(){
//     return this.username;
// }
// set email(username : string){
//     this.username = username;
// }
// get email(){
//     return this.username;
// }
// set address(address : string){
//     this.address =this.address;
// }
// get address(){
//     return this.address;
// }

}

//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {

    //call registerUser method with the constructed User object

}
function saveData(){
    let form: any=document.querySelector("#reg-form")
    let formdata:any = new FormData(form)
    let user1 = new User(formdata.get("username"),formdata.get("password"),formdata.get("contact"),formdata.get("email"),formdata.get("address"));
    registerUser(user1)
    return false;
}

//POST data using fetch() api
function registerUser(user: User) {
    fetch("http://localhost:3000/users",{
        method:"post",
        body:JSON.stringify(user),
        headers:{
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(response => response.json()).then(json=> console.log(json))
    //Dispay welcome message after successful registration
    alert("successful registration");
    return false;
}