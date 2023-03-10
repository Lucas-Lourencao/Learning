/*
&& -> Em uma avaliação com o operador AND, basta encontrar apenas um valor FALSY e o resultado retornará, obrigatoriamente, o último valor falso.
|| -> Em uma avaliação com o operador OR, basta encontrar um único valor TRUE e o resultado retornará, obrigatoriamente, o último valor verdadeiro.

# Em JavaScript TUDO pode ser avaliado em FALSY ou TRUE:
- Valores que retornam FALSY:
    -> false, NaN, 0, '', "", ``, null, undefined;

- Valores que retornam TRUE:
    -> Todos os que não retornam false;
*/
//ex-01: short-circuit whit AND operator.:
console.log('Luiz Otávio' && 0 && 'Maria'); // output -> 0;
console.log('Luiz Otávio' && true && 'Maria'); // output -> Maria; Retorna o ultimo termo true.
console.log('Luiz Otávio' && true && 'Maria' && NaN); // output -> NaN;

//ex-02: Flow deviation check.:

//function evaluated:
function retornaOi(){
    return 'Oi';
};

//control variable:
const vaiExecutar = false;

//checking the execution:
// AND operator.:
console.log(vaiExecutar && retornaOi()); // output -> false;

// Or operator.:
console.log(vaiExecutar || retornaOi()); // output -> 'Oi';

//ex-03: short-circuit whit Or operator.:
console.log(undefined || 0 || 'Maria' || null); // output -> 'Maria';
console.log('Luiz Otávio' || true || 'Maria'); // output -> Maria; Retorna o ultimo termo true.
console.log('' || "" || `` || 0 || NaN || false || undefined || null); // output -> Null; Retorna o último termo falsy;

//ex-04: trick.:
const a = 0;
const b = null;
const c = '0';
const d = 'false';
const e = false;

console.log(a || b || c || d || e); // output -> 'false'; Perceba que '0' e 'false' são valores TRUE, pois são strings. O console, no caso, vai retornar o último valor true, por isso retorna 'false'.