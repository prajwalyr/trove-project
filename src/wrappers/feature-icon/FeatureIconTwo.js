import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-two.json";
import FeatureIconTwoSingle from "../../components/feature-icon/FeatureIconTwoSingle.js";
import { Typography, Box } from "@mui/material";

const FeatureIconTwo = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <Box sx={{height:'fit-content',pt:{xs:5, md:5}, pb:{xs:5, md:10}}}>
    <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row feature-icon-two-wrap">
          <Typography sx={{fontSize: { xs: "30px", md: "50px" }, textAlign:'center', mb:5, fontWeight:500,fontFamily: "Libre Baskerville",}}>WHAT CAN TROVE OFFER YOU?</Typography>
          {featureIconData?.map((single, key) => (
            <div className="col-md-3" key={key}>
              <FeatureIconTwoSingle
                data={single}
                spaceBottomClass="mb-0"
                textAlignClass="text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Box>
  );
};

FeatureIconTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconTwo;
