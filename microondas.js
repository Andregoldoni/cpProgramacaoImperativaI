console.log ("Menu")
console.log ("1 - Pipoca – 10 segundos (padrão")
console.log ("2 - Macarrão – 8 segundos (padrão)")
console.log ("3 - Carne – 15 segundos (padrão)")
console.log ("4 - Feijão – 12 segundos (padrão)")
console.log ("5 - Brigadeiro – 8 segundos (padrão)")



function microondas(opcao,tempo){


    if (opcao == 1 && tempo >= 10 & tempo < 20 ) {
        console.log ('Padrão')
    } else if (opcao == 1 && tempo >= 20 & tempo < 30 ){
        console.log ('Prato queimou')
    } else if (opcao == 1 && tempo >= 30 ){
        console.log ('Kabum')
    } else if (opcao == 1 && tempo < 10 ){
        console.log ('tempo insuficiente')
    } else if (opcao == 2 && tempo > 8 & tempo < 16 ){
         console.log ('Padrão')
    } else if (opcao == 2 && tempo >= 16 & tempo < 24 ){
        console.log ('Prato queimou')
    } else if (opcao == 2 && tempo >= 24 ){
        console.log ('Kabum')
    } else if (opcao == 2 && tempo < 8 ){
        console.log ('tempo insuficiente')
    } else if (opcao == 3 && tempo >= 15 & tempo < 30){
        console.log ('Padrão')
    } else if (opcao == 3 && tempo >= 30 & tempo < 45 ){
       console.log ('Prato queimou')
    } else if (opcao == 3 && tempo >= 45 ){
       console.log ('Kabum')
    } else if (opcao == 3 && tempo < 15 ){
       console.log ('tempo insuficiente') 
    } else if (opcao == 4 && tempo >= 12 & tempo < 24){
        console.log ('Padrão')
    } else if (opcao == 4 && tempo >= 24 & tempo < 36 ){
       console.log ('Prato queimou')
    } else if (opcao == 4 && tempo >= 36 ){
       console.log ('Kabum')
    } else if (opcao == 4 && tempo < 12 ){
       console.log ('tempo insuficiente') 
    } else if (opcao == 5 && tempo > 8 & tempo < 16){
        console.log ('Padrão')
    } else if (opcao == 5 && tempo >= 16 & tempo < 24 ){
       console.log ('Prato queimou')
    } else if (opcao == 5 && tempo >= 24 ){
       console.log ('Kabum')
    } else if (opcao == 5 && tempo < 8 ){
       console.log ('tempo insuficiente')     
    }  else  {
        console.log ('inexistente')
    }
    
    console.log('Prato pronto, bom apetite!!!')
}



console.log(microondas(5,18))
