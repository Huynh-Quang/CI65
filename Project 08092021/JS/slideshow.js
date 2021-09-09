let listSlideshow = [];

const loadsong = async() => {
    const res = await fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0q4JqjOhE9jhhFX2f5o51mDmJBeqhMkdrg6HQG1Pw-ODtow5HJSZ674j8');
    const data = await res.json();
    listSlideshow = data.songs.top100_VN[0].songs;
    // console.log(listSlideshow);

    for (let i = 0; i <=14; i++) {
        // console.log(listSlideshow[i]);
        document.getElementById('slideshow').innerHTML = `<a><img src="${listSlideshow[i].avatar}" alt=""></a>`;
        // console.log(document.getElementById('slideshow').innerHTML);
    }  
};
loadsong();