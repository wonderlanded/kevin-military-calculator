const go = 1598850000000
const out = 1651294800000


function fromNow(){
    const now = Math.round(new Date().getTime())
    let time
    if(go >= now) time = go
    else time = out
    time = (time - now)
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { time: `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`, army: go < now }
}


window.addEventListener("load", () => {
    setInterval(()=> {
        data = fromNow()
        document.querySelector('h1').innerText = data.time
        document.querySelector('h2').innerText = '케빈님의 ' + (data.army ? '전역까지' : '입대까지')
    }, 1000)
    
  });