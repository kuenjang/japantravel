/** 日本中部・北陸行程資料（結構與 [原頁](https://chubuholiday-5wyxbfbq.manus.space) 對齊） */

export const tripMeta = {
  title: "日本中部・北陸",
  duration: "7天6夜",
  subtitle:
    "從名古屋出發，穿越昇龍道、上高地、合掌村，最後南下關西",
  dateRange: "5/11 - 5/17",
  cityCount: "7個城市",
  sourceUrl: "https://chubuholiday-5wyxbfbq.manus.space",
};

export const routeCities = [
  "名古屋",
  "馬籠・妻籠",
  "高山",
  "上高地",
  "白川鄉",
  "金澤",
  "大阪",
];

export type ScheduleItem = {
  time?: string;
  title: string;
  bullets?: string[];
};

export type StationPair = { ja: string; en: string };

export type ReserveRow = {
  order: string;
  date: string;
  route: string;
  train: string;
  timeNote: string;
};

export type OrderItem = {
  id: string;
  passengers?: string;
};

export type BookingInfo = {
  hotel: string;
  orderId?: string;
  orderIds?: string[];
  orders?: OrderItem[];
  pinCode?: string;
  note?: string;
};

export type JrPassNight = {
  title: string;
  intro: string;
  stations: StationPair[];
  reserves: ReserveRow[];
  strategies: string[];
  tips: string[];
  checklist: string[];
};

export type MiniRouteStep = { emoji: string; title: string; desc: string };
export type TripImage = { src: string; alt: string; caption?: string };

export type TripDayBlock =
  | { kind: "schedule"; items: ScheduleItem[] }
  | { kind: "jrPass"; data: JrPassNight }
  | { kind: "routeMini"; title: string; steps: MiniRouteStep[]; footnote?: string }
  | { kind: "imageGallery"; title: string; images: TripImage[] }
  | { kind: "note"; emoji?: string; title: string; lines: string[] }
  | { kind: "twoColumnPlans"; titleA: string; titleB: string; bodyA: string[]; bodyB: string[] }
  | { kind: "booking"; data: BookingInfo }
  | { kind: "appsHint"; lines: string[] };

export type TripDay = {
  day: number;
  date: string;
  weekday: string;
  headline: string;
  lead?: string;
  blocks: TripDayBlock[];
  accommodation?: { name: string; note?: string };
  footerNote?: string;
};

export const jrPassNight: JrPassNight = {
  title: "當晚必做：JR Pass 指定席預訂",
  intro:
    "9 人團體在綠色自動售票機或窗口劃位，這是整個旅程最關鍵的一步！",
  stations: [
    { ja: "名古屋", en: "Nagoya" },
    { ja: "高山", en: "Takayama" },
    { ja: "富山", en: "Toyama" },
    { ja: "金澤", en: "Kanazawa" },
    { ja: "敦賀", en: "Tsuruga" },
    { ja: "新大阪", en: "Shin-Osaka" },
    { ja: "大阪", en: "Osaka" },
    { ja: "關西機場", en: "Kansai-Airport" },
  ],
  reserves: [
    {
      order: "1",
      date: "5/13 (週三)",
      route: "Nagoya → Takayama",
      train: "特急飛驒號 Hida",
      timeNote: "07:43 - 10:02",
    },
    {
      order: "2",
      date: "5/14 (週四)",
      route: "Takayama → Toyama",
      train: "特急飛驒號 Hida",
      timeNote: "13:11 - 14:41",
    },
    {
      order: "3",
      date: "5/16 (週六)",
      route: "Kanazawa → Tsuruga",
      train: "北陸新幹線",
      timeNote: "時間：需確認",
    },
    {
      order: "4",
      date: "5/16 (週六)",
      route: "Tsuruga → Osaka",
      train: "特急雷鳥號 Thunderbird",
      timeNote: "時間：需確認",
    },
    {
      order: "5",
      date: "5/17 (週日)",
      route: "Osaka → Kansai-Airport",
      train: "特急 Haruka",
      timeNote: "時間：需確認",
    },
  ],
  strategies: [
    "分兩批操作 (6+3)：日本自動售票機單次上限 6 人，先插入 6 張周遊券劃位，再插入剩下 3 張",
    "務必預約『特大行李放置處附帶席』：9 個 29 吋大行李可直接放在座位後方，不用搬上行李架",
    "領票地點：JR 名古屋站『綠色窗口』或『綠色自動售票機』（有護照讀取器，速度更快）",
    "準備 9 本護照正本：機器需逐一掃描，務必全部在手邊",
    "尋求協助：名古屋站通常有穿制服的引導員在機器旁，可直接比『9 persons』請求協助",
  ],
  tips: [
    "小抄準備：把上面的「日期、班次時間、起訖站英文」寫在一張紙上",
    "尋求協助：5/11 當晚如果怕操作錯誤，名古屋站通常會有穿制服的引導員在機器旁",
    "翁大哥的手機：既然這晚要處理交通票券，可以順便檢查翁大哥在車站 Wi-Fi 環境下，eSIM 的安裝進度是否順利",
  ],
  checklist: [
    "準備 9 本護照正本",
    "行程小抄 (日期、班次、站名)",
    "確認 9 人大行李尺寸 (29吋)",
    "確認 eSIM 安裝進度",
  ],
};

export const days: TripDay[] = [
  {
    day: 1,
    date: "5/11",
    weekday: "週一",
    headline: "飛往名古屋・入住三井花園",
    lead: "初日行程較輕鬆，主要是交通與休息。",
    blocks: [
      {
        kind: "schedule",
        items: [
          {
            time: "18:45",
            title: "抵達中部國際機場",
            bullets: [
              "搭乘名鐵特急 μ-SKY 前往名古屋站（約 28 分鐘）",
              "機場 Terminal 1",
              "名鐵特急 μ-SKY 票券",
            ],
          },
          {
            time: "18:45 - 19:00",
            title: "領取 JR 高山・北陸地區周遊券",
            bullets: [
              "在中部國際機場 JR 票務窗口領取 9 份周遊券（5 日券）",
              "地點：機場 Terminal 1 JR 東海票務中心",
              "準備：9 本護照正本",
              "周遊券有效期：5/13-5/17",
              "價格：已由可樂旅遊代購（TWD $3,712/人）",
            ],
          },
          {
            time: "19:30",
            title: "入住飯店",
            bullets: [
              "三井花園飯店名古屋普米爾辦理入住",
              "飯店步行 5 分鐘內有許多居酒屋",
              "推薦試試名古屋名產「手羽先」",
            ],
          },
          {
            time: "21:00",
            title: "放鬆時光",
            bullets: ["飯店頂樓景觀大浴場", "建議睡前泡澡放鬆"],
          },
        ],
      },
      {
        kind: "booking",
        data: {
          hotel: "三井花園飯店名古屋普米爾（Mitsui Garden Hotel Nagoya Premier）",
          orders: [
            { id: "1616325000861101", passengers: "WU YEN CHING, HSIAO SHU YA, CHIU HUEI YIN" },
            { id: "1616325000914171", passengers: "CHEN WEN HUI, CHIU PO SZ" },
            { id: "1616325000953951", passengers: "CHENG KUN CHANG, WENG FAN FU, WU MEI CHIH, WU PI LING" },
          ],
          note: "入住時間：5 月 11 日",
        },
      },
      { kind: "jrPass", data: jrPassNight },
      {
        kind: "note",
        emoji: "💡",
        title: "給主揪的貼心建議",
        lines: jrPassNight.tips,
      },
    ],
    accommodation: {
      name: "三井花園飯店名古屋普米爾（三井ガーデンホテル名古屋プレミア）",
    },
  },
  {
    day: 2,
    date: "5/12",
    weekday: "週二",
    headline: "昇龍道一日遊：馬籠、妻籠、龍神瀑布",
    blocks: [
      {
        kind: "schedule",
        items: [
          {
            time: "08:00",
            title: "享用早餐",
            bullets: [
              "三井花園飯店名古屋普米爾早餐（評價極高的精緻早餐）",
              "飯店內享用",
              "建議早點用餐",
            ],
          },
          {
            time: "09:00",
            title: "集合出發",
            bullets: [
              "在 Mitsui Garden Hotel Nagoya Premier 門口集合",
              "上車點：三井花園飯店名古屋普米爾",
              "E-10 座豐田海獅包車",
              "司機導遊全程陪同",
              "建議提前 15 分鐘到達",
            ],
          },
          {
            time: "09:00 - 18:00",
            title: "昇龍道一日遊：馬籠宿 → 妻籠宿 → 龍神瀑布",
            bullets: [
              "專車接送前往馬籠宿、妻籠、龍神瀑布秘境探索",
              "馬籠宿：江戶時代古街散策，欣賞傳統建築",
              "妻籠宿：木製建築群，體驗古代驛站風情",
              "龍神瀑布：秘境健行，欣賞壯麗瀑布",
              "午餐：飛驒牛料理或當地特色餐點",
              "全程中文導遊講解",
            ],
          },
          {
            time: "18:00",
            title: "返回名古屋",
            bullets: ["結束行程返回名古屋"],
          },
          {
            time: "18:30",
            title: "送抵名鐵大飯店",
            bullets: [
              "公司協助運送至 Meitetsu Grand Hotel 並幫助攜帶 29 吋行李",
              "下車點：名鐵格蘭酒店 (Meitetsu Grand Hotel)",
              "地址：Meieki 1-2-4, 中村區, 450-0002 名古屋市, 愛知縣, 日本",
              "公司協助運送大件行李",
              "辦理入住",
            ],
          },
        ],
      },
      {
        kind: "booking",
        data: {
          hotel: "名鐵大飯店（Meitetsu Grand Hotel）",
          orders: [
            { id: "1616328682903096", passengers: "HSIAO SHU YA, CHIU HUEI YIN, CHEN WEN HUI" },
            { id: "1616328683049359", passengers: "CHIU PO SZ, WU YEN CHING" },
            { id: "1616329174987500", passengers: "CHENG KUN CHANG, WENG FAN FU" },
            { id: "1616329232285949", passengers: "WU PI LING, WU MEI CHIH" },
          ],
          note: "入住時間：5 月 12 日開始",
        },
      },
    ],
    accommodation: { name: "名鐵大飯店（Meitetsu Grand Hotel）" },
    footerNote:
      "包含往返接送與行李運送服務。建議比集合時間早 15 分鐘抵達，以免在巨大的名古屋車站內迷路。",
  },
  {
    day: 3,
    date: "5/13",
    weekday: "週三",
    headline: "名古屋 → 上高地 → 入住高山（挑戰日）",
    blocks: [
      {
        kind: "schedule",
        items: [
          {
            time: "07:15 - 07:30",
            title: "名鐵大飯店退房",
            bullets: ["辦理退房並攜帶所有行李", "建議前一晚先整理好行李"],
          },
          {
            time: "07:43 - 10:02",
            title: "搭乘 JR 特急 Hida 1 號",
            bullets: [
              "使用「周遊券」搭乘，沿途欣賞飛驒川的溪谷美景",
              "建議坐在右側車窗視野較佳",
            ],
          },
          {
            time: "10:02 - 10:20",
            title: "抵達高山站 & 寄放行李",
            bullets: [
              "出站後過馬路即抵達「飛驒高山華盛頓廣場飯店」",
              "將大件行李寄放在飯店櫃台（此時還不能進房，僅寄放）",
            ],
          },
          {
            time: "10:20 - 10:40",
            title: "購買上高地巴士票",
            bullets: [
              "走回飯店隔壁的「高山濃飛巴士中心」購買往返上高地的車票",
              "單程 2,800 日圓，周遊券不包含此段",
            ],
          },
          {
            time: "10:40 - 11:30",
            title: "搭乘巴士前往「平湯溫泉」",
            bullets: ["這是進入上高地的轉運站"],
          },
          {
            time: "11:30 - 12:10",
            title: "轉乘接駁巴士 & 抵達上高地",
            bullets: [
              "在平湯溫泉轉搭接駁車（約 25-30 分鐘）",
              "建議在「大正池站」下車，不要坐到終點站，這樣才能看完整精華美景",
            ],
          },
          {
            time: "12:10 - 15:30",
            title: "上高地精華健行 & 午餐",
            bullets: [
              "大正池拍照 → 田代池 → 河童橋",
              "12:10 - 12:40：大正池拍照（倒映的山景）",
              "12:40 - 13:40：步行經由田代池，沿著梓川左岸步道走向河童橋",
              "13:40 - 15:00：抵達河童橋，在此享用遲來的午餐（推薦：河童食堂或五千尺飯店的下午茶）",
              "15:00 - 15:30：逛逛紀念品店，寫張明信片",
            ],
          },
          {
            time: "15:30 - 16:30",
            title: "準備下山",
            bullets: [
              "在「上高地巴士總站」（河童橋旁）搭車返回平湯溫泉",
            ],
          },
          {
            time: "16:30 - 17:30",
            title: "返回高山市",
            bullets: ["在平湯溫泉轉車回高山濃飛巴士中心"],
          },
          {
            time: "17:40",
            title: "入住飯店 & 晚餐",
            bullets: [
              "回華盛頓飯店進房、拿行李，步行 5 分鐘去高山古街附近享用「飛驒牛燒肉」",
              "晚餐：步行 5 分鐘去高山古街附近享用「飛驒牛燒肉」",
              "建議提早訂位，如：味藏天國或丸明",
            ],
          },
        ],
      },
      {
        kind: "routeMini",
        title: "上高地健行路線",
        steps: [
          {
            emoji: "📸",
            title: "1. 大正池",
            desc: "倒映的山景，最佳拍照點",
          },
          {
            emoji: "🌲",
            title: "2. 田代池",
            desc: "沿著梓川左岸步道",
          },
          {
            emoji: "🌉",
            title: "3. 河童橋",
            desc: "上高地中心，用餐休息點",
          },
        ],
        footnote:
          "從大正池開始，沿著梓川左岸步道步行至田代池，再繼續前往河童橋。全程約 3.5 公里，步行時間約 1.5 小時。沿途可欣賞北阿爾卑斯的壯麗山景與清澈溪流。",
      },
      {
        kind: "imageGallery",
        title: "高山站轉乘參考圖",
        images: [
          {
            src: "/images/takayama-bus-center-guide.png",
            alt: "JR 高山站東口到高山濃飛巴士中心步行指引圖",
            caption: "JR 高山站東口步行至高山濃飛巴士中心",
          },
          {
            src: "/images/takayama-kamikochi-flow.png",
            alt: "從高山前往上高地交通流程圖",
            caption: "高山站 → 平湯溫泉 → 上高地轉乘流程",
          },
        ],
      },
      {
        kind: "note",
        emoji: "🚄",
        title: "已預訂：特急飛驒號（Nagoya → Takayama）",
        lines: [],
      },
      {
        kind: "appsHint",
        lines: [
          "午餐備案：上高地餐廳在下午 2 點後可能部分休息，建議在名古屋車站或高山車站先買個飯糰 or 簡單輕食帶在身上。",
          "保暖服裝：5 月的上高地仍有殘雪，氣溫即使在大晴天也可能只有 8-12 度。",
          "巴士時刻：5 月是旺季，下山的巴士班次有時需要拿「乘車整理券」。",
        ],
      },
      {
        kind: "booking",
        data: {
          hotel: "飛驒高山華盛頓廣場飯店（Washington Hotel Plaza Takayama）",
          orders: [
            {
              id: "1616329173218576",
              passengers: "CHIU PO SZ, WU YEN CHING, CHENG KUN CHANG, WENG FAN FU, WU PI LING, WU MEI CHIH, HSIAO SHU YA, CHIU HUEI YIN, CHEN WEN HUI",
            },
          ],
          note: "入住時間：5 月 13 日",
        },
      },
    ],
    accommodation: { name: "飛驒高山華盛頓廣場飯店（Washington Hotel Plaza Takayama）" },
  },
  {
    day: 4,
    date: "5/14",
    weekday: "週四",
    headline: "高山 → 金澤（兩方案選擇）",
    blocks: [
      {
        kind: "twoColumnPlans",
        titleA: "方案 A｜高速巴士直達版",
        titleB: "方案 B｜全鐵道舒適版",
        bodyA: [
          "適合情況：成功預約到高山→合掌村→金澤的巴士座位",
          "9 件大行李需搬上巴士行李艙",
          "08:30-09:30 早餐與出發，步行至高山濃飛巴士中心",
          "09:50-10:40 前往合掌村（周遊券，需預約）",
          "10:40-14:30 合掌村深度散步、午餐飛驒牛／朴葉味噌",
          "14:40-15:55 白川鄉直達金澤（需預約）",
          "16:15 抵達金澤，入住金澤托裡菲託飯店",
        ],
        bodyB: [
          "適合情況：沒預約到巴士、天候不佳，或想更舒適移動",
          "不去合掌村，改走鐵道路線",
          "09:00-11:30 宮川朝市、高山陣屋等深度遊",
          "13:11-14:41 特急飛驒號 高山→富山",
          "14:50-15:30 富山站短暫停留",
          "15:40-16:00 北陸新幹線抵達金澤",
          "16:15 與方案 A 幾乎同時抵達飯店",
        ],
      },
      {
        kind: "note",
        emoji: "🚄",
        title: "已預訂：特急飛驒號／北陸新幹線",
        lines: [
          "方案 A 需搬運 9 個大箱子上下巴士兩次；方案 B 箱子直接推進火車放置區，對體力較友善。",
          "5/11 領票時若發現巴士滿位，就直接改採方案 B。",
        ],
      },
      {
        kind: "booking",
        data: {
          hotel: "金澤托裡菲託飯店（Hotel Torifito Kanazawa）",
          orders: [
            { id: "1616328784448933", passengers: "WU MEI CHIH, WU PI LING, WU YEN CHING, CHIU PO SZ" },
            { id: "1616328784382400", passengers: "HSIAO SHU YA, CHEN WEN HUI, CHIU HUEI YIN" },
            { id: "1616328784382390", passengers: "WENG FAN FU, CHENG KUN CHANG" },
          ],
          note: "入住時間：5 月 14 日",
        },
      },
    ],
    accommodation: { name: "金澤托裡菲託飯店（Hotel Torifito Kanazawa）" },
    footerNote:
      "金澤飯店離車站不遠，無論方案 A 或 B 抵達後，步行或短程計程車都很方便。",
  },
  {
    day: 5,
    date: "5/15",
    weekday: "週五",
    headline: "金澤文化與藝術深度遊",
    blocks: [
      {
        kind: "schedule",
        items: [
          {
            time: "上午",
            title: "近江町市場",
            bullets: [
              "金澤最大的傳統市場，品嚐新鮮海鮮與當地美食",
              "推薦試試新鮮的螃蟹與海膽丼飯",
            ],
          },
          {
            time: "中午",
            title: "兼六園",
            bullets: ["日本三大名園之一", "精緻的日本庭園", "四季風景優美"],
          },
          {
            time: "下午",
            title: "東茶屋街",
            bullets: [
              "金箔冰淇淋、百年古街散策",
              "傳統茶屋街、金箔工藝品、古街風情",
            ],
          },
          {
            time: "下午",
            title: "金澤 21 世紀美術館",
            bullets: [
              "現代藝術與建築的完美結合",
              "著名景點",
              "自由參觀或購票進館",
            ],
          },
        ],
      },
    ],
    accommodation: { name: "金澤托裡菲託飯店（Hotel Torifito Kanazawa）" },
    footerNote: "金澤是文化與藝術的結晶，建議放慢腳步細細品味。",
  },
  {
    day: 6,
    date: "5/16",
    weekday: "週六",
    headline: "南下關西・大阪／京都最後衝刺",
    blocks: [
      {
        kind: "schedule",
        items: [
          {
            time: "上午",
            title: "搭乘 JR 特急 Thunderbird",
            bullets: ["從金澤南下前往大阪或京都", "使用周遊券", "景觀列車體驗"],
          },
          {
            time: "下午",
            title: "入住大阪住宿",
            bullets: ["入住大阪之家心齋橋雜波附近", "位於心齋橋，方便隔天去機場"],
          },
          {
            time: "傍晚",
            title: "道頓堀、心齋橋最後購物",
            bullets: ["享受關西美食與購物", "大啖關西美食、最後衝刺購物"],
          },
        ],
      },
      {
        kind: "note",
        emoji: "🚄",
        title: "已預訂：特急雷鳥號（Kanazawa → Osaka）",
        lines: [],
      },
    ],
    accommodation: {
      name: "大阪之家 心齋橋雜波附近 4 室一廳整套房子（Osaka no Ie Shinsaibashi）",
    },
    footerNote:
      "這是旅程的最後衝刺，盡情享受關西的活力與美食。",
  },
  {
    day: 7,
    date: "5/17",
    weekday: "週日",
    headline: "賦歸・長榮回高雄",
    blocks: [
      {
        kind: "schedule",
        items: [
          {
            time: "09:00",
            title: "前往關西機場",
            bullets: [
              "從大阪搭乘「南海電鐵」或「關空快速」前往關西機場",
              "預留充足時間辦理登機",
            ],
          },
          {
            time: "10:00",
            title: "抵達機場辦理報到",
            bullets: ["長榮 BR181 報到", "確認行李與護照"],
          },
          {
            time: "12:10",
            title: "起飛回高雄",
            bullets: [
              "圓滿結束 7 天 6 夜的日本之旅",
              "預計 15:30 抵達高雄",
            ],
          },
        ],
      },
      {
        kind: "note",
        emoji: "🚄",
        title: "已預訂：特急 Haruka（Osaka → Kansai-Airport）",
        lines: [],
      },
    ],
    accommodation: { name: "飛行中" },
    footerNote: "祝您這趟橫跨「海、陸、山」的旅程充滿驚喜！",
  },
];

export const travelNotes: { title: string; body: string }[] = [
  {
    title: "JR 高山・北陸地區周遊券",
    body:
      "已訂購可樂旅遊 JR 高山・北陸地區周遊券（5 日券）× 9 人，價格 TWD $3,712/人。周遊券有效期：5/13-5/17。建議在 5/11 抵達中部國際機場或名古屋站時領取。周遊券涵蓋：名古屋→高山→富山→金澤→大阪的所有特急列車與新幹線。",
  },
  {
    title: "預約提醒",
    body:
      "5/14 的巴士（高山→白川鄉、白川鄉→金澤）或鐵道轉運請務必在抵達名古屋的第一天就完成預約。方案 A 需預約巴士座位；方案 B 則需確認特急列車與新幹線的指定席。",
  },
  {
    title: "一日遊團集合",
    body:
      "5/12 參加昇龍道一日遊團，建議比集合時間早 15 分鐘抵達，以免在巨大的名古屋車站內迷路。",
  },
  {
    title: "上高地準備",
    body:
      "5/13 的海拔較高，氣溫比名古屋低約 8-10 度，請穿著防風外套與好走的球鞋。午餐備案：上高地餐廳在下午 2 點後可能部分休息，建議在高山車站先買個飯糰或簡單輕食帶在身上。",
  },
  {
    title: "高山飯店優勢",
    body:
      "5/13 入住飛驒高山華盛頓廣場飯店，位置優越。5/14 無論選擇方案 A（巴士直達）或方案 B（鐵道轉運），都能輕鬆銜接。",
  },
  {
    title: "5/14 方案選擇",
    body:
      "方案 A：9 人需搬運 9 個大箱子上下巴士兩次，但能遊覽合掌村。方案 B：箱子直接推進火車放置區，體力耗損較小。5/11 領票時若發現巴士滿位，直接改採方案 B。",
  },
  {
    title: "金澤飯店資訊",
    body:
      "金澤托裡菲託飯店位於金澤站附近，無論方案 A 或 B，抵達後步行或短程計程車都很方便。",
  },
  {
    title: "大阪住宿",
    body:
      "5/16 入住大阪之家心齋橋雜波附近，位於心齋橋商圈，步行可達道頓堀與心齋橋購物區。",
  },
  {
    title: "上高地開山須知",
    body:
      "2026 年 4 月 17 日上高地交通開通！5/13 出發時請注意：全面禁止私家車進入；輕鬆路線：大正池→河童橋；天氣多變，務必攜帶防風外套與雨具；接駁車班次有限，建議提早確認。",
  },
];

export type AppItem = {
  name: string;
  desc: string;
  iosUrl: string;
  androidUrl: string;
};

export type AppCategory = { title: string; items: AppItem[] };

export const appCategories: AppCategory[] = [
  {
    title: "交通系 APP",
    items: [
      {
        name: "乘換案內",
        desc: "查詢最佳路線、費用、時間。支援 JR、地下鐵、新幹線、巴士、飛機等",
        iosUrl:
          "https://apps.apple.com/tw/search?term=%E4%B9%97%E6%8F%9B%E6%A1%88%E5%85%A7",
        androidUrl:
          "https://play.google.com/store/search?q=%E4%B9%97%E6%8F%9B%E6%A1%88%E5%85%A7&c=apps",
      },
      {
        name: "乘換 NAVITIME",
        desc: "轉乘資訊、時刻表、車站站內圖。無料版可查優惠券適用路線",
        iosUrl:
          "https://apps.apple.com/tw/search?term=%E4%B9%97%E6%8F%9B%20NAVITIME",
        androidUrl:
          "https://play.google.com/store/search?q=%E4%B9%97%E6%8F%9B%20NAVITIME&c=apps",
      },
      {
        name: "GO",
        desc: "日本使用率第一的叫車 APP。下雨天或大包小包時的最佳選擇",
        iosUrl: "https://apps.apple.com/tw/search?term=GO%20taxi%20japan",
        androidUrl:
          "https://play.google.com/store/search?q=GO%20taxi%20japan&c=apps",
      },
    ],
  },
  {
    title: "語言系 APP",
    items: [
      {
        name: "Google 翻譯",
        desc: "拍照翻譯、對話翻譯。支援自動偵測語言",
        iosUrl: "https://apps.apple.com/tw/search?term=Google%20Translate",
        androidUrl:
          "https://play.google.com/store/search?q=Google%20Translate&c=apps",
      },
      {
        name: "VoiceTra",
        desc: "日本官方即時翻譯 APP，支援 33 國語言",
        iosUrl: "https://apps.apple.com/tw/search?term=VoiceTra",
        androidUrl: "https://play.google.com/store/search?q=VoiceTra&c=apps",
      },
      {
        name: "Payke",
        desc: "掃描商品條碼查看介紹，藥妝、零食購物必備",
        iosUrl: "https://apps.apple.com/tw/search?term=Payke",
        androidUrl: "https://play.google.com/store/search?q=Payke&c=apps",
      },
      {
        name: "Suica",
        desc: "手機版交通 IC 卡＋電子支付",
        iosUrl: "https://apps.apple.com/tw/search?term=Mobile%20Suica",
        androidUrl:
          "https://play.google.com/store/search?q=Mobile%20Suica&c=apps",
      },
    ],
  },
  {
    title: "美食系 APP",
    items: [
      {
        name: "食べログ",
        desc: "日本最多人用的餐廳評價 APP",
        iosUrl:
          "https://apps.apple.com/tw/search?term=%E9%A3%9F%E3%81%B9%E3%83%AD%E3%82%B0",
        androidUrl:
          "https://play.google.com/store/search?q=%E9%A3%9F%E3%81%B9%E3%83%AD%E3%82%B0&c=apps",
      },
      {
        name: "ぐるなび",
        desc: "與樂天合作，消費可累積樂天點數",
        iosUrl:
          "https://apps.apple.com/tw/search?term=%E3%81%90%E3%82%8B%E3%81%AA%E3%81%B3",
        androidUrl:
          "https://play.google.com/store/search?q=%E3%81%90%E3%82%8B%E3%81%AA%E3%81%B3&c=apps",
      },
    ],
  },
  {
    title: "寄物・充電・天氣",
    items: [
      {
        name: "ecbo cloak",
        desc: "咖啡廳、郵局等店鋪寄物。信用卡付款",
        iosUrl: "https://apps.apple.com/tw/search?term=ecbo%20cloak",
        androidUrl:
          "https://play.google.com/store/search?q=ecbo%20cloak&c=apps",
      },
      {
        name: "Charge Spot",
        desc: "行動電源出租，多據點可還",
        iosUrl: "https://apps.apple.com/tw/search?term=ChargeSPOT",
        androidUrl:
          "https://play.google.com/store/search?q=ChargeSPOT&c=apps",
      },
      {
        name: "tenki.JP",
        desc: "日本氣象協會官方 APP，精準到小時級預報",
        iosUrl: "https://apps.apple.com/tw/search?term=tenki.jp",
        androidUrl: "https://play.google.com/store/search?q=tenki.jp&c=apps",
      },
    ],
  },
];

export const prepChecklist: string[] = [
  "出發前先下載所有 APP 並登錄帳號",
  "綁定信用卡或電子支付方式",
  "提前熟悉各 APP 的操作方式",
  "確保手機有足夠的儲存空間和電池容量",
  "準備行動電源或使用 Charge Spot 服務",
];
