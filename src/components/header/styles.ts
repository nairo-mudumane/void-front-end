import styled from "styled-components";

export const StyledHeader = styled.div`
  margin-bottom: 1rem;

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 1rem;
  }

  .title {
      font-size: 2.5em;
      font-weight: 600;
      color: #0F001A;
  }

  .link {
      color: #0F001A;
      font-size: 2em;
  }
`;
