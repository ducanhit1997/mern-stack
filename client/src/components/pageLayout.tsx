import { createContext, useContext, FC, ReactNode, useEffect, useState } from "react"
import Cookies from "js-cookie"
import jwt_decode from 'jwt-decode';
import Header from "./header";

export const PageContext = createContext<object | undefined>(undefined)

export const usePageContext = () => useContext(PageContext)

type PageLayoutProps = {
  context?: object
  children: ReactNode
  noContainer?: boolean
}

const PageLayout: FC<PageLayoutProps> = (props) => {
  const { context, noContainer, children } = props
  const [loginInfo, setLoginInfo] = useState<any>();

  useEffect(() => {
    const tokenLogin = Cookies.get("TOKEN_KEY") as any;
    if (tokenLogin) {
      const parseToken = jwt_decode(tokenLogin);
      setLoginInfo(parseToken);
    }
  }, []);

  return (
    <PageContext.Provider value={context}>
      <Header loginInfo={loginInfo} />
      <div className={!noContainer ? 'container' : ''}>{children}</div>
    </PageContext.Provider>
  )
}

export default PageLayout

PageLayout.defaultProps = {
  context: {},
  noContainer: false
}
