import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  background: #111116;
  width: 100%;
  height: 80px;

  display: flex;
`;

export const Content = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #19181f;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    margin-right: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${lighten(0.05, "#19181f")};

      > svg {
        color: #7159c1;
      }
    }

    svg {
      color: #fff;
    }
  }

  a {
    display: flex;
    align-items: center;

    div {
      margin-right: 16px;
      text-align: right;

      display: flex;
      flex-direction: column;

      strong {
        color: #fff;
        margin-bottom: 6px;
      }

      small {
        color: #87868b;
        font-size: 12px;
      }
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid #7159c1;
    }
  }
`;