function procent_in_top() {
    var old_price, new_price, sell_in_procent;
    old_price = document.getElementById('old').value;
    old_price = parseInt(old_price);
    new_price = document.getElementById('new').value;
    new_price = parseInt(new_price);
    sell_in_procent = (new_price * 100)/old_price;
    document.getElementById('out').innerHTML = Math.floor(sell_in_procent);
}


