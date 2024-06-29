import styled from "styled-components";
import { Footer, Header } from "components/ui";
import { Outlet } from "react-router-dom";
import HeaderLeftSide from "components/ui/HeaderLeftSide";
import { useRef, useState } from "react";
import BackToTop from "components/ui/BackToTop";
const MainLayout = () => {
  const [openHeader, setOpenHeader] = useState<boolean>(true);
  const loginRef = useRef<HTMLDialogElement>();
  const registerRef = useRef<HTMLDialogElement>();
  return (
    <div>
      <Header
        loginRef={loginRef}
        registerRef={registerRef}
        openHeader={openHeader}
        setOpenHeader={setOpenHeader}
      />
      <HeaderLeftSide
        setOpenHeader={setOpenHeader}
        registerRef={registerRef}
        loginRef={loginRef}
        openHeader={openHeader}
      />
      <Outlet />
      <BackToTop />
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
