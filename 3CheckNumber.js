function checkNumber(number, calllback)
{
    if (number % 2 == 0) {
        calllback("Liczba jest parzysta");
    }else{
        calllback("Liczba jest nieparzysta");
    }
}
checkNumber(14, function(result){
    console.log(result)
})
checkNumber(5, function(result){
    console.log(result)
})