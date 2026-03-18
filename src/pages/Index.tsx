import { useState } from "react";
import Icon from "@/components/ui/icon";

const SECTIONS = [
  { id: "ceremony", label: "Церемония" },
  { id: "celebration", label: "Праздник" },
  { id: "day2", label: "Второй день" },
  { id: "notes", label: "Пожелания" },
  { id: "rsvp", label: "RSVP" },
];

export default function Index() {
  const [rsvp, setRsvp] = useState({
    name: "",
    day1: "",
    day2: "",
    plus1: "",
    car: "",
    carCapacity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-body bg-[#faf8f5] text-[#2c2825] min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-sm border-b border-[#e8e0d5]">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display text-lg font-light tracking-widest text-[#8a7560]">Д & О</span>
          <div className="hidden md:flex gap-8">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-xs tracking-widest uppercase text-[#8a7560] hover:text-[#2c2825] transition-colors font-light"
              >
                {s.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("rsvp")}
            className="text-xs tracking-widest uppercase bg-[#2c2825] text-[#faf8f5] px-4 py-2 hover:bg-[#8a7560] transition-colors"
          >
            Подтвердить
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center max-w-3xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Приглашение на свадьбу
        </p>
        <div
          className="mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h1 className="font-display text-7xl md:text-9xl font-light leading-none text-[#2c2825]">
            Дмитрий
          </h1>
          <div className="flex items-center justify-center gap-6 my-4">
            <div className="h-px flex-1 bg-[#d4c4b0]" />
            <span className="font-display text-3xl italic font-light text-[#8a7560]">&amp;</span>
            <div className="h-px flex-1 bg-[#d4c4b0]" />
          </div>
          <h1 className="font-display text-7xl md:text-9xl font-light leading-none text-[#2c2825]">
            Ольга
          </h1>
        </div>
        <p
          className="font-display text-2xl italic font-light text-[#8a7560] mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          30 апреля 2026 года
        </p>
        <p
          className="text-[#6b5e50] text-base leading-relaxed max-w-lg mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Мы рады сообщить, что наступает день нашей свадьбы! Приглашаем вас разделить с нами радость этого незабываемого дня.
        </p>
        <div
          className="mt-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <button
            onClick={() => scrollTo("ceremony")}
            className="flex flex-col items-center gap-2 mx-auto text-[#8a7560] hover:text-[#2c2825] transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Подробнее</span>
            <Icon name="ChevronDown" size={20} />
          </button>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-6 max-w-3xl mx-auto px-6 py-4">
        <div className="h-px flex-1 bg-[#d4c4b0]" />
        <span className="text-[#d4c4b0]">✦</span>
        <div className="h-px flex-1 bg-[#d4c4b0]" />
      </div>

      {/* CEREMONY */}
      <section id="ceremony" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-8">
          <div className="flex-shrink-0 w-12 h-12 border border-[#d4c4b0] flex items-center justify-center">
            <Icon name="Heart" size={20} className="text-[#8a7560]" />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-3">01 — Церемония</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-[#2c2825]">Роспись</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <InfoBlock icon="Clock" label="Время" value="30 апреля 2026, 13:40" sub="Просим подойти заранее" />
              <InfoBlock icon="MapPin" label="Место" value="ЗАГС №1" sub="Комсомольская ул., 4" />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-6 max-w-3xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#e8e0d5]" />
      </div>

      {/* CELEBRATION */}
      <section id="celebration" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-8">
          <div className="flex-shrink-0 w-12 h-12 border border-[#d4c4b0] flex items-center justify-center">
            <Icon name="TreePine" size={20} className="text-[#8a7560]" />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-3">02 — Мероприятие</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-[#2c2825]">Праздник в Семёнково</h2>
            <p className="text-[#8a7560] font-display italic text-lg mb-8">Архитектурно-этнографический музей Вологодской области</p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <InfoBlock icon="Clock" label="Начало" value="14:30" sub="Длительность ~1.5 часа, до 16:00" />
              <InfoBlock icon="MapPin" label="Адрес" value="А-119, 12-й километр" sub="Вологодский муниципальный округ" />
            </div>
            <div className="bg-[#f2ede6] p-6">
              <p className="text-xs tracking-widest uppercase text-[#8a7560] mb-3">Программа</p>
              <ul className="space-y-2 text-[#6b5e50]">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Небольшой фуршет: закуски, салаты</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Безалкогольные напитки</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Прогулка по территории музея</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-6 max-w-3xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#e8e0d5]" />
      </div>

      {/* DAY 2 */}
      <section id="day2" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-8">
          <div className="flex-shrink-0 w-12 h-12 border border-[#d4c4b0] flex items-center justify-center">
            <Icon name="Flame" size={20} className="text-[#8a7560]" />
          </div>
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-3">03 — Второй день</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-[#2c2825]">«Тепеньковские зори»</h2>
            <p className="text-[#8a7560] font-display italic text-lg mb-8">1 мая 2026 года</p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <InfoBlock icon="Clock" label="Начало" value="14:00, 1 мая 2026" sub="~6–7 часов, до 20:00–21:00" />
              <InfoBlock icon="MapPin" label="Адрес" value="Территория Тепенька, 1" sub="Деревня Борилово, гриль-беседка" />
            </div>
            <div className="bg-[#f2ede6] p-6">
              <p className="text-xs tracking-widest uppercase text-[#8a7560] mb-3">Программа</p>
              <ul className="space-y-2 text-[#6b5e50]">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Шашлык, плов, овощи-гриль</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Игры и общение на природе</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Кальян</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#8a7560] rounded-full flex-shrink-0" />Безалкогольный формат (алкоголь — с собой или заранее сообщите)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-6 max-w-3xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#e8e0d5]" />
      </div>

      {/* NOTES */}
      <section id="notes" className="py-20 px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-3">04 — Пожелания</p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-12 text-[#2c2825]">Несколько просьб</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <NoteCard
            icon="Shirt"
            title="Дресс-код"
            text="Дресс-кода нет — главное, чтобы вам было комфортно. Можно чуть торжественно :)"
          />
          <NoteCard
            icon="Heart"
            title="«Горько!»"
            text="Просим воздержаться от криков «Горько» — поцелуй не может быть по заказу, это знак искренних чувств."
          />
          <NoteCard
            icon="Wine"
            title="Алкоголь"
            text="Формат второго дня — безалкогольный. Если хотите взять с собой — сообщите нам заранее."
          />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-6 max-w-3xl mx-auto px-6 py-4">
        <div className="h-px flex-1 bg-[#d4c4b0]" />
        <span className="text-[#d4c4b0]">✦</span>
        <div className="h-px flex-1 bg-[#d4c4b0]" />
      </div>

      {/* RSVP */}
      <section id="rsvp" className="py-20 px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-3">05 — Подтверждение</p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4 text-[#2c2825]">Ваш ответ</h2>
        <p className="text-[#6b5e50] mb-12 leading-relaxed">
          Нам очень важно знать точное количество гостей. Пожалуйста, подтвердите своё присутствие как можно скорее.
        </p>

        {submitted ? (
          <div className="text-center py-16 border border-[#d4c4b0]">
            <div className="w-12 h-12 border border-[#8a7560] flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={20} className="text-[#8a7560]" />
            </div>
            <h3 className="font-display text-3xl font-light text-[#2c2825] mb-3">Спасибо!</h3>
            <p className="text-[#8a7560]">Ваш ответ получен. Ждём вас на нашей свадьбе!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#8a7560] mb-3">Ваше имя</label>
              <input
                type="text"
                required
                value={rsvp.name}
                onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}
                placeholder="Иван Иванов"
                className="w-full border-b border-[#d4c4b0] bg-transparent py-3 text-[#2c2825] placeholder:text-[#c0b09a] focus:outline-none focus:border-[#8a7560] transition-colors"
              />
            </div>

            {/* Day 1 */}
            <ChoiceField
              label="Первый день — 30 апреля"
              value={rsvp.day1}
              options={[{ val: "yes", label: "Буду" }, { val: "no", label: "Не смогу" }]}
              onChange={(v) => setRsvp({ ...rsvp, day1: v })}
            />

            {/* Day 2 */}
            <ChoiceField
              label="Второй день — 1 мая"
              value={rsvp.day2}
              options={[{ val: "yes", label: "Буду" }, { val: "no", label: "Не смогу" }]}
              onChange={(v) => setRsvp({ ...rsvp, day2: v })}
            />

            {/* Plus 1 */}
            <ChoiceField
              label="Будет сопровождающий +1?"
              value={rsvp.plus1}
              options={[{ val: "yes", label: "Да" }, { val: "no", label: "Нет" }]}
              onChange={(v) => setRsvp({ ...rsvp, plus1: v })}
            />

            {/* Car */}
            <div>
              <ChoiceField
                label="Будете на машине?"
                value={rsvp.car}
                options={[{ val: "yes", label: "Да" }, { val: "no", label: "Нет" }]}
                onChange={(v) => setRsvp({ ...rsvp, car: v })}
              />
              {rsvp.car === "yes" && (
                <div className="mt-4">
                  <input
                    type="text"
                    value={rsvp.carCapacity}
                    onChange={(e) => setRsvp({ ...rsvp, carCapacity: e.target.value })}
                    placeholder="Сколько мест можете предложить другим гостям?"
                    className="w-full border-b border-[#d4c4b0] bg-transparent py-3 text-[#2c2825] placeholder:text-[#c0b09a] focus:outline-none focus:border-[#8a7560] transition-colors text-sm"
                  />
                </div>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#8a7560] mb-3">
                Пожелания или вопросы (необязательно)
              </label>
              <textarea
                value={rsvp.message}
                onChange={(e) => setRsvp({ ...rsvp, message: e.target.value })}
                rows={3}
                placeholder="Напишите нам что-нибудь..."
                className="w-full border-b border-[#d4c4b0] bg-transparent py-3 text-[#2c2825] placeholder:text-[#c0b09a] focus:outline-none focus:border-[#8a7560] transition-colors resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c2825] text-[#faf8f5] py-4 text-xs tracking-widest uppercase hover:bg-[#8a7560] transition-colors"
            >
              Подтвердить присутствие
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e8e0d5] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl font-light text-[#2c2825] mb-2">Дмитрий & Ольга</p>
          <p className="font-display italic text-[#8a7560] mb-8">30 апреля 2026</p>
          <p className="text-xs tracking-widest uppercase text-[#8a7560]">Ждём вас!</p>
        </div>
      </footer>
    </div>
  );
}

function InfoBlock({
  icon,
  label,
  value,
  sub,
}: {
  icon: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <Icon name={icon} fallback="Circle" size={16} className="text-[#8a7560]" />
      </div>
      <div>
        <p className="text-xs tracking-widest uppercase text-[#8a7560] mb-1">{label}</p>
        <p className="text-[#2c2825] font-medium">{value}</p>
        <p className="text-[#8a7560] text-sm mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function NoteCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-[#e8e0d5] p-6">
      <div className="w-8 h-8 border border-[#d4c4b0] flex items-center justify-center mb-4">
        <Icon name={icon} fallback="Info" size={14} className="text-[#8a7560]" />
      </div>
      <p className="text-xs tracking-widest uppercase text-[#8a7560] mb-3">{title}</p>
      <p className="text-[#6b5e50] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ChoiceField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { val: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-[#8a7560] mb-4">{label}</label>
      <div className="flex gap-4">
        {options.map((opt) => (
          <button
            key={opt.val}
            type="button"
            onClick={() => onChange(opt.val)}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                value === opt.val
                  ? "border-[#2c2825] bg-[#2c2825]"
                  : "border-[#d4c4b0] group-hover:border-[#8a7560]"
              }`}
            >
              {value === opt.val && (
                <Icon name="Check" size={10} className="text-[#faf8f5]" />
              )}
            </div>
            <span className="text-[#2c2825] text-sm">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}