import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FloatingLabel } from "react-bootstrap";
import axios from "axios";
import { searchValUrl } from "../utils/static";
import { capitaliseFirstLetter } from "../utils/tools";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        {/* <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        /> */}
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
const SearchableDropdown = () => {
  const [values, setValues] = useState("");
  const [options, setOptions] = useState(Object.assign([]));

  const loadOptions = async (e) => {
    setOptions(Object.assign([]));
    setValues(e.target.value);
    let resData = [];
    try {
      const { data } = await axios.get(
        searchValUrl.concat("?searchBy=", e.target.value),
        {}
      );
      setOptions(data);
      return data;
    } catch (err) {
      console.log("ERROR OCURRED");
    }
    return resData;
  };

  const showDetails = (e) => {
    console.log("DATAT:::", e);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <FloatingLabel controlId="searchBy" label="Search" className="mb-3">
          <Form.Control type="text" onChange={loadOptions} value={values} />
        </FloatingLabel>
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} className="w-100">
        {options && Array.isArray(options) && options.length > 0
          ? options.map((opt, index) => {
              return opt.data.tag === "TRANSACTIONS" ? (
                <Dropdown.Item
                  eventKey={index}
                  onClick={showDetails}
                  data={opt.data}
                >
                  <div
                    style={{
                      display: "inline-block",
                      wordWrap: "break-word",
                    }}
                  >
                    <span
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {capitaliseFirstLetter(
                        opt.data.tag.toLowerCase(),
                        0
                      ).concat(
                        "|",
                        opt.data.narration,
                        "|",
                        opt.data.amount,
                        "|",
                        opt.data.beneficiaryName,
                        "|",
                        opt.data.transactionDate
                      )}
                    </span>
                  </div>
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  eventKey={index}
                  onClick={showDetails}
                  data={opt.data}
                >
                  <div
                    style={{
                      display: "inline-block",
                      wordWrap: "break-word",
                    }}
                  >
                    <span
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {capitaliseFirstLetter(
                        opt.data.tag.toLowerCase(),
                        0
                      ).concat(
                        "|",
                        opt.data.beneficiaryName,
                        "|",
                        opt.data.beneficiaryAccountNo,
                        "|",
                        opt.data.beneficiaryBank
                      )}
                    </span>
                  </div>
                </Dropdown.Item>
              );
            })
          : []}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchableDropdown;
