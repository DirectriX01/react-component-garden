import NavigationHook from '../hooks/navigationHook';

const Route = ({ path, children }) => {
  const { currentPath } = NavigationHook();
  return currentPath === path ? children : null;
};

export default Route;
