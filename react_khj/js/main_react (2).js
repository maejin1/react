function Gett(){                //--> 함수임~       
                                 // 컴포넌트를 처음에 나열하기  
  return(                           // -> 컴포넌트들의 모임~~ (필요하면 갖다 쓰는것...) 현재 컴포넌트 4개임 / 컴포넌트란? 함수를 의미한대............
    <>                  
    <Skip/>
    <Header/>
    <Main/>


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
      <div id="menu">
        <ul className="menu">
      
          <li><a href="#">브랜드 스토리</a></li>
          <li><a href="#">새로운 상품</a></li>
          <li><a href="#">제품 안내</a></li>
          <li><a href="#">이벤트&멤버쉽</a></li>
          <li><a href="#">뚜레쥬르 앱&온라인 쇼핑몰</a></li>
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
        <li><a href="#"><img src="../img/recom1.jpg" />참치마요 브레드</a></li>
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
          <li><a href="#"><img src="../img/chang.jpg" alt="chang"  /></a></li>
          </ul>
        </div>
        
      </section>
  
    </>
  );
}

// ---------------------------------------------------------
ReactDOM.render(
<Gett/>,
document.getElementById("root")
);