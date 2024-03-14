const text = document.getElementById('text');
const btn = document.getElementById('btn');

// 同期処理を実行する
console.log('処理1');

btn.addEventListener('click', () => {
 // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する   
 setTimeout(() => {
  console.log("処理2");
}, 2000);   
text.textContent = "ボタンをクリックしました";
});

// 同期処理を実行する
console.log('処理3');