// 日付を出力する関数を定義する
const date = () => {
    
  // 現在の日時を取得
  const today = new Date();

  // 今日の日付を取得 (日)
  const  day = today.getDate();

  // 今日の月を取得 (月)
  const  month = today.getMonth() + 1; 

  // 今日の年を取得 (年)
  const  year = today.getFullYear();


console.log(year + '年' + month + '月' + day + '日'); 

}

// 日付を出力する関数を呼び出す
date();