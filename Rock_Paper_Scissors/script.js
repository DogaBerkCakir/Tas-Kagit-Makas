const gameContainer = document.querySelector(".container"),
kullanıci = document.querySelector(".kullanici_sonuc img"),
bilgisayar = document.querySelector(".bilgisayar_sonuc img"),
sonuc = document.querySelector(".sonuc"),
opsiyonlar = document.querySelectorAll(".opsiyonlar_foto");

opsiyonlar.forEach((image,index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active")

        kullanıci.src = bilgisayar.src = "images/rock.png";
        sonuc.textContent = "Taş Kağıt Makas..."


        opsiyonlar.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");
        });


        gameContainer.classList.add("start");
        
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            
            let fotoYolu = e.target.querySelector("img").src
            kullanıci.src = fotoYolu

            let randomNumber = Math.floor(Math.random()*3);
            let bilgisayarFotoları = ["images/rock.png","images/paper.png","images/scissors.png"]
            bilgisayar.src = bilgisayarFotoları[randomNumber]

            let kullanıciDeger = ["T","K","M"][index]
            let bilgisayarDeger = ["T","K","M"][randomNumber]

            let oyunsonucu = {
                TT:"Berabere !",
                TK:"Bilgisayar",
                TM:"Oyuncu",
                KT:"Oyuncu",
                KK:"Berabere !",
                KM:"Bilgisayar",
                MT:"Bilgisayar",
                MK:"Oyuncu",
                MM:"Berabere !"
            }

            let cikisDegeri = oyunsonucu[kullanıciDeger + bilgisayarDeger];
            sonuc.textContent = kullanıciDeger === bilgisayarDeger ? "Berabere !" : `${cikisDegeri} Kazandı !`

        },1500);
    });
});

