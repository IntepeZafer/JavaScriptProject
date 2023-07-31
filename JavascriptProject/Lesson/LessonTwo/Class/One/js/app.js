class userOne{
    constructor(name , surname , jobs , email){
        this.name = name;
        this.surname = surname;
        this.jobs = jobs;
        this.email = email;
    };
    login(){
        console.log(`${this.name} Kullanıcısı Sisteme Giriş Yaptı`);
        return this;
    }
    logouth(){
        console.log(`${this.name} Kullanıcısı Sistemden Çıkış Yaptı`);
        return this;
    }
};
const UserOne = new userOne("Zafer" , "İntepe" , "Front-end Developer" , "intepezafer@gmail.com");
const UserTwo = new userOne("Berkecan" , "İntepe" , "Machinie Engineer" , "berkecanintepe@gmail.com");
UserOne.login().logouth();


