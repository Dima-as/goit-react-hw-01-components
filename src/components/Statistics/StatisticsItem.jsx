import s from "./Statistics.module.scss";

export default function StatisticsItem({ item }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}</span>
    </li>
  );
}
