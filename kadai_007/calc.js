// 変数 num に 1以上の正の整数を代入
let num = 15;

// 3と5の両方の倍数（15, 30, 45...）を優先チェック
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {
    console.log("3の倍数です");
} else if (num % 5 === 0) {
    console.log("5の倍数です");
} else {
    console.log(num);
}
