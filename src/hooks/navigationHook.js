import { useContext } from "react";
import NavigationContext from "../context/navigation";

const NavigationHook = () => {
    return useContext(NavigationContext);
}

export default NavigationHook;