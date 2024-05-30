import AccountTemplates from "components/templates/AccountTemplates";
import styled from "styled-components";
const Account = () => {
  return (
    <AccountCSS className="py-24 max-lg:py-12 bg-slate-50">
      <AccountTemplates />
    </AccountCSS>
  );
};

const AccountCSS = styled.div`
  .swiper-button-prev {
    color: black;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 40px;
    height: 40px;
    /* transform: translateY(-100%); */
    font-weight: 800;
    border-radius: 100%;
    &::after {
      font-size: 18px;
    }
  }
  .swiper-button-next {
    color: black;
    background-color: white;
    /* transform: translateY(-100%); */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 40px;
    height: 40px;
    font-weight: 800;
    border-radius: 100%;
    &::after {
      font-size: 18px;
    }
  }
`;
export default Account;
