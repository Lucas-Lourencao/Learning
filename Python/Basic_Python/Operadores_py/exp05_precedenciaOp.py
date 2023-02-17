# 5. Regras de Precedencia de Operadores:
a = 2

#5.1
print('''Quando vc tem operadores aritiméticos de mesma precedência, utiliza-se a regra da associatividade, onde as operações 
ocorrem da esquerda para direita. Veja:''')

#5.2
print('Resultado da divisão inteira de 10*4//6 =', 10*4//6) 
#reapre que primeiro haverá a multiplicação do 10 pelo 4 e depois a divisão inteira por 6.

#5.3
print('Resultado da divisão inteira de 10*(4//6)', 10*(4//6)) 
#repare que nessa operação primeiro houve a divisão inteira de 4 por 6 e depois multiplicou-se o resultado por 10.
print('====='*10)

#5.4
print(a**3)
print(a*2)
b = a**2**3
print(a**2**3)

print('''Exceção na exponenciação: Repare que na operação acima, segundo a regra de precedência de operações, a única operação que é feita dando 
prioridade da direita para a esquerda é a exponenciação. Então, no caso acima, primeiro é feito 2**3 = 8 e depois a**8. 
Por isso o resultado da expressão acima é igual ao da expressão abaixo.''')
print('====='*10)
c = a**8
print(a**8)

print(b == c)