import Navbar from "./Navbar";
import {useSelector} from "react-redux";

const NavbarContainer = () => {

    const stateNavbarBlock = useSelector(
        state => state.navbarBlock
    );

    return <Navbar
                state={stateNavbarBlock}
            />
}

export default NavbarContainer;