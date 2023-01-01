//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(username, password, contact, email, address) {
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }
    return User;
}());
//Fetch form values using Object.fromentries()
var submitUser = function (formData) {
    //call registerUser method with the constructed User object
};
function saveData() {
    var form = document.querySelector("#reg-form");
    var formdata = new FormData(form);
    var user1 = new User(formdata.get("username"), formdata.get("password"), formdata.get("contact"), formdata.get("email"), formdata.get("address"));
    registerUser(user1);
    return false;
}
//POST data using fetch() api
function registerUser(user) {
    fetch("http://localhost:3000/users", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(function (response) { return response.json(); }).then(function (json) { return console.log(json); });
    //Dispay welcome message after successful registration
    alert("successful registration");
    return false;
}
