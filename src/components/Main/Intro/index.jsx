import React from "react";
import "./style.scss";
import introBg from "./../../../assets/images/intro3.jpg";

const index = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <h2 className="intro__wrapper-title">Welcome to</h2>
          <h3 className="intro__wrapper-subtitle">NetDev Explore</h3>
          <div className="intro__inner">
            <img
              src={introBg}
              alt="intro section img"
              className="intro__inner-img"
            />
            <div className="intro__inner-box">
              <p className="intro__inner-box-text">
                <strong>Dasturlash tillari tarixi</strong> — dastlabki kompyuterlarni
                hujjatlashtirishdan tortib, dasturiy taʼminotni ishlab chiqish
                uchun zamonaviy vositalarni oʻz ichiga oladi. Ilk dasturlash
                tillari juda oʻta tor doirada qoʻllanilishga moʻljallangan
                boʻlib, ular matematik belgilarga va shunga oʻxshash tushunarsiz
                sintaksisga tayangan. Kompyuter texnikasining rivojlanishi
                dasturlash tillarida algoritmlarni yozib olish uchun turli xil
                yangi belgilar tizimlarining paydo boʻlish jarayonini belgilab
                berdi. Bunday tilning paydo boʻlishining maʼnosi dastur kodini
                soddalashtirishdan iborat edi. Dasturlash tillarini besh avlodga
                boʻlish qabul qilingan. Birinchi avlodga oʻtgan asrning
                50-yillari boshlarida, birinchi kompyuterlar endigina paydo
                boʻlgan paytda tuzilgan tillar kiradi. Bu "bir satrda bir
                buyruq" prinsipi asosida qurilgan birinchi assembler tili edi.
                XX asr davomida kompilyatorlar nazariyasi boʻyicha olib borilgan
                izlanishlar yuqori darajadagi dasturlash tillarini yaratishga
                olib keldi, ular koʻrsatmalarni uzatish uchun qulayroq
                sintaksisdan foydalanadilar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
