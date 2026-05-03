import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Map,
  MapPin,
  Sparkles,
  Train,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  appCategories,
  days,
  prepChecklist,
  routeCities,
  travelNotes,
  tripMeta,
  type JrPassNight,
  type MiniRouteStep,
  type ScheduleItem,
  type TripDay,
  type TripDayBlock,
} from "@/data/chubu-trip";

function ScheduleList({ items }: { items: ScheduleItem[] }) {
  return (
    <ul className="space-y-8">
      {items.map((item) => (
        <li key={item.title + (item.time ?? "")} className="relative pl-0">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-6">
            {item.time ? (
              <p className="shrink-0 text-sm font-semibold tracking-wide text-amber-800/90 tabular-nums sm:w-36">
                {item.time}
              </p>
            ) : null}
            <div className="min-w-0 flex-1 border-l-2 border-amber-200/80 pl-4 sm:border-l-0 sm:pl-0">
              <h4 className="text-base font-semibold text-stone-900">
                {item.title}
              </h4>
              {item.bullets && item.bullets.length > 0 ? (
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-600">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500/80" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function JrPassCard({ data }: { data: JrPassNight }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-orange-200/80 bg-gradient-to-br from-orange-50 via-white to-amber-50/60 shadow-sm ring-1 ring-orange-100">
      <div className="border-b border-orange-100 bg-orange-500/10 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-900/70">
          重要任務
        </p>
        <h3 className="mt-1 flex items-center gap-2 text-lg font-bold text-orange-950">
          <span aria-hidden>🔥</span>
          {data.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-orange-950/80">
          {data.intro}
        </p>
      </div>
      <div className="grid gap-6 px-5 py-5 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-stone-800">
            交通節點車站名稱（中英對照）
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {data.stations.map((s) => (
              <div
                key={s.en}
                className="rounded-lg border border-stone-100 bg-white/80 px-3 py-2"
              >
                <div className="font-medium text-stone-900">{s.ja}</div>
                <div className="text-xs text-stone-500">{s.en}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-stone-800">
            5 段指定席預約清單（優先順序）
          </h4>
          <ul className="space-y-3">
            {data.reserves.map((r) => (
              <li
                key={r.order}
                className="rounded-xl border border-stone-100 bg-white/90 p-3 text-sm shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-amber-800">
                    {r.order}
                  </span>
                  <span className="text-xs text-stone-500">{r.date}</span>
                </div>
                <div className="mt-1 font-medium text-stone-900">{r.route}</div>
                <div className="text-xs text-stone-600">{r.train}</div>
                <div className="mt-1 text-xs text-amber-900/80">
                  {r.timeNote}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-4 border-t border-orange-100 bg-white/50 px-5 py-5">
        <h4 className="text-sm font-semibold text-stone-800">
          9 人團體劃位「必勝策略」
        </h4>
        <ul className="space-y-2 text-sm leading-relaxed text-stone-700">
          {data.strategies.map((s) => (
            <li key={s} className="flex gap-2">
              <Train className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RouteMini({
  title,
  steps,
  footnote,
}: {
  title: string;
  steps: MiniRouteStep[];
  footnote?: string;
}) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50/40 p-5">
      <h4 className="mb-4 flex items-center gap-2 font-semibold text-sky-950">
        <Map className="h-5 w-5 text-sky-600" />
        {title}
      </h4>
      <div className="grid gap-3 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-white bg-white/90 p-4 shadow-sm"
          >
            <div className="text-2xl">{s.emoji}</div>
            <div className="mt-2 font-medium text-stone-900">{s.title}</div>
            <p className="mt-1 text-sm text-stone-600">{s.desc}</p>
          </div>
        ))}
      </div>
      {footnote ? (
        <p className="mt-4 text-sm leading-relaxed text-stone-600">{footnote}</p>
      ) : null}
    </div>
  );
}

function TwoPlans({
  titleA,
  titleB,
  bodyA,
  bodyB,
}: {
  titleA: string;
  titleB: string;
  bodyA: string[];
  bodyB: string[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
        <h4 className="font-semibold text-emerald-950">{titleA}</h4>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-emerald-950/85">
          {bodyA.map((line) => (
            <li key={line} className="flex gap-2">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
        <h4 className="font-semibold text-indigo-950">{titleB}</h4>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-indigo-950/85">
          {bodyB.map((line) => (
            <li key={line} className="flex gap-2">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BlockRenderer({ block }: { block: TripDayBlock }): ReactNode {
  switch (block.kind) {
    case "schedule":
      return <ScheduleList items={block.items} />;
    case "jrPass":
      return <JrPassCard data={block.data} />;
    case "routeMini":
      return (
        <RouteMini
          title={block.title}
          steps={block.steps}
          footnote={block.footnote}
        />
      );
    case "twoColumnPlans":
      return (
        <TwoPlans
          titleA={block.titleA}
          titleB={block.titleB}
          bodyA={block.bodyA}
          bodyB={block.bodyB}
        />
      );
    case "note":
      return (
        <div className="rounded-2xl border border-stone-200 bg-stone-50/80 px-5 py-4">
          <h4 className="flex items-center gap-2 font-semibold text-stone-900">
            {block.emoji ? <span>{block.emoji}</span> : null}
            {block.title}
          </h4>
          {block.lines.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              {block.lines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    case "appsHint":
      return (
        <div className="rounded-2xl border border-amber-100 bg-amber-50/60 px-5 py-4 text-sm leading-relaxed text-amber-950/85">
          <ul className="space-y-2">
            {block.lines.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function DaySection({ day }: { day: TripDay }) {
  return (
    <section
      id={`day-${day.day}`}
      className="scroll-mt-24 rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm ring-1 ring-stone-100 sm:p-8"
    >
      <header className="flex flex-col gap-2 border-b border-stone-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-lg font-bold text-white shadow-md">
            {day.day}
          </span>
          <div>
            <p className="text-sm font-medium text-stone-500">
              {day.date}（{day.weekday}）
            </p>
            <h3 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
              {day.headline}
            </h3>
          </div>
        </div>
      </header>

      {day.lead ? (
        <p className="mt-4 text-sm text-stone-600">{day.lead}</p>
      ) : null}

      <div className="mt-6 space-y-8">
        {day.blocks.map((block, i) => (
          <div key={i}>
            <BlockRenderer block={block} />
          </div>
        ))}
      </div>

      {day.accommodation ? (
        <div className="mt-8 flex gap-3 rounded-2xl border border-violet-100 bg-violet-50/50 px-4 py-4">
          <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-800/80">
              住宿
            </p>
            <p className="mt-1 font-medium text-stone-900">
              {day.accommodation.name}
            </p>
          </div>
        </div>
      ) : null}

      {day.footerNote ? (
        <p className="mt-4 text-sm leading-relaxed text-stone-600">
          {day.footerNote}
        </p>
      ) : null}
    </section>
  );
}

export function TripItinerary() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-stone-50 to-sky-50/60">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <header className="relative overflow-hidden rounded-3xl border border-white/70 text-center shadow-xl ring-1 ring-amber-100/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/japan-hero.png')" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/65 to-white/90"
            aria-hidden
          />
          <div className="relative px-4 py-12 sm:px-8 sm:py-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900/80 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              日本中部・北陸 7天6夜旅遊行程
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 drop-shadow-sm sm:text-5xl">
              {tripMeta.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-amber-900 shadow-sm ring-1 ring-amber-100">
                {tripMeta.duration}
              </span>
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200/80">
                {tripMeta.dateRange}
              </span>
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200/80">
                {tripMeta.cityCount}
              </span>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
              {tripMeta.subtitle}
            </p>
          </div>
        </header>

        <section className="mt-14" aria-labelledby="route-heading">
          <h2
            id="route-heading"
            className="flex items-center gap-2 text-lg font-bold text-stone-900"
          >
            <MapPin className="h-5 w-5 text-amber-600" />
            旅遊路線圖
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <img
              src="/images/chubu-route-map.png"
              alt="日本中部與北陸旅遊路線圖"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {routeCities.map((city, idx) => (
              <div key={city} className="flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-stone-800 shadow-sm ring-1 ring-stone-200/80">
                  {city}
                </span>
                {idx < routeCities.length - 1 ? (
                  <ChevronRight
                    className="hidden h-4 w-4 text-stone-400 sm:block"
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-10">
          {days.map((d) => (
            <DaySection key={d.day} day={d} />
          ))}
        </div>

        <section className="mt-16" aria-labelledby="notes-heading">
          <h2
            id="notes-heading"
            className="text-lg font-bold text-stone-900"
          >
            旅行小筆記
          </h2>
          <div className="mt-6 space-y-4">
            {travelNotes.map((n) => (
              <article
                key={n.title}
                className="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-sm"
              >
                <h3 className="font-semibold text-stone-900">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {n.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="prep-heading">
          <h2 id="prep-heading" className="text-lg font-bold text-stone-900">
            旅遊準備
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            出發前必備多款 APP，讓日本之旅更順利、更便利。
          </p>
          <div className="mt-8 space-y-10">
            {appCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-base font-semibold text-stone-800">
                  {cat.title}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {cat.items.map((app) => (
                    <div
                      key={app.name}
                      className="rounded-2xl border border-stone-100 bg-white/95 p-4 shadow-sm"
                    >
                      <div className="font-medium text-stone-900">
                        {app.name}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-stone-600">
                        {app.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={app.iosUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                          iOS 下載
                        </a>
                        <a
                          href={app.androidUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100"
                        >
                          Android 下載
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50/60 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-amber-950">
              <span>💡</span> 出發前準備提醒
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-amber-950/90">
              {prepChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-16 border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
          <p>
            版型與行程結構參考{" "}
            <a
              className="font-medium text-amber-800 underline underline-offset-2 hover:text-amber-950"
              href={tripMeta.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Manus 行程頁
            </a>
          </p>
          <p className="mt-2">
            本頁由 Next.js + Tailwind 製作，內容請自行核對時刻與訂位資訊。
          </p>
        </footer>
      </div>
    </div>
  );
}
