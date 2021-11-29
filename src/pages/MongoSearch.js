import React, { useState } from "react";
import axios from "axios";
import "../assets/css/starter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PaymentModal from "../modals/payment-modal";
import { doCreateBillerUrl, doCreateTnxUrl } from "../utils/static";
import SearchableDropdown from "../components/searchable-dropdown";
import { nameEnqUrl } from "../utils/static";
import ManageBillersModal from "../modals/manage-billers-modal";

function MongoSearch() {
  const [show, setShow] = useState(false);
  const [showBillerModal, setShowBillerModal] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(Object.assign({}));
  const [billerDetails, setBillerDetails] = useState(Object.assign({}));

  const handleClose = () => {
    setShow(!show);
  };

  const handleBillerModalClose = () => {
    setShowBillerModal(!showBillerModal);
  };

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      setSubmitting(false);
      let nowNow = new Date();
      let requestData = Object.assign(
        {},
        { tag: "TRANSACTIONS" },
        {
          data: Object.assign({}, paymentDetails, {
            transactionDate: nowNow.toISOString(),
            transactionId: nowNow.getTime(),
          }),
        }
      );
      const { data } = await axios.post(doCreateTnxUrl, [requestData]);

      if (data && data.length > 0) {
        alert("Successful");
        setShow(false);
        setPaymentDetails({});
      }
    } catch (err) {
      alert("Failed");
      console.log("ERROR OCCURRED:::", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleManageBillerSubmit = async (values) => {
    setSubmitting(true);
    try {
      setSubmitting(false);
      let nowNow = new Date();
      let requestData = Object.assign(
        {},
        { tag: "BILLERS" },
        Object.assign({}, billerDetails, {
          transactionDate: nowNow.toISOString(),
          transactionId: nowNow.getTime(),
        })
      );
      const { data } = await axios.post(doCreateBillerUrl, [requestData]);

      if (data && data.length > 0) {
        alert("Successful");
        setShowBillerModal(false);
        setBillerDetails({});
      }
    } catch (err) {
      alert("Failed");
      console.log("ERROR OCCURRED:::", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.id]: e.target.value });
  };

  const handleBillerInputChange = (e) => {
    setBillerDetails({ ...billerDetails, [e.target.id]: e.target.value });
  };

  const getBeneficiaryName = async (e) => {
    handleInputChange(e);
    if (e.target.value.length === 10) {
      try {
        const { data } = await axios.get(nameEnqUrl.concat(e.target.value), {});

        setPaymentDetails({
          ...paymentDetails,
          beneficiaryName: data.accountName,
        });
      } catch (err) {
        console.log("ERROR OCURRED", err);
      }
    }
  };

  return (
    <div className="MongoSearch">
      <PaymentModal
        show={show}
        handle_close={handleClose}
        handle_submit={handleSubmit}
        is_submitting={isSubmitting}
        handle_input_change={handleInputChange}
        get_ben_name={getBeneficiaryName}
        values={paymentDetails}
      />
      <ManageBillersModal
        show={showBillerModal}
        handle_close={handleBillerModalClose}
        handle_submit={handleManageBillerSubmit}
        is_submitting={isSubmitting}
        handle_input_change={handleBillerInputChange}
        values={billerDetails}
      />
      <div className="py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">VStore</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-2">transactions, bills and many more</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="row searchbar-div">
              <div className="col-sm-12">
                <SearchableDropdown />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="row">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-4 mr-3 w-50 h-75 mb-20"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Fund transfer
                </button>
              </div>
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4 mr-3 w-50 h-75 mb-20"
                  onClick={() => {
                    setShowBillerModal(true);
                  }}
                >
                  Manage billers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MongoSearch;
