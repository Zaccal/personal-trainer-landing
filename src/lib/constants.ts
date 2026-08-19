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
      "Персональная программа под ваши цели, график и уровень подготовки — без шаблонных схем.",
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
