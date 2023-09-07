import { resolveNewPrice } from "../../types";

type props = {
  item: resolveNewPrice;
};
const ListItem = ({ item }: props) => {
  return (
    <div
      className={`p-3 border rounded-md my-2 ${
        item.success
          ? "border-green-400  bg-green-50"
          : "border-red-400  bg-red-50"
      }  `}
    >
      <div className={`flex-row md:flex md:justify-between  `}>
        <div className={`md:mr-4 mb-2 flex-1`}>Código:{item.product_code}</div>
        <div className={`md:mr-4 mb-2 flex-1`}>Produto: {item.name}</div>
        <div className={`md:mr-4 mb-2 flex-1`}>Valor atual: R${item.sales_price}</div>
        <div className={`md:mr-4 mb-2 flex-1`}>Valor solicitado: R${item.new_price}</div>
        {(item.success)&& 'Valor Validado com sucesso.'}
        {!item.success && (
          <ul>
            Problemas:
            {item.problems.map((e, i) => (
              <li className=" ml-2 list-disc" key={i + 1}>{e}</li>
            ))}
          </ul>
        )}
      </div>
      <div>

      </div>
    </div>
  );
};
export default ListItem;
