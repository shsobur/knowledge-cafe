import profile from "../../assets/images/profile.png";

const Header = () => {

  return (

    <div className="flex justify-between items-center m-2 p-2 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge cafe</h1>
      <img src={profile}></img>
    </div>

  );

};

export default Header;
