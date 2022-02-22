/*Atividade 1: Mapas
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdminsque recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papéis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...ofpara retornar uma lista com os nomes usuários que são dos administradores.*/

function getAdmim(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('suzy', 'Admin');
usuarios.set('jose', 'user');
usuarios.set('beta', 'Admin');


console.log(getAdmim(usuarios));