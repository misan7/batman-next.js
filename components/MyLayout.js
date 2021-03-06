import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "2px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {/*props.children => refeers to all childrens inside Layout from index.js and about.js*/}
    {props.children}
  </div>
);

export default Layout;
