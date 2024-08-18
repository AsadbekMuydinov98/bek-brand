import React from "react";
import { Row } from "antd";
import Information from "./Information";
import Service from "./Service";
import Account from "./Account";
import Offers from "./Offers";

interface Link {
  href: string;
  text: string;
}

interface LinksProps {
  links: Link[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <Row>
      <Information links={links} />
      <Service links={links} />
      <Account links={links} />
      <Offers links={links} />
    </Row>
  );
};

export default Links;
