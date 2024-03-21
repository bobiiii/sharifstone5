import CoverComponent from "../../components/coverComponent";
import bloghero from "../Blog/images/blogHero.png";
import BlogCards from "./Components/BlogCards";

function BlogScreen() {
    return (
        <div>
            <CoverComponent
                image={bloghero}
                label={["BLOGS"]}
            />
            <BlogCards/>
        </div>
    );
}

export default BlogScreen;
