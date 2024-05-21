import styled from "styled-components";
import "../../assets/style.css";
import { Footer, Header } from "components/ui";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
export const Container = styled.div`
  max-width: var(--max-width);
  margin: auto;
  margin-top: 35px;
`;
