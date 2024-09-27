let friendList = [];

function add (){
    let friend = document.getElementById('nome-amigo');

    if (friend.value == ''){
        alert ('Insira algum nome');
    } else {
        
    if (friendList.includes(friend.value)){
        alert('Amigo com esse nome já incluído, coloque o sobrenome dele');
    } else {
        friendList.push(friend.value);
    }
    
    document.getElementById('lista-amigos').innerHTML = friendList.join(',');

    friend.value = '';
    }
}

function random(){
    shuffle(friendList);

    let raffle = document.getElementById('lista-sorteio');

    for (let i = 0; i < friendList.length; i++){

        if (i == friendList.length - 1){
            raffle.innerHTML = raffle.innerHTML + friendList[i] + ' --> ' + friendList[0] + '<br>';
        } else {
            raffle.innerHTML = raffle.innerHTML + friendList[i] + ' --> ' + friendList[i + 1] + '<br>';
        }
    }
}

function shuffle(friendList){
    
    for (let indie = friendList.length; indie; indie--){
        const aleatoryIndie = Math.floor(Math.random() * indie);
        [friendList[indie - 1], friendList[aleatoryIndie]] = [friendList[aleatoryIndie], friendList[indie - 1]];
    }
}

function restart (){
    friendList = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


