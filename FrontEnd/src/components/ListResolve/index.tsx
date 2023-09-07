import { resolveNewPrice } from "../../types";
import { updatePriceApi } from "../../utils/api";
import ListItem from "../ListItem";

type props = {
  list: resolveNewPrice[];
  setList(list: resolveNewPrice[]): void;
};

const ListResolve = ({ list, setList }: props) => {
  const updatePrice = async () => {
    let result = await updatePriceApi(list);

    if (result == true) {
      setList([]);
    }
  };

  return (
    <div>
      {list.length > 0 && (
        <div className="p-3 m-4 border flex-row bg-slate-100 shadow-md rounded-md border-slate-400">
          <h1 className={`font-bold text-lg my-3`}>Resultado da Atualização</h1>
          {list && (
            <ul>
              {list.map((e, i) => (
                <li key={e.product_code + i}>
                  <ListItem item={e}></ListItem>
                </li>
              ))}
            </ul>
          )}
          {list.every((e) => e.success == true) && list.length > 0 && (
            <button
              onClick={() => updatePrice()}
              className={`rounded-md px-3 py-2 my-3 shadow-md hover:shadow-lg hover:bg-green-600 bg-green-400`}
            >
              Atualizar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ListResolve;
