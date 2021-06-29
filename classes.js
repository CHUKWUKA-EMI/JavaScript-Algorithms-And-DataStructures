class Man{
    constructor(name, height){
        this.name = name
        this.height = height
    }
}

Man.prototype.getName =function(){
    console.log(this.name)
}

Man.prototype.getHeight =function(){
    console.log(this.height)
}

//class inheritance
class Me extends Man{
    constructor(sex){
       super()
       this.sex = sex
       this.height =70
       this.name="Emi"
    }

    walk(){
        console.log('walking')
    }
}

Me.prototype.shout =function(){
    console.log('haaaaaaa!!!!')
}

const myMan = new Man("Justice",60)

myMan.getName()
myMan.getHeight()

const me = new Me('Male')
console.log(me.sex)
console.log(me.name)
me.getHeight()
me.getName()
me.shout()
me.walk()