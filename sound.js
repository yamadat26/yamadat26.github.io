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

// HTML側に`<button id="button1" />`がある前提で
const button1 = document.getElementById('button1').addEventListener('click', (e) => {
    if (sound.playing() && noise01.playing()) {
        sound.stop();
        noise01.stop();
    } else {
        sound.play();
        noise01.play();
    }
});

const inputElem = document.getElementById('noise-range01'); // input要素
const currentValueElem = document.getElementById('current-value'); // 埋め込む先のspan要素

// inputイベント時に値をセットする関数
const rangeOnChange = (e) =>{
  noise_vol = e.target.value / 100
  console.log(noise_vol)
  noise01.volume(noise_vol);
  
}
window.onload = () => {
  inputElem.addEventListener('input', rangeOnChange); // スライダー変化時にイベントを発火
}
