let friendList = [];

function add (){
    let friend = document.getElementById('nome-amigo').value;

    alert(friend);

    friendList.push(friend);

    alert(friendList);

    document.getElementById('lista-amigos').innerHTML = friendList.join(',');
}