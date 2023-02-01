//membuat variable dan dom untuk mengakses menu pada navigation bar

let article = document.querySelectorAll('article');
let navbar = document.querySelectorAll('header .navbar a');


//akses scroll kebawah dan keatas navigasi pada menu bar dengan menggunakan metode forEach perulangan
window.scroll = () => {
    article.forEach(art => {


        let top = window.scrollY;
        let offset = art.offsetTop - 150;
        let height = art.offsetHeight;
        let id = art.getAttribute('id');

        if(top >= offset && top < offset + height){
            navbar.forEach(navbar => {
                navbar.classList.remove('.navbar');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('.navbar');
            })
        }
    })
}