import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tr} key={id}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
