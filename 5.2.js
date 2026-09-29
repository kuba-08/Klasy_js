class Psowate{
    dajGlos()
    {
        return "jakis glos";
    }
}
class Pies extends Psowate{
    dajGlos()
    {
        return "Hau Hau!"
    }
}
class Szczeniak extends Pies
{
    dajGlos() {
        return "Szczek!";
    }
}
class Wilk extends Psowate{
    dajGlos()
    {
        return "Auuuuuuu!"
    }
}
const pies = new Pies();
const szczeniak = new Szczeniak();
const wilk = new Wilk();

console.log(pies.dajGlos());
console.log(szczeniak.dajGlos());
console.log(wilk.dajGlos())