import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
`;
export const SelectedText = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: bolder;
`;
