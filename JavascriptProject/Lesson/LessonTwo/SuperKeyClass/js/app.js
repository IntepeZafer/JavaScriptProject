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
    constructor(name , surname , jobs , password){
        super(name , surname , jobs);
        this.password = password;
    }
    login(){
        if(this.name === "Abdullah" && this.password === "1234"){
            console.log("Sisteme Giriş Yapıldı");
            return this;
        }else{
            console.log("Şifre Veya Kullanıcı Adı Hatalı");
            return this;
        }
    }
}

const UserOne = new User("Zafer" , "İntepe" , "Front-end Developer");
const UserTwo = new User("Zeynep" , "İntepe" , "Housewife");
const UserThree = new Admin("Abdullah" , "İntepe" , "Policeman Officer" , "1234");
console.log(UserThree.login())
