const Osoba = {
    imie: "Kuba",
powitannie(){
    return `Czesc mam na imie ${this.imie}`;
}
};
const Uczen = Object.create(Osoba);
Uczen.imie = "Staszek";
Uczen.oceny = [5,3,1,3];

Uczen.srednia = function()
{
    var suma = 0;
    for (let i = 0; i < this.oceny.length; i++) {
        suma += this.oceny[i];
    } 
    return suma / this.oceny.length;
}
console.log(Uczen.powitannie());

console.log(Uczen.srednia());