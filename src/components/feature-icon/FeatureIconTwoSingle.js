import PropTypes from "prop-types";
import clsx from "clsx";

const FeatureIconTwoSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
      <div className={clsx("support-wrap-2 support-shape", spaceBottomClass, textAlignClass)}>
        <div className="support-content-2">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
            width={100}
            height={100}
          />
          <h5 style={{fontFamily:'Montserrat', fontWeight:'500'}} >{data.title}</h5>
          <p style={{fontFamily:'Montserrat'}}>{data.subtitle}</p>
        </div>
    </div>
  );
};

FeatureIconTwoSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconTwoSingle;
