import { Row } from "antd"
import Information from "./Information";
import Service from "./Service";
import Account from "./Account";
import Offers from "./Offers";


const Links = ({links}) => {
  return (
    <Row>
      <Information links={links} />
      <Service links={links} />
      <Account links={links} />
      <Offers links={links} />
    </Row>
  )
}

export default Links
