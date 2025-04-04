const text = "tenyataa udah 4 bulan aja yaa mas kita bareng, banyakkk banget hal yang kita lakuin berdua, dari yg ketawa ketawa sampe sempet berantem karna masalah sepele (atau ga sepele juga sih wkwk), beberapa minggu kemarin tuh berat banget buat kita, kayak  miskom, kamu yg jadi ovt sampai over protektive, aku yg sibuk banget sampe kayaknya waktuku buat kamu tuh kurang. tapi kemarin kita berhasil ngelewatin masalah itu, dan aku bersykur bangett. aku tau sih kadang aku bikin kamu kesel karena keegosisannku. tapi kamu selalu juga buat berusaha perbaiki hubungan kita Dan aku bersyukur banget punya kamu, yang gak cuma jadi pacar, tapi juga tempat cerita, tempat pulang, tempat aku bisa jadi diri sendiri tanpa takut di-judge. Aku harap kita terus kayak gini, saling nguatin, saling support, dan gak gampang nyerah. Thank you for everything, sayang. Love you so much! ";  
let index = 0;  

function typeLetter() {  
    if (index < text.length) {  
        document.getElementById("typed-text").innerHTML += text.charAt(index);  
        index++;  
        setTimeout(typeLetter, 50);  
    }  
}  

window.onload = typeLetter;  
