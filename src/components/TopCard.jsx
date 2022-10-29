import styled from "styled-components";

function TopCard(props) {
  return (
    <Container key={props.id}>
      <div className="top-card-container">
        <div className="top-card-img">
          <a className="image-tag" href={props.url}>
            <img src={props.imgToUrl} alt="" />
          </a>
          <div className="top-card-text">
            <div className="news-heading">
              <h3 className="heading">
                <a href={props.url} rel="bookmark" className="heading-text">
                  {props.title}
                </a>
              </h3>
            </div>
            <div className="news-info">
              <span className="author">{props.author}</span>
              <span className="date">{props.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TopCard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
  .top-card-container {
    padding: 0;
    border: none;
    height: 100%;
    .top-card-img {
      position: relative;
      border: none;
      width: 100%;
      height: 100%;
      overflow: hidden;
      &:hover img {
        filter: brightness(100%);
        transform: scale(1.08);
      }


      img {
        border: none;
        width: 100%;
        height: 100%;
        transition: transform 0.5s, filter 0.5s ease-in-out;
        transform-origin: center center;
        filter: brightness(80%);
      }

      .top-card-text {
        position: absolute;
        background-color: rgba(0,0,0,0.2);
        z-index: 1;
        width: 100%;
        height: auto;
        bottom: 0;
        padding: 15px;
        .news-heading {
          width: 100%;
          .heading {
            a {
              font-family: "Montserrat", sans-serif;
              color: #ffffff;
              font-size: 1.5vw;
              line-height: 1.1;
              font-weight: 600;
              text-decoration: none;
            }
          }
        }
        span {
          font-family: open sans, open sans regular, sans-serif;
          color: #ffffff;
          line-height: 1;
          padding: 5px 15px 0 0;
          margin: 5px 0;
          font-size: 1vw;
        }
        .author {
          font-weight: 500;
        }
      }
    }
  }
`;
