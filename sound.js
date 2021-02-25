const sound = new Howl({
    src: ['songs/test.mp3'],
    volume: 1.0
});

const noise01 = new Howl({
  src: ['noise/construction.mp3'],
  loop: true,
  volume: 0,
  onend: function() {
    console.log('Finished!');
  }
})

const noise02 = new Howl({
  src: ['noise/rain.mp3'],
  loop: true,
  volume: 0,
  onend: function() {
    console.log('Finished!');
  }
})

const noise03 = new Howl({
  src: ['noise/station_ticket_gate.mp3'],
  loop: true,
  volume: 0,
  onend: function() {
    console.log('Finished!');
  }
})


const button1 = document.getElementById('button1')
button1.addEventListener('click', (e) => {
    const icon = document.getElementById('icon');
    const btn = document.getElementById('play_status');
    if (sound.playing()) {
        sound.stop();
        noise01.stop();
        noise02.stop();
        noise03.stop();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        btn.innerHTML= 'Play'
    } else {
        sound.play();
        noise01.play();
        noise02.play();
        noise03.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        btn.innerHTML= 'Stop'
    }
});

const inputElem = document.getElementById('noise-range01'); // input要素
const inputElem02 = document.getElementById('noise-range02');
const inputElem03 = document.getElementById('noise-range03');
// inputイベント時に値をセットする関数
const rangeOnChange1 = (e) =>{
  noise_vol = e.target.value / 100
  noise01.volume(noise_vol);
}
const rangeOnChange2 = (e) =>{
  noise_vol = e.target.value / 100
  noise02.volume(noise_vol);
}
const rangeOnChange3 = (e) =>{
  noise_vol = e.target.value / 100
  noise03.volume(noise_vol);
}
window.onload = () => {
  inputElem.addEventListener('input', rangeOnChange1); // スライダー変化時にイベントを発火
  inputElem02.addEventListener('input', rangeOnChange2); // スライダー変化時にイベントを発火
  inputElem03.addEventListener('input', rangeOnChange3); // スライダー変化時にイベントを発火
}

