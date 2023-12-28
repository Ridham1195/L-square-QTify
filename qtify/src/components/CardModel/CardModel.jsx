import React from "react";
import styles from "./CardModel.module.css"
import { Chip, Tooltip } from "@mui/material";
import { color } from "@mui/system";
import { Link } from "react-router-dom";

const CardModel = ({ data, type }) => {

  const getCard = (type)=>{
    switch(type){
      case "album" :{
        const {image , title , follows , slug, songs} = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
          <div className={styles.main}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"/>
              <div className={styles.banner}>
                <Chip
                label={`${follows} Follows`}
                size="small"
                sx={{backgroundColor:"black" ,color:"white"}}
                />
              </div>
            </div>
            <div className={styles.title}>
              <p> {title}</p>
            </div>
          </div>
          </Link>
          </Tooltip>
        );

      }
      case "song" :{
        const {likes , image , title} = data;
        return (
          <div className={styles.main}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"/>
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p> {likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <p> {title}title</p>
            </div>
          </div>
        );

      }

      default:
        return <></>
    }
  }
  return getCard(type);
 
};

export default CardModel;