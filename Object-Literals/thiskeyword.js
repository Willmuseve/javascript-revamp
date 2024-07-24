//this keyword
//gives more info about the window object

user = {
    name: "Michael Wilson",
    email: "willmuseve@gmail.com",
    number: "0798256760",
    designation:"Dev",
    login: function(){
        return `LOGIN ${this.number}`;
    }
}

console.log(user.login())