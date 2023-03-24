import { createContext, useContext, FC, ReactNode } from "react"

export const PageContext = createContext({})
export const usePageContext = () => useContext(PageContext)

type PageLayoutProps = {
  context?: {}
  children: ReactNode,
  noContainer?: boolean
};

const PageLayout: FC<PageLayoutProps> = (props) => {
  const { context = {}, noContainer, children } = props

  return (
    <PageContext.Provider value={context}>
      <div className={!noContainer ? 'container' : ''}>{children}</div>
    </PageContext.Provider>
  );
};

export default PageLayout

PageLayout.defaultProps = {
  context: {},
  noContainer: false
}
