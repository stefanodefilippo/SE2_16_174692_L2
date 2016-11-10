var t = document.getElementById("products");
var list = [["item 1", 12], ["item 2", 4]];
var x = document.getElementById("products").rows[0].cells;
function addProduct(){
    var prod = document.getElementById("product").value;
    var quantity = parseInt(document.getElementById("quantity").value);
            for (var c = 0, m = t.rows[0].cells.length; c < m; c++) {
                if(t.rows[0].cells[c].innerHTML == prod){
                    t.rows[1].cells[c].innerHTML = quantity + parseInt(t.rows[1].cells[c].innerHTML);
                    return;
                }
            }
    var x = t.rows[0].insertCell(t.rows[0].cells.length);
    x.innerHTML = prod;
    var y = t.rows[1].insertCell(t.rows[1].cells.length);
    y.innerHTML = quantity;
};
    


        