require('style/bootstrap-3.3.5-dist/css/bootstrap.css');
var Link = require('react-router').Link;

module.exports = ({children}) => (
    <Grid style={{paddingTop: 10}}>
        <strong>SCOTT'S TODO APP</strong>
        <div className="pull-right">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/state">State</HeaderLink>
            <HeaderLink to="/create">Create Todo</HeaderLink>
        </div>
        <hr/>
        {children}
    </Grid>
);



var HeaderLink = ({to, children}) => (
    <span style={{marginRight: 10, color: '#ccc'}}>
        <Link to={to} activeStyle={{color: 'red'}}>{children}</Link>
    </span>
);