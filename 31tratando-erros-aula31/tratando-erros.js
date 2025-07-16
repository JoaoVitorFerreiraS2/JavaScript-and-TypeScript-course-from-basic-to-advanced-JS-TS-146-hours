// Erros são revoltantes, mas e se pudessemos alteralos a nosso favor

/**
 * Para controlar um erro utilizamos try, assim controlamos o erro que vai aparecer para o usuário final
 */

try {
    console.log(NaoExisto) // Aqui tentamos lançar uma váriavel que não existe
} catch (error) {
    console.log('NaoExisto nao existe') // E como lá em cima ela tentou, o catch vai ver que a tentativa deu errado, e vai lançar o erro.
}

// Outro exemplo que podemos dar

function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números') // Aqui criamos o erro utilizando throw new Error | Poderia ser usado também new ReferenteError
    }

    return x + y
}

try {
    console.log(soma(1, 'dsa'))
} catch(error){
    console.log(error) // E aqui mostramos ele de forma limpa e com as informações dadas
}

// Também podemos utilizar outro adição que seria o finally

try {
    // Executa quando não tem erros
} catch (error) {
    // Executa quando tem erros
} finally {
    // Sempre vai ser executado
}

// Ótimo para utilizar quando é necessário que algo aconteça mesmo se acabar rolando um erro