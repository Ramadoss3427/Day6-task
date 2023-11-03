/*question1*/
class movie{
    constructor(tittle,stdio,rating="pg"){
        this.tittle=tittle;
        this.stdio=stdio;
        this.rating=rating;
    }
    get ratingmovie(){
        return this.rating
    }
}
const movie1=new movie("casino royale","eon production","pg13",)
const movie2=new movie("casino royale","eon production")
console.log(movie1.tittle)
console.log(movie1.stdio)
console.log(movie1.rating)
console.log(movie2.rating)
console.log(movie2.ratingmovie) 
//question2
class circle{
    constructor(radious,colour){
        this.radious=radious;
        this.colour=colour;
    }
    get radiouscircle(){
        return this.radious;
    }
    set radiouscircle(radious){
        this.radious=radious;
    }
    get colourcircle(){
        return this.colour;
    }
    set colourcircle(colour){
        this.colour=colour
    }
    get tostring(){
        return `"circle[radious=${this.radious},colour=${this.colour}]"`
    }
    get areacircle(){
        return Math.PI*this.radious*this.radious;
    }
    get circumferencecircle(){
        return 2*Math.PI*this.radious;
    }
}
var obj1=new circle(1.0,"red")
console.log(obj1.radiouscircle);
obj1.radiouscircle=2.2
console.log(obj1.radiouscircle);
console.log(obj1.colourcircle);
obj1.colourcircle="blue";
console.log(obj1.colourcircle);
console.log(obj1.tostring);
console.log(obj1.areacircle);
console.log(obj1.circumferencecircle)
//qustion3
class person{
    constructor (name,age,gender,salary){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
        
    }
    
}
const person1=new person("raja",40,"male",55)
console.log(person1.name)
console.log(person1.age)
console.log(person1.gender)
console.log(person1.salary)
*/qustion4*/
class uberprice{
    constructor(kilometer,price=50){
        this.kilometer=kilometer;
        this.price=price;
    }
    get Price(){
        return this.kilometer*this.price;
    }
}
const uber1=new uberprice(5);
const uber2=new uberprice(2,50)
console.log(uber1.Price);
console.log(uber2.Price);