import styled from "styled-components";

function SideTitleCard(props) {

  const {id,title,url,imgToUrl} = props;

  return (
    <Container key={id}>
      <div className="side-card">
        <a href={url} className="side-card-img-url"><img className="side-card-img" src={imgToUrl} alt="" /></a>
        <h5><a href="/" className="side-card-title">{title&&title.substring(0,80)}</a>...</h5>
      </div>
    </Container>
  );
}

export default SideTitleCard;

const Container = styled.div`
  .side-card {
    width: 100%;
    height:120px;
    text-align: left;
    line-height: 2;
    cursor: pointer;
    margin-bottom:11px;
    &:hover .side-card-title{ 
      color:#DC2F2F;
          }
    .side-card-img {
      margin-top:9px;
      width: 35%;
      float: left;
      margin-right: 20px;
      background-color: grey;
    }
    h5{
      padding-top: 0px;
      margin-top:0;
      .side-card-title{
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        font-weight:500;
        color: #000000;
        text-decoration: none;
       
      }
      
    }
    span {
      font-family: open sans, open sans regular, sans-serif;
      color: #d8d8d8;
      font-size: 1rem;
      padding-right:15px;
    }
  }
`;
