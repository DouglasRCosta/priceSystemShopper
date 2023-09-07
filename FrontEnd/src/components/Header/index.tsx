import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`w-full py-6 px-6 min-h-5 border border-slate-700`}>
      <div className={`container h-full flex justify-between items-center`}>
        <div>
          <Link to={"/"}>
            <img
              className={` flex h-9`}
              src="public/shopper.png"
              alt="Shooper"
            />
          </Link>
        </div>

        <div></div>
      </div>
    </header>
  );
};
export default Header;
