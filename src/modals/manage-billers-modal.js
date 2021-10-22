import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Spinner } from "react-bootstrap";
import { getCategoriesUrl } from "../utils/static";
import axios from "axios";

const ManageBillersModal = ({
  show,
  handle_close,
  handle_submit,
  is_submitting,
  handle_input_change,
  values,
}) => {
  const [categories, setCategories] = useState(Object.assign([]));

  useEffect(() => {
    const res = getCategories();
    res.then((value) => {
      if (value && value.length > 0) {
        setCategories(value);
      }
    });
  }, []);


  const getCategories = async () => {
    let resData = {};
    try {
      const { data } = await axios.get(getCategoriesUrl, {});
      return data;
    } catch (err) {
      console.log("ERROR OCURRED");
    }
    return resData;
  };

  return (
    <Modal show={show} onHide={handle_close} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create biller</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <>
            <FloatingLabel controlId="billerName" label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="billerName"
                onChange={handle_input_change}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="categoryId"
              label="Category"
              className="mb-3"
            >
              <Form.Select
                aria-label="categoryId"
                onChange={handle_input_change}
              >
                <option>-- Choose option --</option>
                {categories &&
                  categories.map((val, index) => {
                    return (
                      <option key={index} value={val.name}>
                        {val.name}
                      </option>
                    );
                  })}
              </Form.Select>
            </FloatingLabel>
          </>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handle_close}>
          Close
        </Button>
        {is_submitting ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Button
            variant="secondary"
            onClick={() => {
              handle_submit(values);
            }}
          >
            Submit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ManageBillersModal;
