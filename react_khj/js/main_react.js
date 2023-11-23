function Gett(){                //--> 함수임~       
                                 // 컴포넌트를 처음에 나열하기  
  return(                           // -> 컴포넌트들의 모임~~ (필요하면 갖다 쓰는것...) 현재 컴포넌트 4개임 / 컴포넌트란? 함수를 의미한대............
    <>                  
    <Skip/>
    <Header/>
    <Main/>
    <Footer/>

    </>
  );

}



function Skip(){
  return(
    <>
      <ul class="skip">
        <li><a href="#main">콘텐츠 바로가기</a></li>
      </ul>
    </>
  )
}


function Header(){
  return(
    <>
      <header>
      <div class="logo"><img src="../img/logo_tousles.png"></img></div>
      <div className="menu">
      <ul id="menu">
    
      <li><a href="#">브랜드 스토리</a>
     
      
       
          <div className="tmenu">
              <div id="menubox">
                <ul class="n1">
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 광고</a></li>
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 재료이야기</a></li>
                  <li><a href="#">뉴스&공지사항</a></li>

                </ul>

                <ul class="n2">
                  <li><a href="#">new뚜레쥬르 살펴보기</a></li>
                  <li><a href="#">건강한 데일리 베이커리</a></li>

                </ul>

                <ul class="n3">
                  <li><a href="#">신제품</a></li>
                  <li><a href="#">빵</a></li>
                  <li><a href="#">케이크</a></li>
                  <li><a href="#">선물</a></li>
                  <li><a href="#">디저트&스낵</a></li>
                  <li><a href="#">음료</a></li>

                </ul>

                <ul class="n4">
                  <li><a href="#">진행중인 이벤트</a></li>
                  <li><a href="#">이벤트 당첨자</a></li>
                  <li><a href="#">CJ ONE 멤버쉽</a></li>
                  <li><a href="#">제휴혜택</a></li>
                </ul>

                <ul class="n5">
                  <li><a href="#">뚜레쥬르 앱</a></li>
                  <li><a href="#">홈페이지 전용 예약 배송</a></li>
                  <li><a href="#">꽃&케이크 택배 배송</a></li>
                  <li><a href="#">대량 구매 문의</a></li>
                </ul>


              </div>
            </div>
          
          </li>

          

          <li><a href="#">새로운 상품</a>
          <div className="tmenu">
              <div id="menubox">
                <ul class="n1">
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 광고</a></li>
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 재료이야기</a></li>
                  <li><a href="#">뉴스&공지사항</a></li>

                </ul>

                <ul class="n2">
                  <li><a href="#">new뚜레쥬르 살펴보기</a></li>
                  <li><a href="#">건강한 데일리 베이커리</a></li>

                </ul>

                <ul class="n3">
                  <li><a href="#">신제품</a></li>
                  <li><a href="#">빵</a></li>
                  <li><a href="#">케이크</a></li>
                  <li><a href="#">선물</a></li>
                  <li><a href="#">디저트&스낵</a></li>
                  <li><a href="#">음료</a></li>

                </ul>

                <ul class="n4">
                  <li><a href="#">진행중인 이벤트</a></li>
                  <li><a href="#">이벤트 당첨자</a></li>
                  <li><a href="#">CJ ONE 멤버쉽</a></li>
                  <li><a href="#">제휴혜택</a></li>
                </ul>

                <ul class="n5">
                  <li><a href="#">뚜레쥬르 앱</a></li>
                  <li><a href="#">홈페이지 전용 예약 배송</a></li>
                  <li><a href="#">꽃&케이크 택배 배송</a></li>
                  <li><a href="#">대량 구매 문의</a></li>
                </ul>

                
              </div>
            </div>
            </li>


         
           
          <li><a href="#">제품 안내</a>
          <div className="tmenu">
              <div id="menubox">
                <ul class="n1">
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 광고</a></li>
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 재료이야기</a></li>
                  <li><a href="#">뉴스&공지사항</a></li>

                </ul>

                <ul class="n2">
                  <li><a href="#">new뚜레쥬르 살펴보기</a></li>
                  <li><a href="#">건강한 데일리 베이커리</a></li>

                </ul>

                <ul class="n3">
                  <li><a href="#">신제품</a></li>
                  <li><a href="#">빵</a></li>
                  <li><a href="#">케이크</a></li>
                  <li><a href="#">선물</a></li>
                  <li><a href="#">디저트&스낵</a></li>
                  <li><a href="#">음료</a></li>

                </ul>

                <ul class="n4">
                  <li><a href="#">진행중인 이벤트</a></li>
                  <li><a href="#">이벤트 당첨자</a></li>
                  <li><a href="#">CJ ONE 멤버쉽</a></li>
                  <li><a href="#">제휴혜택</a></li>
                </ul>

                <ul class="n5">
                  <li><a href="#">뚜레쥬르 앱</a></li>
                  <li><a href="#">홈페이지 전용 예약 배송</a></li>
                  <li><a href="#">꽃&케이크 택배 배송</a></li>
                  <li><a href="#">대량 구매 문의</a></li>
                </ul>

                
              </div>
            </div>
            </li>

          <li><a href="#">이벤트&멤버쉽</a>
          <div className="tmenu">
              <div id="menubox">
                <ul class="n1">
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 광고</a></li>
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 재료이야기</a></li>
                  <li><a href="#">뉴스&공지사항</a></li>

                </ul>

                <ul class="n2">
                  <li><a href="#">new뚜레쥬르 살펴보기</a></li>
                  <li><a href="#">건강한 데일리 베이커리</a></li>

                </ul>

                <ul class="n3">
                  <li><a href="#">신제품</a></li>
                  <li><a href="#">빵</a></li>
                  <li><a href="#">케이크</a></li>
                  <li><a href="#">선물</a></li>
                  <li><a href="#">디저트&스낵</a></li>
                  <li><a href="#">음료</a></li>

                </ul>

                <ul class="n4">
                  <li><a href="#">진행중인 이벤트</a></li>
                  <li><a href="#">이벤트 당첨자</a></li>
                  <li><a href="#">CJ ONE 멤버쉽</a></li>
                  <li><a href="#">제휴혜택</a></li>
                </ul>

                <ul class="n5">
                  <li><a href="#">뚜레쥬르 앱</a></li>
                  <li><a href="#">홈페이지 전용 예약 배송</a></li>
                  <li><a href="#">꽃&케이크 택배 배송</a></li>
                  <li><a href="#">대량 구매 문의</a></li>
                </ul>

                
              </div>
            </div>
            </li>

          <li><a href="#">뚜레쥬르 앱&온라인 쇼핑몰</a>
          <div className="tmenu">
              <div id="menubox">
                <ul class="n1">
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 광고</a></li>
                  <li><a href="#">브랜드스토리</a></li>
                  <li><a href="#">뚜레쥬르 재료이야기</a></li>
                  <li><a href="#">뉴스&공지사항</a></li>

                </ul>

                <ul class="n2">
                  <li><a href="#">new뚜레쥬르 살펴보기</a></li>
                  <li><a href="#">건강한 데일리 베이커리</a></li>

                </ul>

                <ul class="n3">
                  <li><a href="#">신제품</a></li>
                  <li><a href="#">빵</a></li>
                  <li><a href="#">케이크</a></li>
                  <li><a href="#">선물</a></li>
                  <li><a href="#">디저트&스낵</a></li>
                  <li><a href="#">음료</a></li>

                </ul>

                <ul class="n4">
                  <li><a href="#">진행중인 이벤트</a></li>
                  <li><a href="#">이벤트 당첨자</a></li>
                  <li><a href="#">CJ ONE 멤버쉽</a></li>
                  <li><a href="#">제휴혜택</a></li>
                </ul>

                <ul class="n5">
                  <li><a href="#">뚜레쥬르 앱</a></li>
                  <li><a href="#">홈페이지 전용 예약 배송</a></li>
                  <li><a href="#">꽃&케이크 택배 배송</a></li>
                  <li><a href="#">대량 구매 문의</a></li>
                </ul>

                
              </div>
            </div>
            </li>
            </ul>
            </div>

         
      </header>
    </>
  )
}



function Main(){
  return(
    <>
     <section id="video">
        <div>
          <video class="myvideo" autoPlay loop muted>
            <source src="../video/cookies.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="b1"><p>매일 아침<br></br>신선한 빵을 굽습니다.</p></div>
      </section>

   

      <section id="banner">
      <div className="bforevent">
      <div className="event1">
      <h1>Event</h1>
        <ul className="event">
          <li><a href="#"><img src="../img/slide1.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/slide2.png" alt="1" /></a></li>
          <li><a href="#"><img src="../img/slide3.png" alt="1" /></a></li>
        </ul>
        </div>

        <div className="ban2">
          <img src="../img/tous_banner1.jpg" alt="ban"></img>
        </div>
        </div>
      </section>

      <section id="recomm">
      <div className="recom">
      <div className="name1">
      <h2> 추천메뉴 </h2>
      </div>
      <ul class="product">
        <li><a href="#"><img src="../img/recom1.jpg" />참치마요 브레드</a></li>
        {/* <li><a href="#"><img src="../img/recom2.jpg" />사과만난 크림치즈 브레드</a></li> */}
        <li><a href="#"><img src="../img/recom2-1.jpg" />딸기 맘모스빵</a></li>
        <li><a href="#"><img src="../img/recom3.png" />밤을 담은 밤팥 크림빵</a></li>
        <li><a href="#"><img src="../img/recom4.jpg" />오리지널 까눌레</a></li>
      </ul>
      </div>
      </section>

      <section id="new">
    
        <div className="new1 ">
        <h2> 신제품 </h2>
          <ul className="newp cf">
            <li><a href="#"><img src="../img/new1.jpg" alt="new" />토이스토리_우유컵쉬폰</a></li>
            <li><a href="#"><img src="../img/new2.jpg" alt="new" />헬로우설리_초코컵쉬폰</a></li>
            <li><a href="#"><img src="../img/new3.jpg" alt="new" />한입 꿀약과</a></li>
            <li><a href="#"><img src="../img/new4.jpg" alt="new" />라라스윗 생우유 빵샌드</a></li>
          </ul>
        </div>
      </section>
     
      <section id="last">
        <div className="last1 cf">
          <ul>
          <li><a href="#"><img src="../img/chang.jpg" alt="chang"  /></a></li>
          <li><a href="#"><img src="../img/chang2-1.jpg" alt="chang"  /></a></li>
          </ul>
        </div>
        
      </section>
  
    </>
  );
}


function Footer(){
  return(
    <>
      <div className="foot">
        <ul className="f1 cf">
          <li><a href="#">회사소개</a></li>
          <li><a href="#">기사채용안내</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">서비스 이용약관</a></li>
          <li><a href="#">사이트맵</a></li>
        </ul>
        <ul className="f2">
          <li><a href="#">상호명:CJ푸드빌 주소: 서울시 중구 매른대로12 을지로타워12 123호 CJ푸드빌</a></li>
          <li><a href="#">고객센터:1234-5667</a></li>
          <li><a href="#">통신판매업 신고종 : 123-4556-78910</a></li>
          <li><a href="#">사업자 등록번호  : 314-4556-78910</a></li>
          <li><a href="#">대표이메일:abc@defg.com</a></li>

        </ul>
      </div>
    </>
  )
}
// ---------------------------------------------------------
ReactDOM.render(
<Gett/>,
document.getElementById("root")
);