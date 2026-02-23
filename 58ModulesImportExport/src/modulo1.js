// Export é uma palavra reservada do JavaScript que 
// serve para exportar funcionalidades, objetos, classes, etc. de um módulo, ou seja, 
// de um arquivo JavaScript. O export é usado para tornar essas funcionalidades disponíveis 
// para outros arquivos que desejam importá-las. Existem duas formas principais de exportação: 
// a exportação nomeada (named export) e a exportação padrão (default export).

export function soma(args){
    let somador = 0;

    for (let i = 0; i < args.length; i++){
        somador += args[i];
    }
    return somador;
}