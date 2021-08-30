export const convert = (numeroTestado) => { 
    let resultado = '';
    
    if(numeroTestado %3 == 0){
        resultado += "Pling";  //Juntando os valores
    } 
    if(numeroTestado %5 == 0){
        resultado += "Plang";
    }
    if(numeroTestado %7 == 0) {
        resultado += "Plong";
    } 
    if(resultado == ''){  //Caso não seja divisível por 7, 5 e 3
        resultado += numeroTestado;
    }
    return resultado;

};