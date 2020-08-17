import React from "react";
import { Link } from "react-router-dom";

const BlogHome = () => {
  return (
    <div>
      <h1>Music Manager Blogs</h1>
      <Link to="/articles-list">Articles List</Link>
      <p>
        Welcome to the music manager blog! Proin congue ligula id risus posuere,
        vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa
        tincidunt egestas. Nam consectetur varius turpis, non porta arcu
        porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut
        ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales
        purus euismod.
      </p>
      <p>
        Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices
        dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu.
        Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas
        viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo
        luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue
        tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam.
        Vivamus accumsan dui in facilisis aliquet.,
      </p>
      <p>
        Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit
        tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec
        finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi
        vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac
        vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan
        dui in facilisis aliquet.,
      </p>
    </div>
  );
};

export default BlogHome;
