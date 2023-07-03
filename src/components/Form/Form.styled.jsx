import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  outline: none;

  &:hover {
    color: #476fff;
    border: 2px solid #476fff;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: #476fff;
    border: 2px solid #476fff;
  }
`;
