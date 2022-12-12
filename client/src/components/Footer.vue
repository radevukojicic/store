<template>
    <div id="footer">
       <div class="footerTop">
        <div class="cent" >
        <div class="logo">
           <img width="135px" src="/trust.png" alt="logo"> 
        </div>
        <div class="fastLinks">
            <h3>Brzi linkovi</h3>
            <router-link active-link="activeMob" exact  style="color:grey" to="/">Pocetna</router-link>
            <router-link active-link="activeMob" exact  style="color:grey" to="/nekretnine">Nekretnine</router-link>
            <router-link active-link="activeMob" exact  style="color:grey" to="/kontakt">Kontakt</router-link>
        </div>
        <div class="fastLinks">
            <h3>Kontakt</h3>

            <a href="tel:+38267009097" style="color:grey">067/009-097</a>
            <a href="tel:+38269570766" style="color:grey">069/727-288</a>
            <router-link active-link="activeMob" exact  style="color:grey" to="/">Trg Nezavisnosti 31</router-link>
            <a href="mailto:trustconsulting081@gmail.com" style="color:grey">trustconsulting081@gmail.com</a>
        </div>
        <div class="fastLinks">
            <h3>Brza pretraga</h3>
            <router-link active-link="activeMob" exact  style="color:grey" to="/nekretnine?category=&town=Podgorica&purpose=Izdavanje&status=&type=&priceMin=&priceMax=&sizeMin=&sizeMax=&sort=Najnovije&page=1">Izdavanje stanova podgorica</router-link>
            <router-link active-link="activeMob" exact  style="color:grey" to="/nekretnine?category=&town=Podgorica&purpose=Prodaja&status=&type=&priceMin=&priceMax=&sizeMin=&sizeMax=&sort=Najnovije&page=1">Prodaja stanova podgorica</router-link>
            <router-link active-link="activeMob" exact  style="color:grey" to="/nekretnine?category=plac&town=&purpose=Prodaja&status=&type=&priceMin=&priceMax=&sizeMin=&sizeMax=&sort=Najnovije&page=1">Prodaja placeva</router-link>
            <router-link active-link="activeMob" exact  style="color:grey" to="/nekretnine?category=kuca&town=&purpose=Prodaja&status=&type=&priceMin=&priceMax=&sizeMin=&sizeMax=&sort=Najnovije&page=1">Prodaja kuca</router-link>
        </div>
        </div>
       </div>
       <div class="footerBottom">
        <div class="cent" >

        <div class="copy">
           &copy; 2022 Trust Nekretnine. Sva prava zadržana. | Powered by <a style="color:blue" href="https://www.linkedin.com/in/rade-vukojicic-8372a7191/">vukojicic</a> 
        </div>
          <!-- |  Created by: <a href="https://www.linkedin.com/in/rade-vukojicic-8372a7191/">Rade</a> -->
       <a href="https://www.instagram.com/trust.real.estate.consulting/"> <div class="social" >
            <v-icon color="white" class="icon">mdi-instagram</v-icon>
        </div>
    </a>
        </div>
       </div>
    </div>
</template>


<script>

export default {
    name: "FooterComponent",
}
</script>


<style  scoped>
.activeMob{
    background: black;
}
a{
    text-decoration: none;
    color: grey;

}
#footer{
    color: rgb(238, 238, 238);
    width: 100%;
    padding-top: 70px;
    background: rgb(0, 0, 0);

}
.footerTop, .footerBottom{
    color: grey;

    display: flex;
    justify-content: center;
}
.cent {
    color: grey;

    justify-content: center;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.footerBottom{
    flex-wrap: wrap;
    margin-top: 60px;
    align-items: center;
    height: 60px;
    border-top: 0.3px solid rgba(203, 203, 203, 0.156);
}
.logo{
    margin-right: 60px;
    margin-bottom: 60px;


}
h3{
    color: rgb(255, 255, 255);
}
.fastLinks{
    margin-right: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
}
.fastLinks a{
    margin-top: 10px;
}

.copy{
    margin-right: 31px;
}
@media only screen and (max-width:608px){
    .footerBottom{
        height: 135px;
    }
    .copy{
        margin-top:15px;
        margin-bottom: 15px;
    }
}
.icon{
    margin-right: 10px;
    font-size: 25px;
}

</style>