import { resolveNewPrice } from "../../types";

type props = {
  item: resolveNewPrice;
};
const ListItem = ({ item }: props) => {
  return (
    <div
      className={`p-3 border rounded-md my-2 flex-row bg-slate-50 shadow-md  `}
    >
      <div>
        {item.success ? (
          <p className={`font-bold text-green-400`}> Preço Aprovado </p>
        ) : (
          <p className={`font-bold text-red-500`}> Preço Reprovado </p>
        )}
      </div>
      <hr></hr>
      <div className={`flex-row md:flex md:justify-between `}>
        <div className={`md:mr-4 mb-2 flex-1`}>Código:{item.product_code}</div>
        <div className={`md:mr-4 mb-2 flex-1`}>Produto: {item.name}</div>
        <div className={`md:mr-4 mb-2 flex-1`}>
          Valor atual: R${item.sales_price}
        </div>
        <div className={`md:mr-4 mb-2 flex-1`}>
          Valor solicitado: R${item.new_price}
        </div>
        {item.success && "Valor Validado com sucesso."}
        {!item.success && (
          <ul>
            Motivos da Reprova:
            {item.problems.map((e, i) => (
              <li className=" ml-2 list-disc" key={i + 1}>
                {e}
              </li>
            ))}
          </ul>
        )}
      </div>
      {Array.isArray(item.packs) && (
        <>
          <hr />
          <ul>
            {item.packs.map((e, i) => (
              <li key={i}>
                <p className={`text-blue-400`}>pack:</p>
                <div className={`flex `}>
                  <div className={`mr-3`}>Código: {e.code}</div>
                  <div className={`mr-3`}>Nome: {e.name}</div>
                  <div className={`mr-3`}>Preço Atual: {e.sales_price}</div>
                  <div className={`mr-3`}>Preço Solicitado:{e.new_price}</div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default ListItem;
