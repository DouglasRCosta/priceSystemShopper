import Header from "../../components/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className={` w-screen h-screen flex justify-center items-center`}>
        <h1 className={`text-lg`}>Página não encontrado! </h1>;
      </div>
    </div>
  );
};

export default NotFound;
