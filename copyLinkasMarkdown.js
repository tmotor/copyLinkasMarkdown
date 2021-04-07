'use strict'

// タイトルを取得
const title = document.title;
// URLを取得
const url = location.href;

// Markdownテキスト
const mdText = `[${title}](${url})`;

/**
 * ページのタイトルとURLをMarkdown形式でコピーする
 * @param {string} string Markdownテキスト
 */
function execCopy(string) {
  // テキストエリア生成
  const tmpTextArea = document.createElement('textarea');
  tmpTextArea.value = string;
  // テキストエリアを隠すstyleを適用
  const style = tmpTextArea.style;
  style.position = 'fixed';
  style.right = '200%';
  // bodyにテキストエリアを追加
  document.body.appendChild(tmpTextArea);
  // テキスト選択しコピーする
  tmpTextArea.select();
  document.execCommand('copy');
  // 要素削除
  document.body.removeChild(tmpTextArea);
};

if (navigator.clipboard) {
  navigator.clipboard.writeText(mdText).then(() => {
    alert('Copied to Clipboard');
  });
} else {
  execCopy(mdText);
  alert('Copied to Clipboard');
};

