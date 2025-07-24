import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>This Page Doesn't Exist!</h2>
            <Link to="/">
                Don't worry, go back to the home page by clicking here!
            </Link>
        </div>
    );
};

export default ErrorPage;