import { createContext, useContext, FC, ReactNode } from "react"

export const PageContext = createContext({})
export const usePageContext = () => useContext(PageContext)

type PageLayoutProps = {
  context?: {}
  children: ReactNode
};

const PageLayout: FC<PageLayoutProps> = ({ context = {}, children }) => {
  return (
    <PageContext.Provider value={context}>
      <div className="container">{children}</div>
    </PageContext.Provider>
  );
};

export default PageLayout
