function Sumofn(n)
{
    let sum = 0; 
    for(let i = 0; i <= n; i ++)
    {
        sum+=i;
    }
    return sum;
}

let n = (prompt("Enter the number till you want to add"));
alert(Sumofn(n));