import './Post.css';
export default function ({ post }) {
    const { title, userId, id, body } = post;
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p><small>User Id: {userId}</small></p>
            <p><small>Post Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}