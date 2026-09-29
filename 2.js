class Osoba
{
    static przedstawSie(imie, nazwisko)
    {
        if (nazwisko) {
            return `Nazywam sie ${imie} ${nazwisko}`
        }
        return `Mam na imie ${imie}`;
    }
}
console.log(Osoba.przedstawSie("Jakub"));
console.log(Osoba.przedstawSie("Dawid","Nowak"));