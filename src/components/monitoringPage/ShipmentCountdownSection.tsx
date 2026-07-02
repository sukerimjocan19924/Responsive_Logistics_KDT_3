import {
  featureCards,
  alertItems,
} from "../../mocks/shipment";
import vector19 from "../../../public/images/vector-19.svg";

export const ShipmentCountdownSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="shipment-countdown-title"
      className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[189px] bg-[#f0f7ff] px-6 md:px-40 py-10 md:py-20 w-full"
    >
      {/* 왼쪽 설명 영역 */}
      <div className="flex w-full md:w-[700px] flex-col items-start gap-9">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="inline-flex items-center rounded-3xl bg-amber-100 px-4 py-2">
            <p className="text-sm font-semibold text-amber-700">유통기한 알림</p>
          </div>
          <h2
            id="shipment-countdown-title"
            className="text-2xl md:text-[38px] font-extrabold leading-tight md:leading-[45.6px] text-sky-900"
          >
            D-day 임박 상품을
            <br />
            놓치지 않습니다
          </h2>
          <p className="text-base md:text-[17px] text-slate-500">
            유통기한 D-3부터 단계별 경보를 발송하고, LOT 단위로 즉시 대응이
            가능한 액션 링크를 제공합니다.
          </p>
          <button
            type="button"
            aria-label="유통기한 알림 설정 보기"
            className="rounded-xl border border-amber-600 bg-white px-6 md:px-9 py-3 md:py-4 text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            알림 설정 보기
          </button>
        </div>

        {/* 기능 카드 영역 */}
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex flex-col md:flex-row gap-3 self-stretch">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-1 items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 shadow"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.iconBgColor}`}
                >
                  <img src={card.iconSrc} alt={card.title} className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <h3 className="text-sm font-bold text-sky-900">{card.title}</h3>
                  <p className="text-xs text-slate-500">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* 오른쪽 알림 리스트 영역 */}
      <aside className="flex w-full md:w-auto flex-col rounded-3xl bg-white p-6 shadow">
        <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#020d1a] via-[#03294a] to-[#0c4a6e] p-7">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-sky-300">유통기한 임박 알림</h3>
            <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#ef444420] px-3 py-[5px]">
              <span className="h-1.5 w-1.5 rounded bg-red-500" />
              <span className="text-[11px] font-semibold text-red-500">127건</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {alertItems.map((item) => (
              <div
                key={`${item.name}-${item.day}`}
                className={`flex h-[50px] items-center justify-between rounded-[10px] border px-4 ${item.rowBgClass} ${item.rowBorderClass}`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.iconBgClass}`}
                  >
                    <img src={item.iconSrc} alt={item.name} className="h-4 w-4" />
                  </div>
                  <p className={`text-[13px] font-medium ${item.productTextClass}`}>
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className={`text-sm font-bold ${item.dayTextClass}`}>{item.day}</p>
                  {item.status && (
                    <div
                      className={`inline-flex items-center rounded-lg px-2 py-[3px] ${item.statusBgClass}`}
                    >
                      <span
                        className={`text-[10px] font-semibold ${item.statusTextColor}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="전체 127건 알림 보기"
            className="flex items-center justify-center gap-[5px] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <span className="text-[13px] font-medium text-amber-600">
              전체 127건 알림 보기
            </span>
            <img src={vector19} alt="" className="h-[13px] w-[13px]" />
          </button>
        </div>
      </aside>
    </section>
  );
};
