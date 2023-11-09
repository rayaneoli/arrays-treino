const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// consigo exlcuir e logo acrescentar uma nova informacao, na primeiro passa o index que quero excluir, no segundo quantos elementos
// apartir do indice eu quero excluir e por ultimo a nova informacao que quero adicionar.
nomes.splice(1, 2, "Rodrigo");

console.log(nomes)