import { LinkButton } from "./Button";

function Header(props) {
  return (
    <header className="container max-w-5xl py-4 mx-auto sm:flex-row">
      <div className="flex w-full">
        <div className="flex justify-start mb-10">
          <img src="./salata.png" alt="Logo" className="w-40"></img>
        </div>
        <div className="flex flex-1 justify-end">
          {/* <Dropdown
            drpName="EN"
            options={["EN", "SP"]}
            drpStyle="Language"
            drpOptionSize={28}
          /> */}
        </div>
      </div>
      <div className="flex">
        <div>
          <h1 className="font-bold font-DMSans text-primary text-3xl">
            {props.pageName}
          </h1>
        </div>
        <div className="flex flex-1 justify-end">
          <LinkButton
            btnName={props.btnName}
            btnLink={props.btnLink}
            btnStyle="Page"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
