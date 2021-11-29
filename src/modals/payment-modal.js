import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Spinner } from "react-bootstrap";
import { getTagsUrl } from "../utils/static";
import axios from "axios";

function PaymentModal({
  show,
  handle_close,
  handle_submit,
  is_submitting,
  handle_input_change,
  get_ben_name,
  values
}) {
  const [tags, setTags] = useState(Object.assign([]));
  const [isAccoundFound, setAccFound] = useState(false);

  useEffect(() => {
    const res = getTags();
    res.then((value) => {
      if (value && value.length > 0) {
        setTags(value);
      }
    });
  }, []);

  const getTags = async () => {
    let resData = {};
    try {
      const { data } = await axios.get(getTagsUrl, {});
      return data;
    } catch (err) {
      console.log("ERROR OCURRED");
    }
    return resData;
  };



  useEffect(() => {
    setAccFound(true);
  }, [values.beneficiaryName]);

  return (
    <>
      <Modal
        show={show}
        onHide={handle_close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Make payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <>
              <FloatingLabel controlId="amount" label="Amount" className="mb-3">
                <Form.Control
                  type="number"
                  min={0}
                  onChange={handle_input_change}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="narration"
                label="Narration"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="narration"
                  onChange={handle_input_change}
                />
              </FloatingLabel>
              {/* <FloatingLabel controlId="tag" label="Tag" className="mb-3">
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={handle_input_change}
                >
                  {tags &&
                    tags.map((val, index) => {
                      return (
                        <option key={index} value={val.name}>
                          {val.name}
                        </option>
                      );
                    })}
                </Form.Select>
              </FloatingLabel> */}
              <FloatingLabel
                controlId="beneficaryAccountNo"
                label="Beneficiary account number"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={get_ben_name}
                />
              </FloatingLabel>
              {isAccoundFound ? (
                <FloatingLabel
                  controlId="beneficiaryName"
                  label="Beneficiary account name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={values.beneficiaryName ?? ""}
                    onChange={handle_input_change}
                  />
                </FloatingLabel>
              ) : (
                []
              )}
            </>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle_close}>
            Close
          </Button>
          {is_submitting ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                handle_submit(values);
              }}
            >
              Pay
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModal;
