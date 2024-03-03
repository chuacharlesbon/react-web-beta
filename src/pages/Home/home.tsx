import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Div } from "../../components/core/Container";
import { Text } from "../../components/core/TextElements";

const Home: FC<{ myData: any }> = ({ myData }) => {

    // const dispatch = useAppDispatch();

    const effectRan = useRef(false);

    useEffect(() => {
        if (!effectRan.current) {
            console.log("effect applied - only on the FIRST mount");
        }

        return () => {
            effectRan.current = true;
        };
    }, []);

    return (
        <Div className="p-4">
            <Text>
                My Home Page
            </Text>
            <Link className="" to="/new-page">
                Go to new page
            </Link>
        </Div>
    )
}

export default Home;