require('style/bootstrap-3.3.5-dist/css/bootstrap.css');
var Link = require('react-router').Link;

module.exports = ({children}) => (
    <div>
        <strong>SCOTT'S TODO APP</strong>
        <div className="pull-right">
            <HeaderLink to="/state">State</HeaderLink>
            <HeaderLink to="/">Home</HeaderLink>
        </div>
        {children}
    </div>
);



var HeaderLink = ({to, children}) => (
    <span style={{marginLeft: 10}}>
        <Link to={to}>{children}</Link>
    </span>
);