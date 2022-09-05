function matrizNomes(nome) {
    
    let listaNomes = [];

    for (let i = 0; i < 7; i++) {
        
        let nome = prompt ("Digite os nomes: ");
        listaNomes.push(nome);      
    }
    document.writeln("Os nomes inseridos foram: " + listaNomes.reverse());
}
matrizNomes();