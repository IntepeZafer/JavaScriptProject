class User{
    constructor(name , surname , jobs){
        this.name = name;
        this.surname = surname;
        this.jobs = jobs;
    }
    login(){
        console.log(`${this.name} : Kullanıcısı Sisteme Giriş Yaptı`);
        return this;
    }
    logouth(){
        console.log(`${this.name} : Kullanıcısı Sistemden Çıkış Yaptı`);
        return this;
    }
}

class Admin extends User{
    deleteUsers(users){
        Users.filter(user => {
            if(user.name !== users.name){
                console.log(user)
            }
        })
    }
}

const UserOne = new User("Zafer" , "İntepe" , "Front-end Developer");
const UserTwo = new User("Zeynep" , "İntepe" , "Housewife");
const UserThree = new Admin("Abdullah" , "İntepe" , "Policeman Officer");
let Users = [UserOne , UserTwo , UserThree];
UserThree.deleteUsers(UserOne)

