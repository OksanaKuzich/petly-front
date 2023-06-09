import styled from 'styled-components';
import deleteUserPet from 'staticImages/userPage/deleteUserPet.svg';

export const PetWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 22px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const PetAvatar = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;
  margin-bottom: 16px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
    width: 160px;
    height: 160px;
    border-radius: 40px;
  }
`;
export const PetList = styled.ul``;
export const PetItem = styled.li``;

export const PetDescriptionInfo = styled.p`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const PetTitleInfo = styled.span`
  font-weight: ${p => p.theme.fontWeights.fw600};
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 274px;
  margin-left: 200px;
  cursor: pointer;
  background-image: url(${deleteUserPet});
  background-color: inherit;
  border: none;
  width: 20px;
  height: 20px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.round};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    object-fit: cover;
  }
`;
