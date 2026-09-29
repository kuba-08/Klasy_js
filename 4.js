class SrodekTransportu
{
    constructor(nazwa)
    {
        if(this.construktor == SrodekTransportu)
        {
            throw new Error("Klasa jest abstrakcyjna");
        }
        this.nazwa = nazwa;
    }
    jedz()
    {
        throw new Error("Metoda jedz() musi zostac zaimplementowana");
    }
    
}
class Samolot extends SrodekTransportu
{
    jedz()
    {
        return `${this.nazwa} leci`;
    }
}
class Auto extends SrodekTransportu
{
    jedz()
    {
        return `${this.nazwa} jedzie`;
    }
}
class Lodz extends SrodekTransportu
{
    jedz()
    {
        return `${this.nazwa} plynie`;
    }
}

const samolot = new Samolot("Boeing 737");
const auto = new Auto("Ferrari");
const lodz = new Lodz("Motorowka");

console.log(samolot.jedz());
console.log(auto.jedz());
console.log(lodz.jedz());
