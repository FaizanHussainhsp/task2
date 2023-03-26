import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useFormik, validateYupSchema } from "formik";
import React, { useCallback, useRef, useState } from "react";
import { tagsScheme } from "../../validation";
import { AddButton } from "../button";
import { GeneralInput } from "../generalInput";
import { Modal, Modalset } from "../modal";
import CloseIcon from "@mui/icons-material/Close";
import { ImCross } from "react-icons/im";

// let TagsRender = [];
const TagsGenerator = () => {
  const [TagsRender, setTagRender] = useState([]);
  const nameInputRef = useRef(null);
  const colorSelectorRef = useRef(null);
  const Formik = useFormik({
    initialValues: {
      value: "",
      color: "color",
    },
    validateYupSchema: tagsScheme,
    onSubmit: (values) => {
      console.log(nameInputRef.current.value, colorSelectorRef.current.value);

      setTagRender((data) => [...data, values]);
    },
  });

  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
  });
  const handleClose = useCallback(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  let isDisable = true;
  if (Formik.values.value) {
    if (Formik.values.color) isDisable = false;
  }

  const handleDelete = useCallback(
    (data) => {
      let FilterData = TagsRender.filter((objdata) => objdata.value !== data);
      setTagRender(FilterData);
    },
    [TagsRender]
  );

  return (
    <>
      <Box component="div" sx={{}}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem!important",
            marginTop: "3rem!important",
            fontSize: "calc(1.275rem + .3vw)",
            fontWeight: 500,
            lineHeight: 1.2,
            display: "block",
            marginBottom: "0.5rem",
            display: "inline-block",
            cursor: "default",
          }}
        >
          Tags
        </Typography>
        {TagsRender.length > 0 && (
          <Box
            className="Detail"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "15px",
              "&>*:not(:last-child)": {
                marginRight: "10px",
                marginBottom: "10px",
              },
            }}
          >
            {TagsRender.length > 0 &&
              TagsRender.map((data, index) => (
                <Chip
                  key={index}
                  label={data.value}
                  sx={{ backgroundColor: data.color, color: "#ffffff" }}
                  onDelete={() => handleDelete(data.value)}
                  deleteIcon={
                    <CloseIcon
                      sx={{
                        height: "18px",
                        width: "18px",
                        fill: "gray",
                        fontWeight: "900",
                        "&:hover": {
                          fill: "#ffffff",
                        },
                      }}
                    />
                  }
                />
              ))}
          </Box>
        )}

        <Box component="div" sx={{ padding: "0.25rem!important" }}>
          <AddButton
            onClick={handleOpen}
            type="button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                marginRight: ".5rem!important",
                transform: "translateY(2px)",
              }}
            >
              <svg
                class="svg-inline--fa fa-plus fa-w-14 me-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                width="0.875em"
                style={{ marginRight: "1rem!important" }}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-v-1643dda8=""
              >
                <path
                  class=""
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </Box>
            Add
          </AddButton>
        </Box>
      </Box>
      <Modalset open={open} handleClose={handleClose} width="450">
        <Box
          component="form"
          autocomplete="off"
          onSubmit={Formik.handleSubmit}
          sx={{
            "&>*:not(:last-child)": { marginBottom: "10px" },
            padding: "30px 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              "&>*:not(:last-child)": { marginRight: "20px" },
            }}
          >
            <GeneralInput
              ref={nameInputRef}
              type="text"
              placeholder="Name"
              name="value"
              style={{ position: "relative" }}
              value={Formik.values.value}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.touched.color && Formik.errors.color && (
              <p style={{ position: "absolute" }}>{Formik.errors.color}</p>
            )}
            <FormControl fullWidth>
              <Select
                id="demo-simple-select"
                name="color"
                inputRef={colorSelectorRef}
                // defaultValue="color"
                value={Formik.values.color}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                sx={{
                  height: "40px",
                  borderRadius: "50px",
                  position: "relative",
                  ".css-3rzyxo-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                      outline: "none",
                    },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid rgb(206, 212, 218)",
                    boxShadow: "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                    borderColor: "rgb(174, 238, 197)",
                    outline: "0px",
                  },
                }}
              >
                {Formik.touched.color && Formik.errors.color && (
                  <p style={{ position: "absolute" }}>{Formik.errors.color}</p>
                )}
                {[
                  { value: "Green", color: "#00FF00" },
                  { value: "Blue", color: "#0000FF" },
                  { value: "Orange", color: "#8B4000" },
                  { value: "Aqua", color: "#249D9F" },
                  { value: "Olive ", color: "#556b2f" },
                ].map((data, index) => (
                  <MenuItem
                    key={index}
                    value={data.color}
                    sx={{
                      padding: "15px 10px",
                      "&:hover": {
                        backgroundColor: "#5cdd8b",
                      },
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: data.color,
                        borderRadius: "20px",
                        padding: "1px 5px",
                        width: "60px",
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      {data.value}
                    </span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <AddButton
              disabled={isDisable}
              style={{ width: "20%" }}
              type="submit"
              onClick={handleClose}
            >
              Add
            </AddButton>
          </Box>
        </Box>
      </Modalset>
    </>
  );
};

export default TagsGenerator;
