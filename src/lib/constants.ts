import {
  Atom02Icon,
  Certificate01Icon,
  HealtcareIcon,
  ManIcon,
} from "@hugeicons/core-free-icons"
import DumbellAsset from "@/assets/dumbell.webp"
import LoseWeightAsset from "@/assets/lose-weight.webp"
import LaptopAsset from "@/assets/laptop.webp"
import FunctionTrainingAsset from "@/assets/workout.webp"

export const ADVANTAGES = [
  {
    title: "Сертифицированный персональный тренер",
    description:
      "Профессиональная квалификация, подтвержденная сертификатами. Тренировки строятся на безопасных и актуальных стандартах фитнеса.",
    icon: Certificate01Icon,
  },
  {
    title: "Индивидуальный подход",
    description:
      "Персональная программа под ваши цели, график и уровень подготовки - без шаблонных схем.",
    icon: ManIcon,
  },
  {
    title: "Наука и практика",
    description:
      "Эффективные методики на стыке науки и опыта. Максимальный результат без вреда для здоровья и суставов.",
    icon: Atom02Icon,
  },
  {
    title: "Поддержка и контроль прогресса",
    description:
      "Постоянная мотивация, регулярные замеры и своевременная корректировка нагрузки на каждом этапе.",
    icon: HealtcareIcon,
  },
] as const

export const WORKOUT_PLANS = [
  {
    title: "Силовые тренировки",
    description: "Увеличение силы, мышечной массы и общей производительности.",
    image: DumbellAsset,
  },
  {
    title: "Снижение веса",
    description:
      "Эффективные тренировки и питание для снижения веса и жиросжигания.",
    image: LoseWeightAsset,
  },
  {
    title: "Функциональный тренинг",
    description: "Развитие силы, выносливости, мобильности и координации.",
    image: FunctionTrainingAsset,
  },
  {
    title: "Онлайн-тренировки",
    description: "Тренируйтесь где угодно. Я рядом, даже онлайн.",
    image: LaptopAsset,
  },
] as const

export const PRICES = [
  {
    planName: "БАЗОВЫЙ",
    description: "Для начала индивидуальных тренировок",
    price: 89000,
    billingCycle: "/ месяц",
    variant: "default",
    isCurrentPlan: false,
    buttonText: "НАЧАТЬ",
    href: "/start",
    features: [
      "4 тренировки в месяц",
      "Индивидуальная программа",
      "Базовые рекомендации по питанию",
      "Поддержка в течение месяца",
    ],
  },
  {
    planName: "ПРОДВИНУТЫЙ",
    description: "Больше тренировок и постоянная поддержка",
    price: 149000,
    billingCycle: "/ месяц",
    variant: "popular",
    isCurrentPlan: false,
    buttonText: "НАЧАТЬ",
    href: "/start",
    features: [
      "8 тренировок в месяц",
      "Персональная программа тренировок",
      "Рекомендации по питанию",
      "Регулярная корректировка программы",
      "Приоритетная поддержка",
      "Отслеживание прогресса",
    ],
  },
  {
    planName: "ПРЕМИУМ",
    description: "Максимально персональный подход",
    price: 199000,
    billingCycle: "/ месяц",
    variant: "default",
    isCurrentPlan: false,
    buttonText: "НАЧАТЬ",
    href: "/start",
    features: [
      "12 тренировок в месяц",
      "Полностью индивидуальный подход",
      "Персональный план питания",
      "Приоритетная поддержка",
      "Постоянный контроль прогресса",
      "Регулярные консультации",
    ],
  },
] as const

export const REVIEWS = [
  {
    name: "Алексей",
    username: "@alexey",
    body: "Тренировки полностью изменили мой подход к спорту. За пару месяцев стал сильнее, выносливее и увереннее в себе.",
    img: "https://avatar.vercel.sh/alexey",
  },
  {
    name: "Мария",
    username: "@maria",
    body: "Очень грамотный тренер! Всё объясняет простым языком и всегда подсказывает, как правильно выполнять упражнения.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Дмитрий",
    username: "@dmitry",
    body: "Результат превзошёл ожидания. Наконец-то начал видеть прогресс и перестал бросать тренировки через пару недель.",
    img: "https://avatar.vercel.sh/dmitry",
  },
  {
    name: "Анна",
    username: "@anna",
    body: "Понравился индивидуальный подход. Программа действительно составлена под мои цели и уровень подготовки.",
    img: "https://avatar.vercel.sh/anna",
  },
  {
    name: "Иван",
    username: "@ivan",
    body: "После первого месяца уже заметил изменения. Стало больше энергии, а тренировки перестали казаться скучной рутиной.",
    img: "https://avatar.vercel.sh/ivan",
  },
  {
    name: "Екатерина",
    username: "@ekaterina",
    body: "Очень довольна результатом! Тренер всегда на связи, поддерживает и помогает не потерять мотивацию.",
    img: "https://avatar.vercel.sh/ekaterina",
  },
  {
    name: "Максим",
    username: "@maxim",
    body: "Отличная программа и понятные рекомендации. За несколько месяцев заметно улучшилась форма и техника упражнений.",
    img: "https://avatar.vercel.sh/maxim",
  },
  {
    name: "Ольга",
    username: "@olga",
    body: "Раньше постоянно откладывала спорт на потом. Сейчас тренировки стали частью моего расписания, и мне это действительно нравится.",
    img: "https://avatar.vercel.sh/olga",
  },
  {
    name: "Сергей",
    username: "@sergey",
    body: "Профессиональный подход без лишней воды. Каждая тренировка имеет цель, и прогресс действительно ощущается.",
    img: "https://avatar.vercel.sh/sergey",
  },
  {
    name: "Наталья",
    username: "@natalya",
    body: "Спасибо за мотивацию и поддержку! Даже в дни, когда совсем не хотелось заниматься, тренер помогал не сбиться с курса.",
    img: "https://avatar.vercel.sh/natalya",
  },
  {
    name: "Артём",
    username: "@artem",
    body: "Очень крутой опыт. Наконец понял, как правильно тренироваться и почему раньше не видел результата.",
    img: "https://avatar.vercel.sh/artem",
  },
  {
    name: "Виктория",
    username: "@victoria",
    body: "Мне понравилось абсолютно всё: программа, обратная связь и отношение тренера. Чувствуется настоящий индивидуальный подход.",
    img: "https://avatar.vercel.sh/victoria",
  },
  {
    name: "Роман",
    username: "@roman",
    body: "Результаты появились намного быстрее, чем я ожидал. Главное - тренер объясняет не только что делать, но и зачем.",
    img: "https://avatar.vercel.sh/roman",
  },
  {
    name: "Дарья",
    username: "@darya",
    body: "Отличный тренер и отличная атмосфера. Стало намного легче придерживаться режима и не пропускать тренировки.",
    img: "https://avatar.vercel.sh/darya",
  },
  {
    name: "Михаил",
    username: "@mikhail",
    body: "Если вы хотите наконец-то увидеть результат от тренировок - очень рекомендую. Всё структурировано и понятно.",
    img: "https://avatar.vercel.sh/mikhail",
  },
  {
    name: "София",
    username: "@sofia",
    body: "За короткое время я стала чувствовать себя намного лучше. Больше сил, лучше сон и главное - появилась уверенность в себе.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Андрей",
    username: "@andrey",
    body: "Очень удобный формат тренировок. Получаешь чёткий план и понимаешь, что делать на каждом этапе.",
    img: "https://avatar.vercel.sh/andrey",
  },
  {
    name: "Полина",
    username: "@polina",
    body: "Я думала, что спорт просто не для меня. Но с правильным подходом тренировки стали одной из моих любимых частей недели.",
    img: "https://avatar.vercel.sh/polina",
  },
  {
    name: "Кирилл",
    username: "@kirill",
    body: "Тренер реально заинтересован в результате. Всегда получаетесь подробную обратную связь и понимаешь, над чем работать дальше.",
    img: "https://avatar.vercel.sh/kirill",
  },
  {
    name: "Елена",
    username: "@elena",
    body: "Очень рада, что решила начать именно с этим тренером. Всё профессионально, спокойно и без экстремальных нагрузок.",
    img: "https://avatar.vercel.sh/elena",
  },
] as const
