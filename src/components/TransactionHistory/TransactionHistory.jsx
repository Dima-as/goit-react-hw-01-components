import PropTypes from "prop-types";
import s from "./TransactionHistory.module.scss";
import TransactionHistoryItem from "./TransactionHistoryItem";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => (
        <TransactionHistoryItem key={item.id} item={item} />
      ))}
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
