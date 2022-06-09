import './BusinessList.css';
import Business from '../Business/Business.js';
import { JsonResponseType } from '../../util/Yelptype';




 const BusinessList = ({businesses}: JsonResponseType) =>   {

        return (
            <div className="BusinessList">
                {businesses && businesses.map(business =>  {return (<Business business={business} key={business.id} />)} ) }
            </div>
        );
    
}

export default BusinessList;