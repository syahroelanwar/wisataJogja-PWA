var db;
var myArticlesAPI = [
{"id":1,"name":"Bukit Mojo Gumelem","location":"Bantul","detail_loc":"Kanigoro, Mangunan, Dlingo, Kabupaten Bantul","description":"Bukit Mojo Gumelem telah dikembangkan sejak tahun 2016 di awal tahun. Hal ini berjalan bersama...","detail":"Bukit Mojo Gumelem telah dikembangkan sejak tahun 2016 di awal tahun. Hal ini berjalan bersama dengan meningkatnya kepopuleran dari bukit, yakni Panguk Kediwung. Namun, waktu itu bentuk gardu pandang masih dibuat hanya ala kadarnya, tanpa ada sentuhan nilai artistik. Namun, setelah adanya Jurang Tembelan yang terkenal karena adanya gardu pandang dengan bentuk kapal raksasa yang berada di tepi jurang, lokasi dari bukit ini lalu kembali diberikan penataan ulang serta diberikan gimmick yang menarik. Terdapat dua spot yang selalu jadi idola bagi pengunjung yang memang datang ke lokasi ini. Pertama, spot dengan sarang burung yang berada di atas bukit. Kedua, spot dengan artistik bunga matahari. Kedua spot ini memang sangat terkenal di jejaring sosial. Lokasi dari Bukit Mojo Gumelem berlokasi tidak jauh dari Kebun Buah, yakni Mangunan. Tempat wisata yang masih terbilang baru ini berlokasi di jalur untuk menuju ke ‘Bukit Panguk Kediwung’. Tepatnya, ada di RT 4 yang masuk ke Pedukuhan Kediwung. Tempat ini termasuk ke daerah Mangunan, Dlingo, kabupaten Bantul. Sedangkan akses untuk menuju kesini juga cukup mudah karena kondisi jalan sudah cukup bagus, sehingga bisa ditempuh menggunakan mobil atau sepeda motor. Namun, tetap harus berhati-hati karena kondisi jalannya yang cukup menanjak.","foto":"img/data/bukit_mojo_gumelem.jpeg"},
{"id":2,"name":"Watu Goyang Mangunan","location":"Bantul","detail_loc":"Jl Watu Goyang No.1, Griloyo, Mangunan, Dlingo, Kabupaten Bantul","description":"Bukan tanpa alasan, penamaan Watu Goyang ini ternyata memiliki latar belakang tersendiri. Alasannya sangatlah sederhana...","detail":"Bukan tanpa alasan, penamaan Watu Goyang ini ternyata memiliki latar belakang tersendiri. Alasannya sangatlah sederhana, lantaran dahulunya ada batu yang berada di puncak yang bisa bergoyang jika disentuh ataupun didorong. Dan batu tersebut sudah ada sejak ratusan tahun yang lalu di situ. Tapi perlu untuk diingat, jangan coba-coba untuk naik ke atas batu hanya untuk mendapatkan foto yang bagus karena sangat tidak dianjurkan bisa membahayakan nyawa. Di sana juga ada tulisannya “Jangan Naik Bahaya.” Tak perlu naik ke atas, di seklilingya saja juga sudah menyuguhkan panorama yang begitu istimewa. Perlu untuk diingat baik-baik ya. Watu Goyang ini terdapat di atas ketinggian Bukit Mangunan, banyak sekali spot selfie yang bisa untuk dibidik. Spot-spot Instagenic ini antara lain gardu pandang yang berbentuk helikopter, spot bunga, dan lain-lain sebagai. Buat kamu para pemburu spot selfie, lokasi Watu Goyang ini cocok untuk jadi rekomendasi.","foto":"img/data/watu_goyang_mangunan.jpg"},
{"id":3,"name":"Seribu Batu Songgo Langit","location":"Bantul","detail_loc":"Jalan Hutan Pinus Nganjir, Mangunan, Dlingo, Kabupaten Bantul","description":"Spot wisata unik yang satu ini menyajikan suasana yang berbeda dengan bentuk rumah kecil ala rumah Hobbit...","detail":"Spot wisata unik yang satu ini menyajikan suasana yang berbeda dengan bentuk rumah kecil ala rumah Hobbit. Untuk mendapatkan panorama alam terbaik, pengunjung harus rela berjalan mendaki sebentar ke atas bukit Songgo Langit. Jika sudah berada di Rumah Hobbit, akan sayang jika tak melanjutkan perjalanan hingga ke puncak. Dari Rumah Hobbit pengunjung cukup berjalan 500 meter lagi dengan rute jalan yang membelah hutan pinus. Kalau di Rumah Hobbit, pengunjung sudah pasti bisa berfoto dengan latar rumah mini seperti yang ada di film The Hobbit. Ukurannya kecil dan di bagian depannya terdapat patung-patung hobbit yang lucu. Berlatar belakang hutan, berfoto selfie di sini pasti akan hasilkan foto yang cantik.","foto":"img/data/seribu_batu_songgolangit.jpg"},
{"id":4,"name":"Ayunan Langit Watujaran","location":"Kulonprogo","detail_loc":"Sabrangkidul RT.10/RW.05, Coco Leal, Purwosari, Girimulyo, Kabupaten Kulonprogo","description":"Spot wisata unik ini menantang para pengunjung untuk menguji adrenalin dengan barayun di ketinggian sekitar 600 Mdpl...","detail":"Spot wisata unik ini menantang para pengunjung untuk menguji adrenalin dengan barayun di ketinggian sekitar 600 Mdpl. Tak beda jauh dengan sky wing Maribaya di Bandung yang sedang ngehits, Ayunan Langit Watu Jaran pun menawarkan sensasi bermain ayunan di awang-awang. Ayunan ini dibangun tepat di pinggir jurang. Nantinya, wisatawan akan duduk di kursi ayunan dan diayunkan di atas jurang tersebut. Kalau kamu phobia ketinggian atau punya riwayat jantung, sebaiknya tidak usah mencoba wahana ini. Soal keamanan, kamu tak usah khawatir. Ayunan ini dibangun dari  baja sehingga tahan korosi. Bahkan ayunan ini mampu menanggung beban hingga 500 kg. Lagipula, siapapun yang akan naik ayunan ini wajib memakai seat harnest sebagai pengaman. Soal pengawasan pun cukup memadai, sebab pengelola tempat ini didampingi langsung oleh tim SAR Yogyakarta.","foto":"img/data/ayunan_langit_watujaran.jpg"},
{"id":5,"name":"Tebing Breksi","location":"Sleman","detail_loc":"Sambirejo, Prambanan, Kabupaten Sleman","description":"Kehadiran tebing yang sekaligus dijadikan sebagai salah satu lokasi tempat wisata ini pasti mempunyai alasan tertentu...","detail":"Kehadiran tebing yang sekaligus dijadikan sebagai salah satu lokasi tempat wisata ini pasti mempunyai alasan tertentu yang membuat objek wisata ini disebut menjadi salah satu tempat wisata yang menarik untuk dikunjungi. Pasalnya, potensi wisata alam yang dimilikinya menawarkan banyak hal yang tidak boleh dilewatkan, diantaranya adalah pemandangan dinding tebing dengan ornamen patahan yang terlihat begitu artistik. Sebab, pada dasarnya tebing ini memang sudah terbentuk jutaan tahun yang lalu dan dijadikan sebagai tempat penambangan. Walaupun saat ini sudah tidak lagi dijadikan sebagai tempat penambangan, tapi sisa-sisa dari aktivitas penambangan tersebut mampu menghadirkan ornamen pahatan yang membuat tebing tersebut nampak seperti kue lapis. Itulah yang menjadi salah satu potensinya, sehingga tebing yang satu ini menjadi sangat menarik untuk dikunjungi. Berfoto dengan latar tebing, sepertinya menjadi salah satu hal yang wajib untuk dilakukan. Oleh karena itu, tak heran jika tebing ini menjadi salah satu tempat favorit untuk berfoto, terutama bagi para pasangan yang sedang melakukan sesi pre wedding dan momen sepesial lainnya. Hal yang paling istimewa saat berada di tebing ini adalah, dari atas tebing para wisatawan bisa melihat keseluruhan kota Jogja, bahkan aktivitas masyarakat pun dapat terlihat dari atas tebing, seperti pesawat yang lepas landas, kendaraan yang hilir mudik dan lain sebagainya.","foto":"img/data/tebing_breksi.jpeg"},
{"id":6,"name":"Pantai Watu Lumbung Gunung Kidul","location":"Gunungkidul","detail_loc":"Balong, Girisubo, Kabupaten Gunungkidul","description":"Pantai yang masih sepi, tenang, alami dan begitu mempesona dengan air lautnya yang super jernih...","detail":"Pantai yang masih sepi, tenang, alami dan begitu mempesona dengan air lautnya yang super jernih. Pantai Watu Lumbung ini di kalangan wisatawan masih tergolong baru. Dan pemerintah setempat desa Balong saat ini tengah mempromosikan Pantai ini ke khalayak ramai. Pantai watu Lumbung tidak hanya satu-satunya yang baru di kawasan desa Balong ini melainkan ada Pantai Nampu, Bukit Pengilon, dan Juga Gunung Api Purba Batur. Pemandangan Pantai Watu Lumbung sebelumnya belum pernah Anda lihat di pantai-pantai Gunungkidul lainnya karena pantai ini mempunyai daya tarik tersendiri. Pantai ini letaknya berada di kaki Gunung Api Purba Batur sehingga untuk sampai di Pantai Watu Lumbung harus menuruni bukit.","foto":"img/data/pantai_watu_lumbung.jpg"},
{"id":7,"name":"The World Landmark Merapi Park","location":"Sleman","detail_loc":"Jln. Kaliurang KM. 22, Harjobinangun, Kabupaten Sleman","description":"Merapi Park, tempat wisata yang mulai dibuka 25 juni 2017 memberikan wahana wisata baru bagi kota jogja...","detail":"Merapi Park, tempat wisata yang mulai dibuka 25 juni 2017 memberikan wahana wisata baru bagi kota jogja dengan betemakan landmark dari berbagai negara membuat pengunjung untuk serasa berkeliling dunia.disini pesona-nya kerap kali menjadi perbincangan para traveler. Disini juga ada beraneka ragam spot foto menarik antara lain miniatur Eiffel dari Paris, Big Ben, Patung Liberty, Temple of Heaven dari Tiongkok, Kincir angin dari Belanda, Box telepon khas inggris dan juga menara pisa dari italia.","foto":"img/data/the_world_landmark.jpeg"},
{"id":8,"name":"Pantai Nglambor","location":"Gunungkidul","detail_loc":"Purwodadi, Tepus, Kabupaten Gunungkidul","description":"Pantai Nglambor adalah sebuah pantai eksotis yang terletak di Kelurahan Purwodadi, Kecamatan Tepus, Gunung Kidul...","detail":"Pantai Nglambor adalah sebuah pantai eksotis yang terletak di Kelurahan Purwodadi, Kecamatan Tepus, Gunung Kidul, Daerah Istimewa Yogyakarta. Lokasinya persis di sebelah barat dari Pantai Siung dan sebelah timur dari Pantai Jogan. Jaraknya kurang lebih 74 km dari pusat kota Jogja, pantai ini menawarkan panorama pantai yang indah. Terdapat dua batu karang besar yang menyerupai kura-kura persis di depan teluknya. Air lautnya yang jernih menjadikan pengunjung bisa dengan leluasa melihat karang, rumput laut, ikan dengan berbagai warna berkejaran, dan aneka biota laut lainnya dari permukaan air. Para pengunjung pun bisa melakukan snorkeling dan berenang di pantai ini tanpa harus khawatir tergulung ombak besar karena memang lokasinya pantainya yang berada di teluk.Seringkali pengunjung berasal dari luar kota bahkan luar negeri, seperti turis dari Belanda, Perancis dan Singapura.","foto":"img/data/pantai_nglambor.jpeg"},
{"id":9,"name":"Kebun Teh Nglinggo","location":"Kulonprogo","detail_loc":"Nglinggo, Pagerharjo, Samigaluh, Kabupaten Kulonprogo","description":"Kebun Teh Nglinggo merupakan salah satu wisata kebun teh yang berada di Daerah Istimewa Yogyakarta...","detail":"Kebun Teh Nglinggo merupakan salah satu wisata kebun teh yang berada di Daerah Istimewa Yogyakarta. Pada mulanya banyak orang tidak mengetahui bahwa di perbukitan atau pegunungan Menoreh Kulon Progo terdapat kawasan perkebunan teh. Kawasan kebun teh ini tidak luas dan terpisah-pisah menjadi beberapa bagian. Kebun Teh Nglinggo ini resmi dibuka sebagai obyek wisata sejak dibentuknya Desa Wisata Nglinggo oleh masyarakat sekitar.Kebun Teh Nglinggo atau dulu dikenal dengan Tanah Misi berada di dalam wilayah dusun Nglinggo, desa Pagerharjo, kecamatan Samigaluh, kabupaten Kulon Progo, DI Yogyakarta. Kebun teh ini terletak pada ketinggian sekitar 900-1000 meter dari permukaan air laut.","foto":"img/data/kebun_teh.jpeg"},
{"id":10,"name":"Pantai Pok Tunggal","location":"Gunungkidul","detail_loc":"Ds.Tepus, Kecamatan Tepus, Kabupaten Gunungkidul","description":"Pantai pok tunggal adalah pantai dengan pasir putih yang terdapat di GunungKidul, Tempatnya di Desa Tepus, Kecamatan Tepus...","detail":"Pantai pok tunggal adalah pantai dengan pasir putih yang terdapat di GunungKidul, Tempatnya di Desa Tepus, Kecamatan Tepus, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Pantai ini terletak di sebelah timur dari pantai yang sudah cukup terkenal di Gunungkidul yaitu  Pantai Sundak. Untuk mengakses jalan ke pantainya sendiri sedikit sulit karena jaraknya 1,5 km. Namun jika sampai disana  akan terbayar dengan keindahan pasir putih yang membentang sepanjang pantai. Pada sisi timur dan barat diapit oleh perbukitan dengan tebing-tebing yang menjulang. Hal ini menambah keindahan pemandangan pok tunggal sendiri konon dikarenakan terdapat pohon duras yang Cuma ada satu dipantai ini. Pengunjung bisa bebas berenang dalam jarak tertentu dari bibir pantai karena kontur pantai yang cukup landai pada bagian tepi. Hal ini cukup aman untuk berenang karena kedalaman hanya berkisar 1-2 meter saja.","foto":"img/data/pantai_poktunggal.jpeg"}
]
;
const urlParams = new URLSearchParams(window.location.search);
var idS = urlParams.has('location');
var idParameter = urlParams.get('location');

function indexedDBOk() {
    return "indexedDB" in window;
}
 
document.addEventListener("DOMContentLoaded", function() {

    if(!indexedDBOk) return;
 
    var openRequest = indexedDB.open("articlesDB",1);
 
    openRequest.onupgradeneeded = function(e) {
        db = e.target.result;
        var objectStore = db.createObjectStore("articles", {keyPath: "id"});
        objectStore.createIndex("name", "name", {unique: false});
        objectStore.createIndex("location", "location", {unique: false});
        objectStore.transaction.oncomplete = function(e){
          var store = db.transaction(["articles"], "readwrite").objectStore("articles");
          for( var i = 0 ; i < myArticlesAPI.length ; i++){
            store.add(myArticlesAPI[i]);
          }
        }
    }
 
    openRequest.onsuccess = function(e) {
        console.log("running onsuccess");
 
        db = e.target.result;
        if(idS == false){
          getData(e);
        }else{
          getDataIndex(e);
        }
    }
 
    openRequest.onerror = function(e) {
        console.log('onerror!');
        console.dir(e);
    }
 
},false);

function getData(e) {
  db.transaction(["articles"], "readonly").objectStore("articles").openCursor().onsuccess = function(e) {
      var cursor = e.target.result;
      if (cursor) {
        //alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.location + ", Email: " + cursor.value.description);
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
        var bk = document.createElement("BR");
        var hk = document.createElement("HR");

        nm.appendChild(document.createTextNode(dNm));
        nm.setAttribute('style','font-weight: bold;')
        lk.appendChild(document.createTextNode("Kabupaten : "+dLk));
        dk.appendChild(document.createTextNode(dDk));
        rm.appendChild(document.createTextNode("Read More →"));
        rm.setAttribute('href', "detail.html?id="+dId);
        rm.setAttribute('class', "remo")
        ft.appendChild(document.createTextNode(dFt));
        ft.setAttribute('src', dFt);
        ft.setAttribute('style', 'max-width:100%;');
        ft.setAttribute('alt', "Foto Wisata");

        var element = document.getElementById("shw");
        element.appendChild(nm);
        element.appendChild(ft);
        element.appendChild(bk);
        element.appendChild(lk);
        element.appendChild(dk); 
        element.appendChild(rm);
        element.appendChild(hk);
        
        cursor.continue();

      }
  }
}

function getDataIndex(d) {
    var name = idParameter;
    var key = name.charAt(0).toUpperCase()+name.slice(1);

    var transaction = db.transaction(["articles"],"readonly");
    var objectStore = transaction.objectStore("articles");
    var myIndex = objectStore.index("location");

    myIndex.openCursor(key).onsuccess = function(d) {
 
      var cursor = d.target.result;

      if (cursor) {
        let dNm, dLk, dDk, dId, dFt = '';
        dId = cursor.value.id;
        dNm = cursor.value.name;
        dLk = cursor.value.location;
        dFt = cursor.value.foto;
        dDk = cursor.value.description;

        var nm = document.createElement("h4");
        var lk = document.createElement("p");
        var dk = document.createElement("p");
        var rm = document.createElement("a");
        var ft = document.createElement("img");
        var bk = document.createElement("BR");
        var hk = document.createElement("HR");

        nm.appendChild(document.createTextNode(dNm));
        nm.setAttribute('style','font-weight: bold;')
        lk.appendChild(document.createTextNode("Kabupaten : "+dLk));
        dk.appendChild(document.createTextNode(dDk));
        rm.appendChild(document.createTextNode("Read More →"));
        rm.setAttribute('href', "detail.html?id="+dId);
        rm.setAttribute('class', "remo")
        ft.appendChild(document.createTextNode(dFt));
        ft.setAttribute('src', dFt);
        ft.setAttribute('style', 'max-width:100%;');
        ft.setAttribute('alt', "Foto Wisata");

        var element = document.getElementById("shw");
        element.appendChild(nm);
        element.appendChild(ft);
        element.appendChild(bk);
        element.appendChild(lk);
        element.appendChild(dk); 
        element.appendChild(rm);
        element.appendChild(hk);
        
        cursor.continue();
      }

    }   
}