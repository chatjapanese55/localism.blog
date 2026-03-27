/**
 * articles.js — 記事データファイル
 *
 * 記事を追加・編集するには、このファイルの ARTICLES 配列を編集してください。
 *
 * 各記事のフィールド：
 *   id          : 一意の番号（重複不可）
 *   title       : 記事タイトル
 *   excerpt     : 一覧ページに表示される短い説明文（100〜150字程度）
 *   body        : 記事本文（改行は \n で表現）
 *   author      : 著者名
 *   date        : 投稿日（YYYY-MM-DD 形式）
 *   thumbnailUrl: サムネイル画像のURL（不要な場合は null）
 */

const ARTICLES = [
  // ---- サンプル記事 1 ----
  {
    id: 1,
    title: "A Weekend in Yanaka: Tokyo's Last Old Neighbourhood",
    excerpt: "Yanaka feels like a village frozen in time. Narrow lanes, wooden temples, and a cat on every corner — this is the Tokyo most tourists never find.",
    body: "Yanaka feels like a village frozen in time.\n\nTucked between Nippori and Nezu stations, this pocket of old Shitamachi survived the 1923 earthquake, the wartime firebombing, and the postwar redevelopment that erased so much of Tokyo's past. Walking its narrow lanes on a Saturday morning, you half-expect to round a corner and find yourself in the 1950s.\n\nThe main artery, Yanaka Ginza, is a covered shopping street barely 170 metres long. Tofu shops, sembei sellers, a fishmonger with a hand-painted sign — the kind of places that have been here for three generations and show no interest in Instagram aesthetics. A tabby cat sleeps in a patch of sunlight outside the butcher.\n\nBeyond the shopping street, the neighbourhood opens into a maze of temple grounds and wooden houses. Yanaka Cemetery, which doubles as a public park, is famous for cherry blossoms in spring, but in autumn the ginkgo trees turn the paths gold. Old graves of Meiji-era artists and politicians stand beside modest family plots, all equally weathered.\n\nFor lunch, duck into any of the tiny restaurants along the side streets. A bowl of handmade soba, a plate of grilled fish — nothing fancy, nothing expensive. The neighbourhood has resisted the gentrification that swallowed Shimokitazawa and Koenji, partly because the residents simply don't want it.\n\nYanaka is the Tokyo that Tokyoites quietly love and rarely talk about to outsiders. Come on a weekday if you can.",
    author: "Keiko M.",
    date: "2025-11-14",
    thumbnailUrl: null
  },
  // ---- サンプル記事 2 ----
  {
    id: 2,
    title: "Kamakura in the Rain: Why the Crowds Disappear",
    excerpt: "Everyone visits Kamakura on sunny weekends. Go on a rainy Tuesday instead and you'll have the Great Buddha almost to yourself.",
    body: "Everyone visits Kamakura on sunny weekends. The trains from Tokyo are packed, the paths to the Great Buddha are lined three-deep, and the matcha soft-serve queues stretch around the block.\n\nGo on a rainy Tuesday instead.\n\nI arrived at Kita-Kamakura station on a grey November morning, the kind of day when the mountains behind the town disappear into low cloud. The platform was nearly empty. By the time I reached Engaku-ji temple, five minutes' walk from the station, I had the moss-covered stone lanterns almost to myself.\n\nRain does something to old temples. The cypress bark on the rooftops darkens to near-black. The gravel paths turn silver. The smell of wet cedar and incense mixes in a way that feels ancient. A monk in grey robes crossed the courtyard without looking up.\n\nAt Kotoku-in, the Great Buddha sat in the drizzle as he has for seven centuries, his bronze patina deepened by the moisture. No crowd, no selfie sticks, no tour-guide microphones. Just the sound of rain on bronze and the distant crows.\n\nFor lunch I found a small soba restaurant near Hase station, the kind with a handwritten menu and no English. The owner, a woman in her seventies, brought a pot of green tea without being asked. The tempura soba was ¥950.\n\nKamakura in the rain is a different city. Slower, quieter, more itself. Pack a good umbrella and go.",
    author: "Taro H.",
    date: "2025-12-03",
    thumbnailUrl: null
  }
  // ---- 新しい記事はここに追加してください ----
  // {
  //   id: 3,
  //   title: "記事タイトル",
  //   excerpt: "短い説明文",
  //   body: "記事本文",
  //   author: "著者名",
  //   date: "2026-01-01",
  //   thumbnailUrl: null
  // }
];
