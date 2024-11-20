const lots = [
    { title: "甲子籤", description: "大吉：事事順遂，喜事將至，萬事如意。" },
    { title: "乙丑籤", description: "中吉：雖有小波折，但最後定能成功。" },
    { title: "丙寅籤", description: "小吉：努力之後，收穫即將到來。" },
    { title: "丁卯籤", description: "平籤：平穩安定，無風無浪。" },
    { title: "戊辰籤", description: "小凶：需多加小心，等待時機再行動。" },
    { title: "己巳籤", description: "中吉：順勢而為，自有成果。" },
    { title: "庚午籤", description: "大吉：貴人相助，得以成功。" },
    { title: "辛未籤", description: "中吉：謹慎行事，可避開不必要的麻煩。" },
    { title: "壬申籤", description: "小凶：眼前有困難，但堅持就能突破。" },
    { title: "癸酉籤", description: "吉：安守本分，自會有福報。" },
    // 加入其他六十甲子籤文
];

// 按鈕事件
document.getElementById("drawButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * lots.length);
    const selectedLot = lots[randomIndex];

    // 顯示籤文
    document.getElementById("lotTitle").innerText = selectedLot.title;
    document.getElementById("lotDescription").innerText = selectedLot.description;

    // 顯示結果區域
    document.getElementById("result").style.display = "block";
});
