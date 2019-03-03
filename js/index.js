const a = parseFloat(prompt('Число 1'));
const b = parseFloat(prompt('Число 2'));
const c = parseFloat(prompt('Число 3'));


const result=solveQuard(a,b,c);
alert (result);

function solveQuard(a,b,c){
    const d = calcDiscr(a,b,c);
    if (d < 0){
        return ("Нема нічого,ше раз пробуй");
    } 
    if (d == 0){
        const x = -b/(2*a);
        alert("Корінь:" + x);
    }
    if(d > 0){
        const xRoot1 =(-b - Math.sqrt(d))/(2*a);
        const xRoot2 =(-b + Math.sqrt(d))/(2*a);
        return x1='+x1';x2='+x2';
        
    }
         }
         function calcDiscr(a,b,c){
    return b*b-4*a*c;
}