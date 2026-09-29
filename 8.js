class KalkulatorProsty
{
     static dodawanie(a,b)
    {
        return a + b;
    }
    static odejmowanie(a,b)
    {
        return a - b;
    }
    static dzielenie(a,b)
    {
        if (b === 0) {
            throw new Error("nie mozna dzielic przez 0");
        }
        return a / b;
    }
    static mnozenie(a,b)
    {
        return a * b;
    }
}
console.log(KalkulatorProsty.dodawanie(5,2));
console.log(KalkulatorProsty.odejmowanie(10,4));
console.log(KalkulatorProsty.dzielenie(8,2));
console.log(KalkulatorProsty.mnozenie(4,5));