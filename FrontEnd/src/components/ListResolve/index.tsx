import { resolveNewPrice } from "../../types";
import ListItem from "../ListItem";

type props = {
  list: resolveNewPrice[];
};
const ListResolve = ({ list }: props) => {
  return (
    <div className="p-3 m-4 border flex-row  rounded-md border-slate-400">
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
        <button>Atualizar</button>
      )}
    </div>
  );
};

export default ListResolve;
