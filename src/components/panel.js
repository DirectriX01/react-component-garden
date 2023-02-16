import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
    const classes = classNames(className, "border w-full shadow rounded p-3 bg-white");
    return (
        <div className={classes} {...rest}>
        {children}
        </div>
    );
};

export default Panel;