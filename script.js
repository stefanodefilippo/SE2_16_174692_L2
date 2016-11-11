//tabella
var t = document.getElementById("products");

//variabile che mantiene materiale attualmente presente in magazzino
var storage = 0;

calculateStorage();

//limite di materiale per il magazzino
limit = parseInt(document.getElementById("limit").innerHTML);

/**
 * @brief aggiunge il prodotto inserito nella tabella; se il prodotto è già presente somma solo la quantità.
 */
function addProduct(){
    var prod = document.getElementById("product").value;
    var quantity = parseInt(document.getElementById("quantity").value);
            for (var c = 0, m = t.rows[0].cells.length; c < m; c++) {
                if(t.rows[0].cells[c].innerHTML == prod){
                    t.rows[1].cells[c].innerHTML = quantity + parseInt(t.rows[1].cells[c].innerHTML);
                    calculateStorage();
                    return;
                }
            }
    var x = t.rows[0].insertCell(t.rows[0].cells.length);
    x.innerHTML = prod;
    var y = t.rows[1].insertCell(t.rows[1].cells.length);
    y.innerHTML = quantity;
    calculateStorage();
};

/**
 * @brief calcola quanto materiale c'è attualmente in magazzino. Mette il risultato in storage, e se è maggiore di limit avvisa.
 */
function calculateStorage(){
    storage = 0;
    for (var c = 0, m = t.rows[0].cells.length; c < m; c++){
        storage += parseInt(t.rows[1].cells[c].innerHTML);
    }
    if(storage > limit){
        alert("Limit exceed");
    }
}    

/**
 * @brief Funzione invocata per modificare il limite del magazzino.
 */
function limitStorage(){
    limit = parseInt(document.getElementById("space").value);
    document.getElementById("limit").innerHTML = limit;
    calculateStorage();
}
