import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";

import Navbar from '../Navbar';
const useStyles = makeStyles({
  container: {
    paddingTop: 100,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
    maxWidth: 1440,
    margin: '0 auto'
  },
});

function Layout({ title, children }) {
  const classes = useStyles();
  return (
    <div className="flex">
      <Navbar title={title}/>
      <div className={classes.container}>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
