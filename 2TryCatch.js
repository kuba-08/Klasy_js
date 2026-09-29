const uzytkownik = {
    wiek: 20
};
try{
    if (!uzytkownik.name) {
        throw new Error("Wlasciwosc imie nie istnieje");
    }
    console.log(uzytkownik.name);
} catch (error){
    console.log("Blad: ", error.message);
}

const uzytkownik2 = {
    name: "Adam"
};
try{
    if (!uzytkownik2.name) {
        throw new Error("Brak wlasciwosci imie");
    }
    console.log("Walidajca pozytywna: ", uzytkownik2.name);
} catch (error){
    console.log("Blad: ", error.message);
}