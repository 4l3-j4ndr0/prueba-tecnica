function esPrimo(n) 
{
    if (n<=1) return false;
    for (var i = 2; i <= n-1; i++)
        console.log(n % i)
        if (n % i == 0) return false;
    return true;
}

console.log(esPrimo(20));

