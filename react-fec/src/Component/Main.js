import classNames from "classnames/bind";
import styles from "../styles/style.module.scss";
import {useMediaQuery} from "react-responsive";
function Main(){
    const isMobile =useMediaQuery({
        query:"(max-width:768px)"
    });
    return(
        <main>
            <MainImg isMobile={isMobile}/>
            <MainFavorites isMobile={isMobile}/>
            <MainCarSearch isMobile={isMobile}/>
            <MainNotice isMobile={isMobile}/>
        </main>
    )
}
function MainImg({isMobile}){
    return(
        <section className={styles.MainImg}>
            {
                isMobile &&
                <div className={styles.section__main__img}>
                    <img src={require("../img/mainimg.jpg")}></img>
                    <form method="GET" className={styles.section__form}>
                        <input className={styles.section__input__text} type="text" placeholder="충전기 번호입력"/>
                        <input className={styles.section__input__submit} type="submit" value="충전/결제 바로가기"/>
                    </form>
            </div>
            }
            {/*
            <div className={styles.section__main__img}>
                <img src={require("../img/mainimg.jpg")}></img>
                <form method="GET" className={styles.section__form}>
                    <input className={styles.section__input__text} type="text" placeholder="충전기 번호입력"/>
                    <input className={styles.section__input__submit} type="submit" value="충전/결제 바로가기"/>
                </form>
            </div>
            */}
        
        </section>
    )
}
function MainFavorites({isMobile}){
    return(
        <section className={styles.MainFavorites}>
            {
                isMobile &&
                    <div className={styles.section__favorites}>
                        <div className={styles.section__favorites__box}>
                            <div>최근 사용한 충전소</div>
                            <div>충전소 즐겨찾기</div>
                        </div>
                        <div className={styles.section__favorites__box2}>
                            <div>충전소명</div>
                            <div>현재 상태</div>
                            <div>바로가기</div>
                        </div>
                        <hr/>
                    </div>
            }
            
            
        </section>
    )
}

function MainCarSearch({isMobile}){
    return(
        <section className={styles.MainCarSearch}>
            {
                isMobile &&
                    <div className={styles.MainCarSearch__box}>
                        <div className={styles.MainCarSearch__box__charge}>
                            <div>FEC 충전소</div>
                            <div className={styles.a}>
                                <div><a href="/">검색</a></div>
                                <div><a href="/">입장 QR 찍기</a></div>
                            </div>
                            
                        </div>

                        <div className={styles.MainCarSearch__box__car}>
                            <div>내 차량</div>
                            <div className={styles.a}>
                                <div><a href="/">보기</a></div>
                                <div><a href="/">등록</a></div>
                            </div>
                            
                        </div>

                        <div className={styles.MainCarSearch__box__payment}>
                            <div>결제수단</div>
                            <div className={styles.a}>
                                <div><a href="/">보기</a></div>
                                <div><a href="/">등록</a></div>
                            </div>
                        </div>

                        <div className={styles.MainCarSearch__box__use}>
                            <div><a href="/">이용내역</a></div>
                        </div>
                    </div>
            }
            {/*
            <div className={styles.MainCarSearch__box}>
                <div className={styles.MainCarSearch__box__charge}>
                    <div>FEC 충전소</div>
                    <div className={styles.a}>
                        <div><a href="/">검색</a></div>
                        <div><a href="/">입장 QR 찍기</a></div>
                    </div>
                    
                </div>

                <div className={styles.MainCarSearch__box__car}>
                    <div>내 차량</div>
                    <div className={styles.a}>
                        <div><a href="/">보기</a></div>
                        <div><a href="/">등록</a></div>
                    </div>
                    
                </div>

                <div className={styles.MainCarSearch__box__payment}>
                    <div>결제수단</div>
                    <div className={styles.a}>
                        <div><a href="/">보기</a></div>
                        <div><a href="/">등록</a></div>
                    </div>
                </div>

                <div className={styles.MainCarSearch__box__use}>
                    <div><a href="/">이용내역</a></div>
                </div>
            </div>
            */}
            
            
        </section>
    )
}

function MainNotice({isMobile}){
    return(
        <section className={styles.MainNotice}>
            {
                isMobile &&
                    <div className={styles.MainNotice__box}>
                        <div>공지</div>
                        <div>공지 중 최신 게시물 표시</div>
                    </div>
            }
            
        </section>
    )
}
export default Main;