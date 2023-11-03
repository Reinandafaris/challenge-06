import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPostDetails } from '../redux/actions/postActions';
import { FaPlayCircle, FaStar } from 'react-icons/fa';

function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);
  console.log(postDetails);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const overlay = {
    content: '',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${postDetails?.backdrop_path} `;

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="Movie-detail" style={backgroundStyle}>
      <div style={overlay}>
        <div className="container" style={containerStyle}>
          <div className="Movie-detail-content">
            <h1 className="Movie-detail-judul" style={{ marginBottom: '30px' }}>
              {postDetails?.title}
            </h1>
            <p>Gendre : {postDetails?.genres ? postDetails?.genres.map((genre) => genre.name).join(', ') : 'Tidak ada data genres'}</p>
            <p>
              <FaStar style={{ color: 'gold', marginLeft: '0px', marginBottom: '5px' }} /> {parseFloat(postDetails?.vote_average).toFixed(1)} / 10
            </p>
            <p className="card-text">{postDetails?.overview}</p>
            <a href="#" className="Movie-btn2" style={{ maxWidth: '200px', textDecoration: 'none' }}>
              <FaPlayCircle style={{ marginRight: '5px', marginBottom: '20px', marginTop: '15px' }} />
              WATCH TRAILER
            </a>
            <Link to={'/users/dashboard'}>
              <button type="button" className="Movie-back">
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
