import CoverComponent from '../../components/coverComponent';
import hero from '../Blog/images/blogHero.png';
import BlogCards from './Components/BlogCards';

function BlogScreen() {
  return (
    <div>
      <CoverComponent
        imageDesktop={hero}
        imageMobile={hero}
        label={['BLOGS']}
      />
      <BlogCards />
    </div>
  );
}

export default BlogScreen;
