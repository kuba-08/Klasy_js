class Artysta
{
    constructor(imie)
    {
        if (this.constructor == Artysta) {
            throw new Error("Klasa jest abstrakcyjna")
        }
        this.imie = imie;
    }
    tworzDzielo()
    {
        throw new Error("Metoda tworzDzielo() musi zostac zaimplementowana");
    }
    kontempluj()
    {
        throw new Error("Metoda kontempluj() musis zostac zaimplementowana");
    }
}
class Rzezbiarz extends Artysta{
    tworzDzielo()
    {
        return `${this.imie} tworzy rzezby`;
    }
    kontempluj()
    {
        return `${this.imie} kontempluje swoja rzezbe`;
    }
}
class Malarz extends Artysta
{
tworzDzielo()
    {
        return `${this.imie} maluje obraz`;
    }
    kontempluj()
    {
        return `${this.imie} kontempluje swoj obraz`;
    }
}
class Pisarz extends Artysta
{
tworzDzielo()
    {
        return `${this.imie} pisze wiersz`;
    }
    kontempluj()
    {
        return `${this.imie} kontempluje swoj wiersz`;
    }
}

const rzezbiarz = new Rzezbiarz("Jan");
const malarz = new Malarz("Mateusz");
const pisarz = new Pisarz("Piotr");

console.log(rzezbiarz.tworzDzielo());
console.log(rzezbiarz.kontempluj());

console.log(malarz.tworzDzielo());
console.log(malarz.kontempluj());

console.log(pisarz.tworzDzielo());
console.log(pisarz.kontempluj());