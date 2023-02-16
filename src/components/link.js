import classNames from "classnames";
import NavigationHook from "../hooks/navigationHook";

function Link({ children, to, className, activeClassName }) {
    const { navigate, currentPath } = NavigationHook();
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
          return;
        }
        e.preventDefault();
        navigate(to);
    };
    const classes = classNames(
      'text-blue-500',
      className,
      currentPath === to && activeClassName
    );
        
  return (
    <a
        href={to}
        onClick={handleClick}
        className={classes}
    >
      {children}
    </a>
  );
}

export default Link;