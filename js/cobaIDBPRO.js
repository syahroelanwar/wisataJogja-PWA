var myArticlesAPI = "";

fetch('https://my-json-server.typicode.com/syahroelanwar/pwaapi/wisata')
  	.then((response) => {
   		if(response.ok) {
     		return response.json();
   		} else {
     		throw new Error('Server response wasn\'t OK');
   		}
 	})
 	.then((json) => {
	   	myArticlesAPI = json;
	   	console.log(myArticlesAPI);

        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		
		if(window.indexedDB){
			var db;
			var request = indexedDB.open("articlesDB", 1);
			db = this.result

			request.onerror = function(e){
			  	console.log('onerror!');
  				console.dir(e);
			}

			request.onupgradeneeded = function(e){
				db = e.target.result;
				var objectStore = db.createObjectStore("articles", {keyPath: "id"});
				objectStore.createIndex("name", "name", {unique: false});
				objectStore.transaction.oncomplete = function(e){
					var store = db.transaction(["articles"], "readwrite").objectStore("articles");
					for( var i = 0 ; i < myArticlesAPI.length ; i++){
						store.add(myArticlesAPI[i]);
					}
				}
			}

			request.onsuccess = function(e){
				db = e.target.result;
				console.log("success");

				var objectStore = db.transaction('articles').objectStore('articles');

			   	objectStore.openCursor().onsuccess = function (event) {
			     	var cursor = event.target.result;

			     	if (cursor) {
			       		//console.log('Id: ' + cursor.key);
			       		//console.log('Name: ' + cursor.value.name);
			       		//console.log('Age: ' + cursor.value.location);
			       		//console.log('Email: ' + cursor.value.description);
			       		let dNm, dLk, dDk, dId, dFt = '';
			      		dId = cursor.key;
			      		dNm = cursor.value.name;
			      		dLk = cursor.value.location;
			      		dFt = cursor.value.foto;
			      		dDk = cursor.value.description;

				      	var nm = document.createElement("h4");
				      	var lk = document.createElement("p");
				      	var dk = document.createElement("p");
				      	var rm = document.createElement("a");
				      	var ft = document.createElement("img");

				      	nm.appendChild(document.createTextNode(dNm));
				      	lk.appendChild(document.createTextNode(dLk));
				      	dk.appendChild(document.createTextNode(dDk));
				      	rm.appendChild(document.createTextNode("Read More"));
				      	rm.setAttribute('href', "detail.html?id="+dId);
				      	ft.appendChild(document.createTextNode(dFt));
				      	ft.setAttribute('src', dFt);
				      	ft.setAttribute('style', 'max-width:100%;');

				      	var element = document.getElementById("shw");
				      	element.appendChild(nm);
				      	element.appendChild(lk);
				      	element.appendChild(dk);   
				      	element.appendChild(rm);
				      	element.appendChild(ft);

			       		cursor.continue();
			    	} else {
			      		console.log('No more data');
			    	}
			  	};
			}

		} 
   		return myArticlesAPI;
 	})
 	.catch(error => {
      console.log('Error, ', error);
    });
