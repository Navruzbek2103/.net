import React from "react";
import Sidebar from "./../../components/Sidebar/index";
import Img from "./../../assets/images/img.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import "./stylee.scss";
import { useState } from "react";
import { useParams, Outlet } from "react-router-dom";
// import { Card } from "react-bootstrap";

const index = () => {
  const params = useParams();
  const { id } = params;
  const isInteger = /^-?[0-9]+$/.test(id + "");

  // const display = ()=>{

  // }
  const [none, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
  return (
    <>
      <div className="documentation">
        <div className="container">
          <div className="document">
            <Sidebar />
            <div className="document__right col-8">
              <div className="document__right--top d-flex justify-between flex-column">
                <h3 className="fw-bold net__title">
                  .NET Uzbekistan
                  <BsThreeDotsVertical
                    className="dots"
                    onClick={
                      () => setShow((e) => !e)
                      //  console.log("de");
                    }
                  />
                  <div
                    className={`card shadow copy w-25 py-1 ${
                      none ? "d-block" : ""
                    }`}
                  >
                    <p className="text__copy" onClick={copy}>
                      {!copied ? "Copy link" : "Copied!"}
                    </p>
                  </div>
                </h3>
                <p className="doc__text fw-bold text-secondary my-3">
                  Microsoft .NET platformasi bo'yicha O'zbekistonda ilk
                  dokumentatsiya
                </p>
              </div>
              <div className="doc_read">
                <h3 className="fw-bold doc-caption">
                  Nega Taffakkur qilmaymiz?
                </h3>
                <p className="text-secondary my-4">
                  Assalomu aleykum qadrli dasturchilar! Bilaszmi men o'z
                  tajribam davomida shuni o'rgandimki, tafakkur degan
                  tushunchaning o'rni dasturlashda ham juda katta ekan. Bu
                  narsaning dasturchiga kerakli ekanini isbotlarini ham
                  keltirishim mumkin. "Dasturlashda tafakkur" jumlasini nega
                  ishlatdim? Bu o'z ichiga nimalarni oladi?
                </p>
                <img src={Img} alt="" />
              </div>
              <div className="text-secondary my-4">
                Ko'p dasturchilarni bilaman Dasturlashdan boshqa narsani
                bilmedi!!! (Shunaqasi ham bo'larkanmi? :) Qisqa qilaman...
                Kompyuter strukturasini o'rganib chiqing. Chuqur emas, shunchaki
                tuzilishini o'rganishni maslahat beraman. Sababi Ma'lumotlar
                qanday borib keladi? Protsessor qanday ishlaydi? Ushbu dasturni
                ishga tushishi uchun mening kompyuterim talablari qanday?
                Pixelli va Vectorli grafika....? Hullas, gapni indallosi - Shu
                savollarga javob bera oladigan bo'lsangiz, sizdan juda zo'r
                dasturchi chiqishini 90% kafolatlayman (Boshqa talablar ham bor,
                erkalanib ketmang...). Ushbu jarayonga tashxis qo'yish uchun
                qisqa ertak aytib beraman.
              </div>
              <div className="card shadow p-4 border-3 border-end border-5 border-end-0 border-top-0 border-bottom-0 border-info">
                Bir bor ekan, bir yo'q ekan, bitta chala dasturchi bor ekan.
                O'zicha juda kuchli emishda endi... Kunlarning birida u Java va
                .NET (C#) ni solishtirish niyatida, ikkalasida ham bir xil
                natija beruvchi kod yozmoqchi bo'libdi. Demak, bizning qahramon
                birinchi bo'lib "IntelliJ IDEA" (Javada ishlash uchun eng zo'r
                muhit desak bolaveradi) ni ishga tushiribdi. O'sha o'zi xohlagan
                kichik proyektni tugatibdi... Keyn "Visual Studio" (.NET da
                ishlovchi eng zor muhit hozirda) ni ishga tushiribdi. Endigi
                navbat C# ga kelibdida... O'sha proyektni C# da boshlabdi...
                Qarasa asabi o'ynayapti. Negaki kompyuter qotayotgan edi. Cho'ta
                kompyuter rosa qiynalyapti, bechara CPU (protsessor) dan
                chiqayotgan issiqlikka tuxum pishirsa bo'ladi... Natijada
                bizning shef o'z kompyuterini jahl ustida bir urdi... Shunday
                urdi keyboard (klaviatura) ga, shunday urdi.... bir nechta
                klavishlar ishlame qoldi.
              </div>
              <div className="my-4 text-secondary">
                Bizning hikoya Abdukarim Mirzayevnikiga o'xshagan zo'r emasda...
                Lekin hissasi zo'r. Agarda bizning dasturchi kompyuterni RAM i
                qanday ishlashini bilganida edi. Anavi kompyuterni dardini
                tushungan bo'lar edi. Sababi, RAM (tezkor xotira) to'lib qolgan.
                chunki 4GB edi xolos, CPU esa AMD edi. Buni tushunganlar
                tushunadi qanday og'ir dard ekanligini? Visual Studio va
                IntelliJ ni ishga tushirganda OZU ni to'ldirgan, bundau ikkita
                gigant windows dasturlari ishga tushganda, yana nima kutlishi
                mumkin. O'ylash kerak, to'xta.... Ushbu dasturlar talablari meni
                kompyuterimni to'gri kelmaydi, tim bo li ikkita katta dastur...
                Agarda shu narsaga e'tibor berganda, nimadir bo'lishini oldini
                olgan bo'lar edi. Bu qolganlar uchun oddiy holdek tuyilishi
                mumkin. Lekin bu jiddiy muammo. Hammasi bilimsizlikdan kelib
                chiqadi. Gapni qisqa qilaman, komp qanday ishlashini
                tushunishingiz kerak do'stlarim. Bu o'sha peshanasida xoli bor
                Muhammadkarim To'xtaboyev ni gapi.... Xaxaxaaa
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
