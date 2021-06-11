import React, { Component } from "react";
import Sidebar from "../components/Sidebar";

export const Home = () => (
  <div className="wrapper">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="hometext">
      <h2>Tervetuloa Taekwon-Don pariin!</h2>
      <p>
        Taekwon-Do sopii kaikenikäisille ja kaikenkuntoisille ihmisille.
        Jokainen saa harrastaa lajia omista lähtökohdistaan ja omilla
        tavoitteillaan. Edistyksessä ei verrata oppilaita toisiinsa vaan
        seurataan kunkin yksilön henkilökohtaista edistymistä. Harjoittelu
        aloitetaan käymällä alkeiskurssi, jonka jälkeen siirytään
        harjoittelemaan jatkoryhmään.
      </p>
      <br></br>
      <p>
        Tarjoamme monipuolista ja laadukasta ohjausta hyvässä seurassa. Seuran
        opettajilla ja ohjaajilla on pitkä kokemus Taekwon-Don opettamisesta.
        Seurassamme toimii kaksi kansainvälisen opettaja-arvon suorittanutta
        opettajaa sekä muita mustavöisiä ohjaajia. Jäsenemme osallistuvat
        aktiivisesti niin kansallisiin kuin kansainvälisiinkin tapahtumiin.
      </p>
      <br></br>
      <p>
        Kilpailurintamalla seuramme edustajat ovat menestyneet monella tasolla.
        Värivyömme ja juniorimme ovat osallistuneet aktiivisesti ja
        menestyksekkäästi kansallisiin kilpailuihin. Seuramme on perinteisesti
        ollut hyvin edustettuna myös Suomen maajoukkueessa. Kilpaurheilun osalta
        seuramme suurin saavutus on Antti Rintasen maailmanmestaruus miesten
        alle 78-kiloisten ottelusta vuodelta 2019. Lisäksi seuraamme on vuosien
        saatossa voitettu viisi Euroopan mestaruutta, viimeisimpinä Joonas
        Heikkisen mestaruus II Danin liikesarjoista vuonna 2011, Veera Häyrysen
        mestaruus IV-VI Danin liikesarjoista vuonna 2012 sekä Antti Rintasen
        mestaruus miesten joukkuevoimamurskauksesta vuonna 2016.
      </p>
    </div>
  </div>
);
