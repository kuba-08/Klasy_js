const Psowate = {
    dajGlos()
    {
        return "Jakis glos"
    }
};

const Pies = Object.create(Psowate);
Pies.dajGlos = function()
{
    return "Hau Hau!";
};

const Szczeniak = Object.create(Pies);
Szczeniak.dajGlos = function()
{
    return "Szczek!"
}

const Wilk = Object.create(Psowate);
Wilk.dajGlos = function()
{
    return "Auuuuuuu!"
}
console.log(Pies.dajGlos());
console.log(Szczeniak.dajGlos());
console.log(Wilk.dajGlos());