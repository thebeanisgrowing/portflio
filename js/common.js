document.addEventListener("DOMContentLoaded", function(){

    //패럴렉스
    window.addEventListener("DOMContentLoaded", function () {
        window.onscroll = function(){
            // 현재 스크롤의 높이확인
            console.log(window.scrollY);
            //메인비주얼 사라지기
            if(window.scrollY>800){
                document.getElementById("visualmain").classList.add("hidden");
            } else {
                document.getElementById("visualmain").classList.remove("hidden");
            }
            //돌아가는 꽃
            if(window.scrollY>1000){
                document.getElementById("bloom").classList.add("active");
            } else {
                document.getElementById("bloom").classList.remove("active");
            }
        }
    });
});