import Image from "next/image";
import PostModel1 from "../post/post-model-1";
import PostModel2 from "../post/post-model-2";

const SidebarArchive = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="banner-wrapper mb-3">
        <Image
          src={"/images/banner-iklan-1.jpg"}
          width={300}
          height={250}
          alt={"banner image"}
        />
      </div>
      <div className="post-model-1 mb-3">
        <PostModel1 title={"Headline"} category={"headline"} jumlah={6} />
      </div>
      <div className="banner-wrapper mb-3">
        <Image
          src={"/images/banner-iklan-1.jpg"}
          width={300}
          height={250}
          alt={"banner image"}
        />
      </div>
      <div className="post-model-2 mb-3">
        <PostModel2 title={"Headline"} category={"headline"} jumlah={4} />
      </div>
    </div>
  );
};

export default SidebarArchive;
