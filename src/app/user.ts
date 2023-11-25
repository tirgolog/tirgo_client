export class User {
    public id: number;
    public name: string = '';
    public phone: string = '';
    public email: string;
    public avatar: string;
    public birthday: string;
    public lat: number;
    public lng: number;
    public country: string;
    public city: string;
    public address: string;
    public raiting: string;
    public geo_id: any;
    public balance: number;
    public adr: number;
    public config: any;
    constructor(user:any) {
        this.id = +user.id;
        this.name = user.name;
        this.phone = user.phone;
        this.email = user.email;
        this.avatar = user.avatar ? user.avatar : '/assets/img/user-empty.png';
        this.birthday = user.birthday;
        this.lat = +user.lat;
        this.lng = +user.lng;
        this.country = user.country;
        this.city = user.city;
        this.address = user.address;
        this.raiting = user.raiting;
        this.geo_id = +user.geo_id;
        this.balance = +user.balance;
        this.adr = +user.adr;
        this.config = user.config[0]
    }
}
