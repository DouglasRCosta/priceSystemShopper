import Header from "../../components/Header";

import FormUpdatePrice from "../../components/FormUpdatePrice";
import { useState } from "react";
import { errorResponse, resolveNewPrice } from "../../types";
import ListResolve from "../../components/ListResolve";

const Home = () => {
  const [list, setList] = useState<resolveNewPrice[] | errorResponse>([]);
  const listResolveResponse = (value: resolveNewPrice[] | errorResponse) => {
    setList(value);
  };
  return (
    <>
      <Header />
      <section className={`p-9 flex-row justify-center items-center`}>
        <FormUpdatePrice returnList={listResolveResponse} />

        {Array.isArray(list) ? (
          <ListResolve list={list} />
        ) : (
          <div>
            <h2>{list.error}</h2>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
