import Header from "./Header"
// import styles from "../page.module.css";
// import Content from "./Content";

const Layout = ({children}) => {
  return (
    <div> 
      <Header />
      <main className=""> {children}</main> 
      </div>
  )
}

export default Layout