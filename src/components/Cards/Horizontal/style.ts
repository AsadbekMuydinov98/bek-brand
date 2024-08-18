import styled from "styled-components";

export const Horizontal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 5rem 2rem;
  padding: 0 1rem;
  border-radius: 10px;

  .horizontal-card-tag {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .horizontal-card-content {
    display: flex;
    gap: 10px;
  }

  .horizontal-image img {
    max-width: 250px;
    border-radius: 10px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .horizontal-details {
    flex: 1;
  }

  .horizontal-pricing {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .horizontal-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  @media (min-width: 568px) and (max-width: 992px) {
    margin: 0 2rem 1rem;
  }

  @media (max-width: 567px) {
    margin: 1rem;
    .horizontal-card{
      width: 50%;
      margin: 10px auto;
      padding: 0px;
      border-radius: 0px;
    }
    .horizontal-image img {
    max-width: 50px;
  }
    .horizontal-card-content {
      display: flex;
      flex-direction: column;
    }
  }
`