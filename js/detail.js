var db;

const urlParams = new URLSearchParams(window.location.search);
var idS = urlParams.has('id');
if(idS == false){
  alert("Oopss sorry, You can't access this page!");
  back();
}
var idParameter = urlParams.get('id');
console.log(idParameter);

function back(){
  window.history.back();
}
function indexedDBOk() {
    return "indexedDB" in window;
}
 
document.addEventListener("DOMContentLoaded", function() {

    if(!indexedDBOk) return;
 
    var openRequest = indexedDB.open("articlesDB",1);
 
    openRequest.onsuccess = function(e) {
        console.log("running onsuccess");
        db = e.target.result;
        getData(e);

    }
 
    openRequest.onerror = function(e) {
        console.log('onerror!');
        console.dir(e);
    }
 
},false);


function getData(e) {
    var key = idParameter;
    console.log(key)
    if(key === "" || isNaN(key)) return;
 
    var transaction = db.transaction(["articles"],"readonly");
    var store = transaction.objectStore("articles");
 
    var request = store.get(Number(key));
 
    request.onsuccess = function(e) {
 
        var cursor = e.target.result;
        console.dir(cursor);
        if(cursor) {
        let dNm, dLk, dDk, dId, dFt = '';
        dId = key;
        dNm = cursor.name;
        dLk = cursor.detail_loc;
        dFt = cursor.foto;
        dDk = cursor.detail;

        var nm = document.createElement("h4");
        var lk = document.createElement("p");
        var dk = document.createElement("p");
        var rm = document.createElement("a");
        var ft = document.createElement("img");
        var bk = document.createElement("BR");
        var hk = document.createElement("HR");

        nm.appendChild(document.createTextNode(dNm));
        nm.setAttribute('style','font-weight: bold;')
        lk.appendChild(document.createTextNode("Lokasi : "+dLk));
        dk.appendChild(document.createTextNode(dDk));
        rm.appendChild(document.createTextNode("← Back"));
        rm.setAttribute('onclick', "back();");
        rm.setAttribute('class', "remo")
        ft.appendChild(document.createTextNode(dFt));
        ft.setAttribute('src', dFt);
        ft.setAttribute('style', 'max-width:100%;');
        ft.setAttribute('alt', "Foto Wisata");

        var element = document.getElementById("detail");
        element.appendChild(nm);
        element.appendChild(ft);
        element.appendChild(bk);
        element.appendChild(lk);
        element.appendChild(dk); 
        element.appendChild(rm);
        element.appendChild(hk);

        } else {
            document.querySelector("#detail").innerHTML = "<h2>No match</h2>";
        }   
    }   
}