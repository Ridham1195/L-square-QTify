import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import CardModel from "../CardModel/CardModel";
import { CircularProgress } from "@mui/material";
import Carousal from "../Carousal/Carousal";
import Filters from "../Filters/Filters";

const Section = ({ title, data, filterSource, type }) => {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carousalToggle, setCaraousalToggle] = useState(true);

  const handleToggle = () => {
    setCaraousalToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  
  
  const showFilters = filters.length > 1;

  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

//   console.log(cardsToRender)


  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carousalToggle ? "Collapse All" : "Show All"}
        </h4>}
      </div>
      {showFilters && (
        <div className={styles.filters}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardwrapper}>
          {!carousalToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <CardModel key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousal
              data={cardsToRender}
              renderComponent={(data) => <CardModel data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;