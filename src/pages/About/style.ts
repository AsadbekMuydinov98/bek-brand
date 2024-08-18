import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 20px 200px;

.about-header, .our-story, .mission-vision, .values, .team, .testimonials, .contact {
  margin-bottom: 40px;
}

.about-header {
  text-align: center;
}

.values ul {
  list-style-type: none;
  padding: 0;
}

.values ul li {
  margin: 10px 0;
}

.team .ant-card-cover img {
  height: 200px;
  object-fit: cover;
}

.testimonials .ant-card {
  margin-bottom: 20px;
}

@media (max-width: 567px) {
  padding: 20px 20px;
}

`