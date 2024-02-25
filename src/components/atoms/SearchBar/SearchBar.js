import { Icon } from "@iconify/react";
import React, { useRef } from "react";
import "./styles.css";
import {
  Autocomplete,
  Chip,
  Divider,
  Switch,
  TextField,
  createFilterOptions,
  styled,
  useAutocomplete,
} from "@mui/material";

// Data values for the auto complete keywords
const autoCompleteKeywords = [
  { value: "KPMG" },
  { value: "KPMG Docs" },
  { value: "Material" },
  { value: "KPMG Business" },
  { value: "KPMG india" },
  { value: "KPMG Send" },
  { value: "KGS" },
];

// Data values for the operator
const operatorValues = [
  { label: "contains" },
  { label: "equals" },
  { label: "start with" },
  { label: "ends with" },
  { label: "is empty" },
  { label: "is not empty" },
  { label: "is any of" },
];

// Styles for the listbox component
const Listbox = styled("ul")(({ theme }) => ({
  //   width: "100%",
  margin: 0,
  padding: 5,
  borderRadius: 5,
  zIndex: 1,
  position: "absolute",
  top: 43,
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "auto",
  maxHeight: 300,
  border: "1px solid rgba(0,0,0,.25)",
  "& li": {
    padding: "5px 10px",
    display: "flex",
    justifyContent: "start",
  },
  "& li.Mui-focused": {
    backgroundColor: "var(--bg-lite)",
    cursor: "pointer",

    borderRadius: "5px",
  },
  "& li:active": {
    backgroundColor: "var(--primary-color-shade-5)",
    color: "white",
  },
}));

export const SearchBar = ({
  setSearchInput,
  searchInput,
  dropDownDisabled, //to disable dropdown functionality
}) => {
  // Refer to MUI Docs
  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    setAnchorEl,
    value,
  } = useAutocomplete({
    id: "autocomplete",
    options: autoCompleteKeywords,
    getOptionLabel: (option) => option.value,
    onInputChange: (event, newInputValue) => setSearchInput(newInputValue),
  });
  //state to set advance search
  const [advSearchOpen, setAdvSearchOpen] = React.useState(false);
  // state to set menu preferences
  const [menuPreferencesOpen, setMenuPreferencesOpen] = React.useState(false);

  //reference
  const advMenuRef = useRef(null);
  const menuPrefRef = useRef(null);

  //to close the menu
  const closeOpenMenus = (e) => {
    if (
      advMenuRef.current &&
      advSearchOpen &&
      !advMenuRef.current.contains(e.target)
    ) {
      setAdvSearchOpen(false);
    }
    if (
      menuPrefRef.current &&
      menuPreferencesOpen &&
      !menuPrefRef.current.contains(e.target)
    ) {
      setMenuPreferencesOpen(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  //to save the menu
  const handleSavePreference = (event) => {
    setMenuPreferencesOpen(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div className="position-relative w-100">
          <Icon
            icon="ic:baseline-search"
            className="position-absolute"
            style={{ top: "50%", left: "10px", transform: " translateY(-50%)" }}
            width={20}
          />
          <input
            {...getInputProps()}
            id="search-bar-main"
            className="px-5 py-2 search-bar w-100"
            placeholder="Search for Batch Number, Business Entity, Function, etc.."
          />
          <Icon
            icon="mingcute:down-fill"
            className="position-absolute"
            style={{
              top: "50%",
              right: "10px",
              transform: " translateY(-50%)",
              cursor: "pointer",
            }}
            width={20}
            onClick={() => {
              setAdvSearchOpen(true);
            }}
          />
          {!dropDownDisabled && (
            <>
              {/* DropDown Starts Here  */}
              {groupedOptions.length > 0 ? (
                <Listbox className="w-100" {...getListboxProps()}>
                  <div className="d-flex align-items-center justify-content-between px-2">
                    <div className="flex align-items-center mb-1 py-1">
                      <Chip
                        label={<div className="fw-medium px-1">All</div>}
                        className="custom-chip selected elevation-true me-2"
                      />
                      <Chip
                        label={
                          <div className="fw-medium px-1">Business Entity</div>
                        }
                        className="custom-chip selected elevation-true me-2"
                      />
                      <Chip
                        label={<div className="fw-medium px-1">Functions</div>}
                        className="custom-chip selected elevation-true"
                      />
                    </div>
                    <Icon
                      onClick={() => {
                        setMenuPreferencesOpen(true);
                      }}
                      width={22}
                      icon="material-symbols:settings-outline"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />
                  {groupedOptions.map((option, index) => (
                    <li {...getOptionProps({ option, index })}>
                      <div className="d-flex align-items-center gap-2">
                        <Icon
                          width={15}
                          color="#8A8A8A"
                          icon="ic:outline-search"
                        />
                        {option.value}
                      </div>
                    </li>
                  ))}
                </Listbox>
              ) : null}

              {/* Advance Search Starts Here  */}
              {advSearchOpen === true ? (
                <div className="advance-search-custom" ref={advMenuRef}>
                  <div className="advance-search-custom-header">
                    Advance Search
                  </div>
                  <div className="row px-2 py-1 w-100 ">
                    <div className="col-3">Column Name</div>
                    <div className="col-5">Operator</div>
                    <div className="col-4">Value</div>
                  </div>
                  <Divider
                    className="mb-2"
                    style={{ backgroundColor: "#000000" }}
                  />
                  <div className="row px-2 py-1 align-items-center w-100">
                    <div className="col-3">Batch Number</div>
                    <div className="col-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo small"
                        className="custom-autocomplete small"
                        options={operatorValues}
                        sx={{ width: "100%" }}
                        renderInput={(params, option) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Operator"
                          />
                        )}
                      />
                    </div>
                    <div className="col-4">
                      <Autocomplete
                        multiple
                        size="small"
                        id="tags-filled"
                        options={[{ label: "Add new tags" }]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Value"
                            placeholder="Type Here to Add"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="row px-2 py-1 align-items-center w-100">
                    <div className="col-3">Business Entity</div>
                    <div className="col-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo small"
                        className="custom-autocomplete small"
                        options={operatorValues}
                        sx={{ width: "100%" }}
                        renderInput={(params, option) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Operator"
                          />
                        )}
                      />
                    </div>
                    <div className="col-4">
                      <Autocomplete
                        multiple
                        size="small"
                        id="tags-filled"
                        options={[{ label: "Add new tags" }]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Value"
                            placeholder="Type Here to Add"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="row px-2 py-1 align-items-center w-100">
                    <div className="col-3">Data Entity Group</div>
                    <div className="col-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo small"
                        className="custom-autocomplete small"
                        options={operatorValues}
                        sx={{ width: "100%" }}
                        renderInput={(params, option) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Operator"
                          />
                        )}
                      />
                    </div>
                    <div className="col-4">
                      <Autocomplete
                        multiple
                        size="small"
                        id="tags-filled"
                        options={[{ label: "Add new tags" }]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Value"
                            placeholder="Type Here to Add"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="row px-2 py-1 align-items-center w-100">
                    <div className="col-3">Function</div>
                    <div className="col-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo small"
                        className="custom-autocomplete small"
                        options={operatorValues}
                        sx={{ width: "100%" }}
                        renderInput={(params, option) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Operator"
                          />
                        )}
                      />
                    </div>
                    <div className="col-4">
                      <Autocomplete
                        multiple
                        size="small"
                        id="tags-filled"
                        options={[{ label: "Add new tags" }]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Value"
                            placeholder="Type Here to Add"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="row px-2 py-1 align-items-center w-100">
                    <div className="col-3">Workflow Role</div>
                    <div className="col-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo small"
                        className="custom-autocomplete small"
                        options={operatorValues}
                        sx={{ width: "100%" }}
                        renderInput={(params, option) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Operator"
                          />
                        )}
                      />
                    </div>
                    <div className="col-4">
                      <Autocomplete
                        multiple
                        size="small"
                        id="tags-filled"
                        options={[{ label: "Add new tags" }]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Value"
                            placeholder="Type Here to Add"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="row px-2 py-1 align-items-center w-100 mb-2">
                    <div className="col-3">Status</div>
                    <div className="col-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo small"
                        className="custom-autocomplete small"
                        options={operatorValues}
                        sx={{ width: "100%" }}
                        renderInput={(params, option) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Operator"
                          />
                        )}
                      />
                    </div>
                    <div className="col-4">
                      <Autocomplete
                        multiple
                        size="small"
                        id="tags-filled"
                        options={[{ label: "Press Enter to add" }]}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Value"
                            placeholder="Type Here to Add"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />
                  <div className="d-flex justify-content-end align-items-center gap-2 py-2 px-2">
                    <button
                      type="button"
                      class="custom-btn square outlined small  ms-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="custom-btn square outlined small  ms-2"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      class="custom-btn square outlined small  ms-2"
                      disabled
                    >
                      Search
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {/* Menu Preference Starts here  */}
              {menuPreferencesOpen && (
                <div className="menu-preference-custom " ref={menuPrefRef}>
                  <div className="advance-search-custom-header">
                    Search Preferences
                  </div>
                  <div className="d-flex justify-content-between align-items-center  px-2">
                    <div className="">Business Entity</div>
                    <Switch defaultChecked />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />

                  <div className="d-flex justify-content-between align-items-center  px-2">
                    <div className="">Functions</div>
                    <Switch defaultChecked />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />

                  <div className="d-flex justify-content-between align-items-center  px-2">
                    <div className="">Other 1</div>
                    <Switch defaultChecked />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />

                  <div className="d-flex justify-content-between align-items-center px-2">
                    <div className="">Other 2</div>
                    <Switch defaultChecked />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />

                  <div className="d-flex justify-content-between align-items-center px-2">
                    <div className="">Other 3</div>
                    <Switch defaultChecked />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />

                  <div className="d-flex justify-content-between align-items-center px-2">
                    <div className="">Other 4</div>
                    <Switch defaultChecked />
                  </div>
                  <Divider style={{ backgroundColor: "#000000" }} />
                  <div className="d-flex justify-content-end align-items-center gap-2 py-2 px-2">
                    <button
                      type="button"
                      class="custom-btn square outlined small  ms-2"
                      onClick={() => setMenuPreferencesOpen(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      class="custom-btn square filled  small  ms-2"
                      onClick={() => handleSavePreference()}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {/* Serach Button  */}
        <button
          type="button"
          class="custom-btn square filled medium arial-regular "
          style={{
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            height: 40.5,
          }}
        >
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};
