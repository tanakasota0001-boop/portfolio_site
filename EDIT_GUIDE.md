# 編集ガイド

このサイトは `index.html` / `style.css` / `script.js` / `samples.js` と `images/` フォルダで構成されています。  
HTMLはほぼ触らなくてOKです。

---

## よく変更する箇所

### 🏷️ 屋号・ロゴを変更する
`index.html` の以下の3か所を変更してください。

```html
<!-- ヘッダーロゴ -->
<span class="logo-text" id="logo-text">YOUR NAME</span>

<!-- フッター -->
<span class="footer-logo" id="footer-logo-text">YOUR NAME</span>
<span id="footer-name">YOUR NAME</span>
```

---

### 📱 LINEリンクを設定する
LINE公式アカウント作成後、`index.html` の以下の箇所を変更：

```html
<!-- 変更前 -->
<a href="#" class="btn btn-line" id="line-btn">

<!-- 変更後（@以降をあなたのIDに変更） -->
<a href="https://line.me/R/ti/p/@あなたのID" class="btn btn-line" id="line-btn">
```

---

### 📞 電話番号を変更する
`index.html` の以下の箇所を変更：

```html
<a href="tel:00000000000" class="btn btn-phone" id="phone-btn">
  電話する（000-0000-0000）
</a>
```

---

## ✅ サンプルカードの追加・編集（メイン管理ファイル）

**`samples.js` だけを編集するだけでOKです。HTMLは一切触りません。**

```js
// samples.js の SAMPLES 配列に追加するだけ
{
  label:  "FLOWER SHOP",           // カテゴリラベル
  title:  "花屋サンプル",           // カードのタイトル
  desc:   "季節の花々を紹介するサイト。", // カードの説明文
  url:    "https://あなたのサンプルURL", // クリックで開くURL
  thumb:  "images/thumb_flower.png",   // サムネイル画像（imagesフォルダに配置）
  accent: "#9abf88",               // カテゴリラベルの色
},
```

### サムネイル画像を追加する手順
1. サンプルサイトのスクリーンショットを撮る（1200×750px 程度が理想）
2. `portfolio/images/` フォルダに保存（例: `thumb_flower.png`）
3. `samples.js` の `thumb` に `"images/thumb_flower.png"` を設定
4. 保存してリロードするだけで反映 ✅

---

## ファイル構成

```
portfolio/
├── index.html          ← メインページ（ほぼ触らない）
├── style.css           ← デザイン設定
├── script.js           ← アニメーション・カード生成
├── samples.js          ← ★ サンプル管理ファイル（ここだけ触れば良い）
├── vercel.json         ← Vercel設定（触らなくてOK）
├── EDIT_GUIDE.md       ← この編集ガイド
└── images/
    ├── thumb_cake_shop.png
    ├── thumb_bakery.png
    └── thumb_hair_salon.png
```

---

## Vercel へのデプロイ手順

1. GitHubに新しいリポジトリを作成
2. `portfolio` フォルダの中身を全部プッシュ
3. [vercel.com](https://vercel.com) でリポジトリを連携
4. 自動でデプロイ完了 🎉
