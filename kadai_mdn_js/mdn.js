// 指定された日付「2024年10月12日」を Date オブジェクトで作成
const date = new Date(2024, 9, 12); // 10月は 9（0始まり）

// 年・月・日を取得
const year = date.getFullYear(); // 年を取得
const month = date.getMonth() + 1; // 月を取得（0から始まるため +1）
const day = date.getDate(); // 日を取得

// フォーマットして表示
console.log(`${year}年${month}月${day}日`);
