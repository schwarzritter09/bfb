// 監視対象の要素を取得
const target = document.querySelector(".p-clubModal__content");

// オプション設定
const config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
  attributeFilter: ['class', 'style', 'data-demo'],
  attributeOldValue: true,
  characterDataOldValue: true,
};

// 変更検知時のcallback
const callback = function(mL, o){

    if(document.getElementsByTagName("input")[3]) {
        // 支払い選択
        // クレカ選択
        document.getElementsByTagName("input")[0].click();

        // 購入に進む
        document.getElementsByTagName("input")[3].click();
    } else {
        // この内容で購入する
        // 誤購入防止のためコメントアウト
        //document.getElementsByTagName("input")[0].click();
    }
}

// MutationObserverのインスタンスを作成
const observer = new MutationObserver(callback);
// 監視対象の要素にMutationObserverを設定
observer.observe(target, config);

// 初期画面
// 同意チェックは手動でチェックすること

// 実行予約 
setTimeout(() => {
        document.getElementsByTagName("input")[1].click();
    }, new Date().setHours(12, 0, 0, 0) - new Date()
);
