let friendList = [];

function add (){
    let friend = document.getElementById('nome-amigo');

    friendList.push(friend.value);
    
    document.getElementById('lista-amigos').innerHTML = friendList.join(',');

    friend.value = '';
}
