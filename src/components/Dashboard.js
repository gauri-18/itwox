import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '../components/Table';
import TopNavigation from './Navigation/TopNavigation';
import { setPostData, setCommentsData } from '../redux/actions/DashboardAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, comments } = useSelector(state => state.dashboard);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(postsData => dispatch(setPostData(postsData)));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(commentsData => dispatch(setCommentsData(commentsData)));
  }, []);

  const constructPostsTableData = () => {
    const postCommentData = [];
    posts.map(post => {
      const selectedComments = comments.filter(comment => comment.postId === post.id) || [];
      postCommentData.push({ ...post, commentCount: selectedComments.length });
      return true;
    });
    return postCommentData;
  }

  return (
    <>
      <TopNavigation />
      <br />
      <h1 style={{ color: "red" }}>Dashboard</h1>
      <Table data={constructPostsTableData()} rowsPerPage={10} />
    </>
  );
}

export default Dashboard;
