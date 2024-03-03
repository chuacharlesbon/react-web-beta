import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Div } from "../../components/core/Container";
import { Text } from "../../components/core/TextElements";

const NewPage: FC<{ myData: any }> = ({ myData }) => {

    // const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('New page');
    }, [])

    return (
        <Div className="p-4">
            <Text>
                My New Page
            </Text>
            <Link className="" to="/">
                Go to home page
            </Link>
        </Div>
    )
}

export default NewPage;