function showLetter(type) {
    const letterBox = document.getElementById('letterBox');
    let content = "";

    switch (type) {
        case "happy":
            content = "haiiii sayangku yg lagi senyum senyum sendiriii, HAHAHHAHA. kamu lagi happy yaaa, aku ikut seneng kalo kamu seneng yeyyeye. aku bangga sama kamu, and I love it every time you laugh or smile like this, serius deh. i love you so muchh mas razza sayang ";
            break;
        case "sad":
            content = "saayangg, semuanya lagi ngga baik baik ajaa yaa? cupcuppp  sini peyukkk dulu. aku tau banget ga setiap hari tuh gampangg, tapi inegt ya sayaang kamu tuh ga sendirian, ada akuu disini buat kamuu. kalo kamu ngerasa sediih, its okay. youre allowed to feel it, jangan dipendem semuanyaa sendirii sayangg. didepanku you can just be you sedih, capek, nangis, semua boleh. jangan lupa istirahat, mam yang cukup, dan peluk aku kalo butuh. I’ll be here, always🤍";
            break;
        case "miss":
            content = "eyyy kamu, yg lagi kangen akuu. aku juga kangen banget tau sama kamu, paraahh. rasanya tuh yaaa pengen banget langsung peluk kamu, peluk yang lamaaaa banget, sampe rasa kangen ini hilang. pas kamu baca ini, coba deh tarik nafas pelan… terus bayangin aku lagi peluk kamu dari belakang sambil bisik “aku di sini kok sayangku, gak kemana-mana”. aku sayang kamu. dan aku kangen kamu, hari ini, detik ini, banget.🥺";
            break;
        case "fight":
            content = "kita lagi ngga baik baikk aja yaa :(, aku tau, kadang capek juga ya berantem terus, salah paham, dan sama-sama gengsi. tapi mas percaya deh aku tuh gapernh ada niatan buat NYAKITIN KAMU, ngga ada mas. aku juga manusia, yang kadang cara ngomongnya salah, kadang ke-trigger hal-hal sepele, kadang terlalu egois buat dengerin kamu bener-bener. aku kangen kita yang biasanya, yang bercanda receh, yang saling manja, yang gak kuat lama-lama musuhan 😔, aku tau hubungan kita gak sempurna, tapi aku juga tau kita sama-sama gak nyerah. aku masih di sini. aku masih milih kamu, dan aku harap, kamu juga masih milih aku. aku sayang kamu, banget. dan aku gak mau kehilangan kita cuma gara-gara salah paham kecil. love u infinity ";
            break;
    }

    letterBox.innerHTML = `<p>${content}</p>`;
}

