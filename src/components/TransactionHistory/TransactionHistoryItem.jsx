import s from "./TransactionHistory.module.scss";
export default function TransactionHistoryItem({ item }) {
  return (
    <tbody className={s.tbody}>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
  );
}
