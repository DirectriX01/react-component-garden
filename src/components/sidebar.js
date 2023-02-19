import Link from './link';

function Sidebar() {
  const links = [
    { to: '/Accordion', text: 'Accordion' },
    { to: '/DropDown', text: 'DropDown' },
    { to: '/Search', text: 'Search' },
    { to: '/Color', text: 'Color' },
    { to: '/Modal', text: 'Modal' },
    { to: '/Table', text: 'Table' },
    { to: '/Counter', text: 'Counter' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.to}
        key={link.to}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.text}
      </Link>
    );
  });
  // const classes = "border w-1/4 shadow rounded p-3 bg-white";
  //tailwind classes for a vertical list
  const classes = 'sticky top-0 overflow-y-scroll flex flex-col items-start';

  return <div className={classes}>{renderedLinks}</div>;
}

export default Sidebar;
