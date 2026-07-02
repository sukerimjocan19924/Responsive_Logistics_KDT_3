import s2fi1 from "../../public/images/s2fi1.svg";
import vector5 from "../../public/images/vector-5.svg";
import vector8 from "../../public/images/vector-8.svg";
import vector10 from "../../public/images/vector-10.svg";
import vector13 from "../../public/images/vector-13.svg";
import vector15 from "../../public/images/vector-15.svg";
import vector17 from "../../public/images/vector-17.svg";

type FeatureCard = {
  title: string;
  description: string;
  iconSrc: string;
  iconBgColor: string;
};

type AlertItem = {
  name: string;
  day: string;
  status?: string;
  statusTextColor?: string;
  statusBgClass?: string;
  rowBgClass: string;
  rowBorderClass: string;
  productTextClass: string;
  dayTextClass: string;
  iconBgClass: string;
  iconSrc: string;
};

export const featureCards: FeatureCard[] = [
  {
    title: "3단계 D-day 경보",
    description: "D-3 주의 / D-1 경고 / D-0 긴급",
    iconSrc: s2fi1,
    iconBgColor: "bg-red-50",
  },
  {
    title: "LOT 단위 추적",
    description: "LOT번호별 클릭 즉시 상세 확인",
    iconSrc: vector5,
    iconBgColor: "bg-rose-50",
  },
  {
    title: "다채널 알림 발송",
    description: "SMS·앱 푸시·이메일 동시 전송",
    iconSrc: vector8,
    iconBgColor: "bg-blue-50",
  },
];

export const alertItems: AlertItem[] = [
  {
    name: "냉동 참치 (LOT#2847)",
    day: "D-1",
    status: "긴급",
    statusTextColor: "text-red-500",
    statusBgClass: "bg-[#ef444420]",
    rowBgClass: "bg-[#ef444412]",
    rowBorderClass: "border-[#ef444428]",
    productTextClass: "text-white",
    dayTextClass: "text-red-500",
    iconBgClass: "bg-red-100",
    iconSrc: vector10,
  },
  {
    name: "냉장 우유 (LOT#3142)",
    day: "D-2",
    status: "경고",
    statusTextColor: "text-amber-500",
    statusBgClass: "bg-[#f59e0b18]",
    rowBgClass: "bg-[#f59e0b10]",
    rowBorderClass: "border-[#f59e0b20]",
    productTextClass: "text-white",
    dayTextClass: "text-amber-500",
    iconBgClass: "bg-amber-100",
    iconSrc: vector13,
  },
  {
    name: "냉장 연어 (LOT#2991)",
    day: "D-3",
    rowBgClass: "bg-[#fcd34d0a]",
    rowBorderClass: "border-[#fcd34d18]",
    productTextClass: "text-white",
    dayTextClass: "text-amber-300",
    iconBgClass: "bg-yellow-100",
    iconSrc: vector15,
  },
  {
    name: "냉동 연어필렛 (LOT#3301)",
    day: "D-5",
    rowBgClass: "bg-[#ffffff08]",
    rowBorderClass: "border-[#ffffff15]",
    productTextClass: "text-sky-300",
    dayTextClass: "text-sky-300",
    iconBgClass: "bg-sky-100",
    iconSrc: vector17,
  },
];
