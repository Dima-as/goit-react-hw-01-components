import PropTypes from "prop-types";
import s from "./Statistics.module.scss";
import StatisticsItem from "./StatisticsItem";
export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2>{title}</h2>
      <ul className={s.list}>
        {stats.map((stat) => (
          <StatisticsItem key={stat.id} item={stat} />
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
