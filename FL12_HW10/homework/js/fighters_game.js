
class Fighter{
    constructor(Object){    
        let name = Object.name;
        let damage = Object.damage;
        let strength = Object.strength;
        let agility = Object.agility;
        let hp = Object.hp;
        const hptotal = Object.hp;
        const hundred = 100;
        let wins = 0;
        let losses = 0;
        this.getName = function(){
            return name;
        }
        this.getDamage = function(){
            return damage;
        }
        this.getStrength = function(){
            return strength;
        }
        this.getAgility = function(){
            return agility;
        }
        this.getHealth = function(){
            return hp;
        }
        this.attack = function(otherFighter){
            if (hundred-otherFighter.getStrength()-otherFighter.getAgility() < Math.random()*hundred){
                otherFighter.dealDamage(damage);
                console.log(name+' makes '+damage+' damage to '+otherFighter.getName());
            } else {
                console.log(name+' attack missed');
            }
        }
        this.dealDamage = function(healthpoints){
            if (hp > healthpoints){
                hp-=healthpoints;
            } else {
                hp=0;
            }
        }
        this.logCombatHistory = function(){
            console.log('Name: '+name+', Wins: '+wins+', Losses: '+losses);
        }
        this.heal = function(healthpoints){
            if (hp+healthpoints>hptotal){
                hp=hptotal;
            } else {
                hp+=healthpoints;
            }
            
        }
        this.addWin = function(){
            wins++;
        }
        this.addLoss = function(){
            losses++;
        }
    }
}
function battle(fighter1,fighter2){
    if (fighter1.getHealth()===0){
        console.log(fighter1.getName()+' is dead and can\'t fight');
        return;
    }
    if (fighter2.getHealth()===0){
        console.log(fighter2.getName()+' is dead and can\'t fight');
        return;
    }
    do{
        fighter1.attack(fighter2);
        if(fighter2.getHealth()>0){
            fighter2.attack(fighter1);
        }
    } while (fighter1.getHealth() && fighter2.getHealth())
    if (fighter1.getHealth()>0){
        console.log(fighter1.getName()+' has won');
    }
    if (fighter2.getHealth()>0){
        console.log(fighter2.getName()+' has won');
    }

}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); 
let tname = myFighter.getName();
console.log(tname);
let tdamage = myFighter.getDamage();
console.log(tdamage);
let tstrength = myFighter.getStrength();
console.log(tstrength); 
let tagility = myFighter.getAgility();
console.log(tagility); 
let thealth = myFighter.getHealth();
console.log(thealth); 
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20}); 
myFighter.attack(myFighter2);
myFighter2.attack(myFighter);
myFighter.logCombatHistory(); 
const fifty=50;
myFighter.heal(fifty);

battle(myFighter,myFighter2);
battle(myFighter,myFighter2);
