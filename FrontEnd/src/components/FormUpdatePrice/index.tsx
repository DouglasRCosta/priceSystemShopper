import { useRef } from "react";
import { updatePriceByCsv } from "../../utils/api";

import { errorResponse, resolveNewPrice } from "../../types";
type props = {
  returnList(value: resolveNewPrice[]| errorResponse): void;
};

const FormUpdatePrice = ({ returnList }: props) => {
  const formData = new FormData();
  const fileRef = useRef<HTMLInputElement>(null);

  const sendFileHandle = async () => {
    if (fileRef.current?.files) {
      formData.append("file", fileRef.current.files[0]);
      let result: resolveNewPrice[]| errorResponse = await updatePriceByCsv(formData);
  
      if (result) {
        returnList(result);
      
      }
    }
  };
  return (
    <>
      <fieldset className={`border w-full border-gray-700 p-6`}>
        <legend className={`text-xl bold mx-5`}>Atualização de preços</legend>
        <p>Carregue um arquivo .csv</p>
        <input ref={fileRef} type="file" name="file" />
        <br />
        <button
          className={`rounded-md px-3 py-2 my-3 shadow-md hover:shadow-lg hover:bg-green-600 bg-green-400`}
          onClick={() => sendFileHandle()}
        >
          Validar
        </button>
      </fieldset>
    </>
  );
};
export default FormUpdatePrice;
