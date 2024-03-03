import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Div } from "../../components/core/Container";
import { Text } from "../../components/core/TextElements";

const Home: FC<{ myData: any }> = ({ myData }) => {

    // const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('Home page');
    }, [])

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