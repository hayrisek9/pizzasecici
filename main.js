
var liste,secenek;
var i;


document.addEventListener("change",pizzaHesapla);


function toogle()
{
    liste=document.getElementsByName("grupIndirim");
    for(i=0;i<liste.length;i++)
    {
        if(liste[i].checked)
        {
            if(liste[i].value=="Aktif")
            {
                document.getElementById("txtIndirimKodu").disabled=false;
            }
            else if(liste[i].value=="Pasif")
            {
                
                document.getElementById("txtIndirimKodu").disabled=true;
                document.getElementById("txtIndirimKodu").value="";
                document.getElementById("dogrulama").innerHTML="";
            }
        }
    }

}

function pizzaHesapla()
{
    //Giriş ve çıkış verileri için değişkenler
    var pizzaFiyati,girilenKod,malzeme;
    //Sabit indirim kodu tanımı
    const indirimKodu="PROMO";

    //Pizza fiyatını boyut listesinin value sinden alma
    liste=document.getElementById("listePizza");
    secenek=liste[liste.selectedIndex].value;
    pizzaFiyati=Number(secenek);

    //Ek malzeme seçimlerini alıp,fiyata +2 lira yansıtma
    liste=document.getElementsByName("grupEkMalzeme");
    document.querySelectorAll('#listeEkSecimler option').forEach(option => option.remove());

    for(i=0;i<liste.length;i++)
    {

        if(liste[i].checked)
        {
            pizzaFiyati=pizzaFiyati+2;
            malzeme=liste[i].value;

            secenek=document.createElement("option");
            document.getElementById("listeEkSecimler").options.add(secenek);
            secenek.text=malzeme;
        }


    }

    
    if(document.getElementById("kodTrue").checked)
    {
        girilenKod=document.getElementById("txtIndirimKodu").value;
        if(indirimKodu==girilenKod)
        {
            pizzaFiyati=pizzaFiyati-5;
            document.getElementById("dogrulama").innerHTML="";
        }
        else
        {
            document.getElementById("dogrulama").innerHTML="Lütfen geçerli bir kod giriniz!";
            
        }
    }

    document.getElementById("sonuc").innerHTML="Ödenecek tutar: "+pizzaFiyati;
}