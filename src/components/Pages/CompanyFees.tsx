import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../WebLayouts/Layout";

function CompanyFees() {
    return (
      <Layout>
            <div>
                <h2 className="Fees">Company Fees</h2>  
 
                 <div className="mission-Cotainer">
                      <div className="goals">
                             <h6>Subscription</h6>
                              <p>
                              Literacy~Hub charges one time subscription fee of M20.00 / $ 1.30 upon registering.
                              </p>
                        </div>

                        <div className="mission">
                              <h6>Advertising</h6>
                              <p>Literacy~Hub offers a number of plans for advertisments.</p>
                                <Link to='/AdvertisingPlans' className="link">
                                    <Button variant="primary" type="submit">
                                    View Plans
                                    </Button>
                                </Link>
                        </div>
                  </div>
            </div>
      </Layout>
    );
  }
  export default CompanyFees;