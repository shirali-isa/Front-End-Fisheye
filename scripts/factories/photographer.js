function photographerFactory(data) {
    const { name, portrait,id,city,country,tagline,price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const a = document.createElement('a');
        a.setAttribute('href',`photographer.html?id=${id}`)

        const article = document.createElement( 'article' );
    
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('alt',name);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const localDIv =document.createElement('div');
        localDIv.textContent = city + ' , '+ country;

        const ph =document.createElement('p');
        ph.textContent = tagline ;

        const priceJour = document.createElement('p');
        priceJour.innerHTML= price + "$ / jour";
        
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localDIv);
        article.appendChild(ph);
        article.appendChild(priceJour);


        return (a);
    }
    return { name, picture, getUserCardDOM }
}