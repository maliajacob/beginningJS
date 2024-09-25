function fact(n) {
    if (n === 0) return 1;
    return n * fact(n-1);
}
console.log(fact(5))

/* NOTES:
initial call: 
    fact(5)
recursive call: return?
    5 * fact(4)
    4 * fact(3)
    3 * fact(2)
    2 * fact(1)
    1 * fact(0)
base of fact(0) reached: returns 1
unwinding the stack: n * function
    1 * 1 = 1
    2 * 1 = 2
    3 * 2 = 6
    4 * 6 = 24
    5 * 24 = 120
*/
