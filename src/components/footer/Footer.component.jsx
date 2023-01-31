import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <p>© 2023 Matrimony. All rights reserved.</p>
      <Link to={"/admin"}>go admin</Link>
    </div>
  );
};
export default Footer;
