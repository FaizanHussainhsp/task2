import {
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { useCallback, useState } from "react";
import ResponsiveAppBar from "../../components/appbar";
import { SearchInput } from "../../components/searchinput";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GeneralInput } from "../../components/generalInput";
import { newMonitorScheme } from "../../validation";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { AddButton, SaveButton } from "../../components/button";
import AddNewMonitor from "../../components/addNewMonitorbtn";
import AddNewmonitorHeading from "../../components/addNewMonitorHeading";
import MonitorSideBar from "../../components/addMonitorSideBar";
import Wrapper from "../../components/MonitorDetailWrapper";
import StickyBtn from "../../components/detailStickyBtn";
import TagsGenerator from "../../components/tagsGenerator";
import { TextArea } from "../../components/textarea";
import { Modalset } from "../../components/modal";
import Antswitch from "../../components/switcher";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "12-87", year: 1994 },
  { title: "123-65", year: 1972 },
  { title: "54-54", year: 1974 },
  { title: "652", year: 2008 },
  { title: "343", year: 1957 },
  { title: "746", year: 1993 },
  { title: "767", year: 1994 },
  {
    title: "880",
    year: 2003,
  },
  { title: "90", year: 1966 },
  { title: "91", year: 1999 },
  {
    title: "92",
    year: 2001,
  },
  {
    title: "93",
    year: 1980,
  },
  { title: "94", year: 1994 },
  { title: "96", year: 2010 },
  {
    title: "99",
    year: 2002,
  },
  { title: "765", year: 1975 },
  { title: "767", year: 1990 },
  { title: "780", year: 1999 },
  { title: "781", year: 1954 },
  {
    title: "792",
    year: 1977,
  },
];

const menuItems = [{ value: "HTTP(s)" }, { value: "HTTP" }, { value: "Ping" }];
const bodyEncoding = [{ value: "JSON" }, { value: "XML" }];
const AuthMethods = [
  { value: "None" },
  { value: "HTTP Basic Auth" },
  { value: "NTLM" },
];
const Methods = [
  { value: "POST" },
  { value: "GET" },
  { value: "DELETE" },
  { value: "PATCH" },
  { value: "PUT" },
];
const NotificationType = [
  { value: "Discord" },
  { value: "LunaSea" },
  { value: "Mattermost" },
  { value: "Microsoft Teams" },
  { value: "OneBot" },
  { value: "Signal" },
  { value: "Pushbullet" },
  { value: "Pushover" },
  { value: "Slack" },
];

const placeHolder = `Example: 
{ 
  "key": "value" 
}`;

const HeaderPlaceHolder = `Example: 
{ 
  "HeaderName": "HeaderValue" 
}`;

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    borderColor: "aeeec5# !important",
    outline: "0 !important",
    boxShadow: "0 0 0 0.25rem rgba(92, 221, 139, 0.25) !important",
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#5cdd8b",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#5cdd8b",
    // borderColor: "aeeec5# !important",
    outline: "0 !important",
    boxShadow: "0 0 0 0.25rem rgba(92, 221, 139, 0.25) !important",
  },
});

const useStyles = makeStyles({
  option: {
    "&:hover": {
      backgroundColor: "#5cdd8b !important",
      color: "#ffffff",
    },
  },
});

const Home = () => {
  const styles = useStyles();
  const [isNotificatoinOpen, setIsNotificatoinOpen] = useState(false);
  const isNotificatoinOpenHandler = useCallback(() => {
    setIsNotificatoinOpen(true);
  }, []);
  const isNotificatoinCloseHandler = useCallback(() => {
    setIsNotificatoinOpen(false);
  }, []);
  // const [monitorType, setMonitorType] = useState(menuItems[0].value);
  const Formik = useFormik({
    initialValues: {
      friendlyName: "",
      url: "https://",
      methods: "GET",
      bodyEncoding: "JSON",
      confirmPassword: "",
      monitor: "HTTP(s)",
      AuthMethods: "None",
      noticationType: "Telegram",
      modalfriendlyName: "",
    },
    validationSchema: newMonitorScheme,
    onSubmit: (values) => {},
  });

  // const handleChange = (event) => {
  //   setMonitorType(event.target.value);
  // };

  return (
    <div>
      <ResponsiveAppBar />

      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <AddNewMonitor />
          <AddNewmonitorHeading />
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "29.3vw",
              position: "sticky",
              top: "10px",
              height: "calc(100vh - 160px + 0px)",
              boxShadow: "0 15px 70px rgba(0,0,0,.1)",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "1rem!important",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
              marginRight: {
                sm: "20px",
                md: "0px",
              },
            }}
          >
            <MonitorSideBar />
          </Box>

          <Box
            sx={{
              width: {
                md: "62.5vw",
                sm: "100vw",
              },
            }}
          >
            <Box
              sx={{
                marginBottom: "1rem!important",
                maxWidth: "100%",
                // paddingRight: "10px",
                // paddingLeft: "10px",
                // marginTop: "10px",
                display: "block",
              }}
            >
              <Box
                sx={{
                  display: "block",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    display: "block",
                    marginTop: "0em",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      padding: "20px 20px 0",
                      boxShadow: "0 15px 70px rgba(0,0,0,.1)",
                      display: "block",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      component="div"
                      className="row"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                        },
                      }}
                    >
                      <Box
                        className="col1"
                        sx={{ width: { xs: "100%", sm: "100%", md: "48%" } }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            marginBottom: "0.5rem!important",
                            fontSize: "26px",
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          General
                        </Typography>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Monitor Type
                          </Typography>
                          <FormControl fullWidth>
                            <Select
                              IconComponent={() => (
                                <RiArrowDropDownLine
                                  style={{
                                    transform: "translateX(-10px)",
                                    height: "40px",
                                    width: "40px",
                                    opacity: "0.6",
                                  }}
                                />
                              )}
                              id="demo-simple-select"
                              name="monitor"
                              value={Formik.values.monitor}
                              onChange={Formik.handleChange}
                              onBlur={Formik.handleBlur}
                              sx={{
                                height: "40px",
                                borderRadius: "50px",
                                // ".Mui-focused": {
                                //   boxShadow:
                                //     "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                //   borderColor: "rgb(174, 238, 197)",
                                //   outline: "0px",
                                // },
                                ".css-3rzyxo-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                    outline: "none",
                                  },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid rgb(206, 212, 218)",
                                    boxShadow:
                                      "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                    borderColor: "rgb(174, 238, 197)",
                                    outline: "0px",
                                  },
                              }}
                            >
                              {menuItems.map((data, index) => (
                                <MenuItem key={index} value={data.value}>
                                  {data.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          {" "}
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Friendly Name
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="friendlyName"
                              value={Formik.values.friendlyName}
                              onChange={Formik.handleChange}
                              onBlur={Formik.handleBlur}
                            />
                            {Formik.touched.friendlyName &&
                              Formik.errors.friendlyName && (
                                <p
                                  style={{
                                    position: "absolute",
                                    color: "red",
                                    top: "24px",
                                    left: "20px",
                                    fontSize: "14px",
                                  }}
                                >
                                  {Formik.errors.friendlyName}
                                </p>
                              )}
                          </FormControl>
                        </Wrapper>

                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            URL
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="url"
                              value={Formik.values.url}
                              onChange={Formik.handleChange}
                              onBlur={Formik.handleBlur}
                            />
                            {Formik.touched.url && Formik.errors.url && (
                              <p
                                style={{
                                  position: "absolute",
                                  color: "red",
                                  top: "24px",
                                  left: "20px",
                                  fontSize: "14px",
                                }}
                              >
                                {Formik.errors.url}
                              </p>
                            )}
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Heartbeat Interval (Check every 60 seconds)
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="heartbeat"
                              type="number"
                              defaultValue="60"
                            />
                          </FormControl>
                        </Wrapper>

                        <Wrapper>
                          {" "}
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Retries
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="retire"
                              type="number"
                              defaultValue="0"
                            />
                            <Box
                              sx={{
                                marginTop: "0.25rem",
                                fontSize: ".875em",
                                color: "#6c757d",
                              }}
                            >
                              Maximum retries before the service is marked as
                              down and a notification is sent
                            </Box>
                          </FormControl>
                        </Wrapper>

                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Heartbeat Retry Interval (Retry every 60 seconds)
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="heartBeatTryInterval"
                              type="number"
                              defaultValue="60"
                            />
                          </FormControl>
                        </Wrapper>

                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Resend Notification if Down X times consecutively
                            (Resend disabled)
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="reSentNotification"
                              type="number"
                              defaultValue="0"
                            />
                          </FormControl>
                        </Wrapper>

                        <Typography
                          variant="h2"
                          sx={{
                            marginBottom: "0.5rem!important",
                            marginTop: "3rem!important",
                            fontSize: "26px",
                            fontWeight: 500,
                            lineHeight: 1.2,
                            display: "block",
                          }}
                        >
                          Advanced
                        </Typography>

                        <Wrapper>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    "&:hover": { bgcolor: "transparent" },
                                    "&:focus": {
                                      borderColor: "aeeec5# !important",
                                      outline: "0 !important",
                                      boxShadow:
                                        "0 0 0 0.25rem rgba(92, 221, 139, 0.25) !important",
                                    },
                                    "&:checked": {
                                      backgroundColor: "#5cdd8b",
                                      borderColor: "#5cdd8b",
                                    },
                                  }}
                                  disableRipple
                                  color="default"
                                  checkedIcon={<BpCheckedIcon />}
                                  icon={<BpIcon />}
                                  inputProps={{ "aria-label": "Checkbox demo" }}
                                  // {...props}
                                />
                              }
                              label="Certificate Expiry Notification"
                            />
                          </FormGroup>
                          <Box
                            component="div"
                            sx={{
                              marginTop: "0.25rem",
                              fontSize: ".875em",
                              color: "#6c757d",
                              display: "block",
                            }}
                          ></Box>
                        </Wrapper>
                        <Wrapper>
                          {" "}
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    "&:hover": { bgcolor: "transparent" },
                                    "&:focus": {
                                      borderColor: "aeeec5# !important",
                                      outline: "0 !important",
                                      boxShadow:
                                        "0 0 0 0.25rem rgba(92, 221, 139, 0.25) !important",
                                    },
                                    "&:checked": {
                                      backgroundColor: "#5cdd8b",
                                      borderColor: "#5cdd8b",
                                    },
                                  }}
                                  disableRipple
                                  color="default"
                                  checkedIcon={<BpCheckedIcon />}
                                  icon={<BpIcon />}
                                  inputProps={{ "aria-label": "Checkbox demo" }}
                                  // {...props}
                                />
                              }
                              label="Ignore TLS/SSL error for HTTPS websites"
                            />
                          </FormGroup>
                          <Box
                            component="div"
                            sx={{
                              marginTop: "0.25rem",
                              fontSize: ".875em",
                              color: "#6c757d",
                              display: "block",
                            }}
                          ></Box>
                        </Wrapper>

                        <Wrapper>
                          {" "}
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    "&:hover": { bgcolor: "transparent" },
                                    "&:focus": {
                                      borderColor: "aeeec5# !important",
                                      outline: "0 !important",
                                      boxShadow:
                                        "0 0 0 0.25rem rgba(92, 221, 139, 0.25) !important",
                                    },
                                    "&:checked": {
                                      backgroundColor: "#5cdd8b",
                                      borderColor: "#5cdd8b",
                                    },
                                  }}
                                  disableRipple
                                  color="default"
                                  checkedIcon={<BpCheckedIcon />}
                                  icon={<BpIcon />}
                                  inputProps={{ "aria-label": "Checkbox demo" }}
                                  // {...props}
                                />
                              }
                              label="Upside Down Mode"
                            />
                          </FormGroup>
                          <Box
                            component="div"
                            sx={{
                              marginTop: "0.25rem",
                              fontSize: ".875em",
                              color: "#6c757d",
                              display: "block",
                              paddingLeft: "24px",
                            }}
                          >
                            Flip the status upside down. If the service is
                            reachable, it is DOWN.
                          </Box>
                        </Wrapper>
                        <Wrapper>
                          {" "}
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Max. Redirects
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="maxRedirects"
                              type="number"
                              defaultValue="10"
                            />
                            <Box
                              sx={{
                                marginTop: "0.25rem",
                                fontSize: ".875em",
                                color: "#6c757d",
                              }}
                            >
                              Maximum number of redirects to follow. Set to 0 to
                              disable redirects.
                            </Box>
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          {" "}
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Accepted Status Codes
                          </Typography>
                          <FormControl fullWidth>
                            <Autocomplete
                              classes={{
                                option: styles.option,
                              }}
                              renderOption={(props, option) => {
                                const { title, color } = option;
                                return (
                                  <span
                                    {...props}
                                    style={{ backgroundColor: color }}
                                  >
                                    {title}
                                  </span>
                                );
                              }}
                              ChipProps={{
                                deleteIcon: (
                                  <CloseIcon
                                    sx={{
                                      height: "10px",
                                      width: "10px",
                                      fill: "black",
                                      fontWeight: "900",
                                      "&:hover": {
                                        fill: "#ffffff",
                                      },
                                    }}
                                  />
                                ),
                              }}
                              ListboxProps={{
                                className: "myCustomList",
                              }}
                              multiple
                              id="tags-outlined"
                              options={top100Films}
                              disableCloseOnSelect
                              getOptionLabel={(option) => option.title}
                              defaultValue={[top100Films[13]]}
                              sx={{
                                "& .MuiInputBase-root ": {
                                  padding: "0px",
                                  minHeight: "38px",
                                  borderRadius: "20px",
                                  paddingLeft: "10px",
                                },
                                "& .css-168nuez-MuiButtonBase-root-MuiChip-root":
                                  {
                                    backgroundColor: "#5CDD8B",
                                    color: "#ffffff",
                                    height: "23px",

                                    // transform: "translateY(-.5px)",
                                  },
                                "& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator":
                                  {
                                    display: "none",
                                  },
                                "& fieldset:hover": {
                                  border: "0px!important ",
                                  outline: "0px!important",
                                },

                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border:
                                      "1px solid rgb(206, 212, 218)!important",
                                    outline: "0px!important",
                                  },
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Pick Accepted Status Codes…"
                                />
                              )}
                            />
                            <Box
                              sx={{
                                marginTop: "0.25rem",
                                fontSize: ".875em",
                                color: "#6c757d",
                              }}
                            >
                              Select status codes which are considered as a
                              successful response.
                            </Box>
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          {" "}
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Description
                          </Typography>
                          <FormControl fullWidth>
                            <GeneralInput
                              name="description"
                              // value={Formik.values.friendlyName}
                              // onChange={Formik.handleChange}
                              // onBlur={Formik.handleBlur}
                            />
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          <TagsGenerator />
                        </Wrapper>
                      </Box>
                      <Box
                        className="col2"
                        sx={{ width: { xs: "100%", sm: "100%", md: "48%" } }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            marginBottom: "0.5rem!important",
                            fontSize: "26px",
                            marginTop: 0,
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          Notifications
                        </Typography>
                        <Typography sx={{ marginTop: 0, marginBottom: "1rem" }}>
                          Not available, please setup.
                        </Typography>
                        <button
                          style={{
                            marginRight: "0.5rem!important",
                            cursor: "pointer",
                            color: "#fff",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            backgroundColor: "#5cdd8b",
                            borderColor: "#5cdd8b",
                            display: "inline-block",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            textAlign: "center",
                            textDecoration: "none",
                            verticalAlign: "middle",
                            userSelect: "none",
                            border: "1px solid transparent",
                            padding: "0.375rem 0.75rem",
                            fontSize: "1rem",
                            borderRadius: "50rem",
                            transition:
                              "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                          }}
                          type="button"
                          onClick={isNotificatoinOpenHandler}
                        >
                          Setup Notification
                        </button>
                        <Modalset
                          open={isNotificatoinOpen}
                          handleClose={isNotificatoinCloseHandler}
                          width="500"
                        >
                          <Box component="form">
                            <Box
                              component="div"
                              sx={{
                                display: "flex",
                                borderBottom: "1px solid gray",
                                padding: "20px 20px",
                              }}
                            >
                              <Typography
                                variant="h5"
                                sx={{
                                  marginBottom: 0,
                                  lineHeight: 1.5,
                                  fontSize: "1.25rem",
                                  fontWeight: 500,
                                  marginTop: 0,
                                }}
                              >
                                Setup Notification
                              </Typography>
                              <button
                                style={{
                                  margin: "-0.5rem -0.5rem -0.5rem auto",
                                  padding: "0.5rem",
                                  cursor: "pointer",
                                  width: "1em",
                                  height: "1em",
                                  color: "#000",
                                  background:
                                    "transparent url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e) center/1em auto no-repeat",
                                  border: 0,
                                  borderRadius: "50rem",
                                  opacity: 0.5,
                                  WebkitAppearance: "button",
                                  textTransform: "none",
                                  fontFamily: "inherit",
                                  fontSize: "inherit",
                                  lineHeight: "inherit",
                                }}
                                onClick={isNotificatoinCloseHandler}
                              ></button>
                            </Box>
                            <div style={{ padding: "20px 20px" }}>
                              <Wrapper>
                                <Typography
                                  sx={{
                                    marginBottom: "0.5rem",
                                    display: "inline-block",
                                    cursor: "default",
                                  }}
                                >
                                  Notification Type
                                </Typography>
                                <FormControl fullWidth>
                                  <Select
                                    IconComponent={() => (
                                      <RiArrowDropDownLine
                                        style={{
                                          transform: "translateX(-10px)",
                                          height: "40px",
                                          width: "40px",
                                          opacity: "0.6",
                                        }}
                                      />
                                    )}
                                    id="demo-simple-select"
                                    name="noticationType"
                                    value={Formik.values.noticationType}
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}
                                    sx={{
                                      height: "40px",
                                      borderRadius: "50px",
                                      // ".Mui-focused": {
                                      //   boxShadow:
                                      //     "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                      //   borderColor: "rgb(174, 238, 197)",
                                      //   outline: "0px",
                                      // },
                                      ".css-3rzyxo-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
                                        {
                                          border: "none",
                                          outline: "none",
                                        },
                                      "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                          border:
                                            "1px solid rgb(206, 212, 218)",
                                          boxShadow:
                                            "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                          borderColor: "rgb(174, 238, 197)",
                                          outline: "0px",
                                        },
                                    }}
                                  >
                                    {NotificationType.map((data, index) => (
                                      <MenuItem key={index} value={data.value}>
                                        {data.value}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Wrapper>
                              <Wrapper>
                                {" "}
                                <Typography
                                  sx={{
                                    marginBottom: "0.5rem",
                                    display: "inline-block",
                                    cursor: "default",
                                  }}
                                >
                                  Friendly Name
                                </Typography>
                                <FormControl fullWidth>
                                  <GeneralInput
                                    name="modalfriendlyName"
                                    value={Formik.values.modalfriendlyName}
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}
                                  />
                                  {Formik.touched.friendlyName &&
                                    Formik.errors.friendlyName && (
                                      <p
                                        style={{
                                          position: "absolute",
                                          color: "red",
                                          top: "24px",
                                          left: "20px",
                                          fontSize: "14px",
                                        }}
                                      >
                                        {Formik.errors.friendlyName}
                                      </p>
                                    )}
                                </FormControl>
                              </Wrapper>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Antswitch />
                                <span style={{ marginLeft: "10px" }}>
                                  Default enabled
                                </span>
                              </div>
                            </div>
                          </Box>
                        </Modalset>

                        <Box component="div">
                          <Typography
                            variant="h2"
                            sx={{
                              marginBottom: "0.5rem!important",
                              marginTop: "3rem!important",
                              fontSize: "26px",
                              fontWeight: 500,
                              lineHeight: 1.2,
                            }}
                          >
                            Proxy
                          </Typography>
                          <Typography
                            sx={{ marginTop: 0, marginBottom: "1rem" }}
                          >
                            Not available, please setup.
                          </Typography>
                          <button
                            style={{
                              marginRight: "0.5rem!important",
                              cursor: "pointer",
                              color: "#fff",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              backgroundColor: "#5cdd8b",
                              borderColor: "#5cdd8b",
                              display: "inline-block",
                              fontWeight: 400,
                              lineHeight: 1.5,
                              textAlign: "center",
                              textDecoration: "none",
                              verticalAlign: "middle",
                              userSelect: "none",
                              border: "1px solid transparent",
                              padding: "0.375rem 0.75rem",
                              fontSize: "1rem",
                              borderRadius: "50rem",
                              transition:
                                "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                            }}
                          >
                            Setup Proxy
                          </button>
                        </Box>
                        <Typography
                          variant="h2"
                          sx={{
                            marginBottom: "0.5rem!important",
                            marginTop: "3rem!important",
                            fontSize: "26px",
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          HTTP Options
                        </Typography>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Methods
                          </Typography>
                          <FormControl fullWidth>
                            <Select
                              IconComponent={() => (
                                <RiArrowDropDownLine
                                  style={{
                                    transform: "translateX(-10px)",
                                    height: "40px",
                                    width: "40px",
                                    opacity: "0.6",
                                  }}
                                />
                              )}
                              id="demo-simple-select"
                              name="methods"
                              value={Formik.values.methods}
                              onChange={Formik.handleChange}
                              onBlur={Formik.handleBlur}
                              sx={{
                                height: "40px",
                                borderRadius: "50px",
                                // ".Mui-focused": {
                                //   boxShadow:
                                //     "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                //   borderColor: "rgb(174, 238, 197)",
                                //   outline: "0px",
                                // },
                                ".css-3rzyxo-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                    outline: "none",
                                  },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid rgb(206, 212, 218)",
                                    boxShadow:
                                      "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                    borderColor: "rgb(174, 238, 197)",
                                    outline: "0px",
                                  },
                              }}
                            >
                              {Methods.map((data, index) => (
                                <MenuItem key={index} value={data.value}>
                                  {data.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Body Encoding
                          </Typography>
                          <FormControl fullWidth>
                            <Select
                              IconComponent={() => (
                                <RiArrowDropDownLine
                                  style={{
                                    transform: "translateX(-10px)",
                                    height: "40px",
                                    width: "40px",
                                    opacity: "0.6",
                                  }}
                                />
                              )}
                              id="demo-simple-select"
                              name="bodyEncoding"
                              value={Formik.values.bodyEncoding}
                              onChange={Formik.handleChange}
                              onBlur={Formik.handleBlur}
                              sx={{
                                height: "40px",
                                borderRadius: "50px",
                                // ".Mui-focused": {
                                //   boxShadow:
                                //     "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                //   borderColor: "rgb(174, 238, 197)",
                                //   outline: "0px",
                                // },
                                ".css-3rzyxo-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                    outline: "none",
                                  },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid rgb(206, 212, 218)",
                                    boxShadow:
                                      "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                    borderColor: "rgb(174, 238, 197)",
                                    outline: "0px",
                                  },
                              }}
                            >
                              {bodyEncoding.map((data, index) => (
                                <MenuItem key={index} value={data.value}>
                                  {data.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Wrapper>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Body Encoding
                          </Typography>
                          {/* <FormControl fullWidth> */}
                          {/* <textarea>hdusahudhs</textarea> */}
                          <TextArea placeholder={placeHolder}></TextArea>
                          {/* </FormControl> */}
                        </Wrapper>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Headers
                          </Typography>
                          {/* <FormControl fullWidth> */}
                          {/* <textarea>hdusahudhs</textarea> */}
                          <TextArea placeholder={HeaderPlaceHolder}></TextArea>
                          {/* </FormControl> */}
                        </Wrapper>
                        <Typography
                          variant="h4"
                          sx={{
                            marginBottom: "0.5rem!important",
                            marginTop: "3rem!important",
                            fontSize: "1.5rem",
                            fontWeight: 500,
                            lineHeight: 1.2,
                          }}
                        >
                          Authentication
                        </Typography>
                        <Wrapper>
                          <Typography
                            sx={{
                              marginBottom: "0.5rem",
                              display: "inline-block",
                              cursor: "default",
                            }}
                          >
                            Method
                          </Typography>
                          <FormControl fullWidth>
                            <Select
                              IconComponent={() => (
                                <RiArrowDropDownLine
                                  style={{
                                    transform: "translateX(-10px)",
                                    height: "40px",
                                    width: "40px",
                                    opacity: "0.6",
                                  }}
                                />
                              )}
                              id="demo-simple-select"
                              name="AuthMethods"
                              value={Formik.values.AuthMethods}
                              onChange={Formik.handleChange}
                              onBlur={Formik.handleBlur}
                              sx={{
                                height: "40px",
                                borderRadius: "50px",
                                // ".Mui-focused": {
                                //   boxShadow:
                                //     "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                //   borderColor: "rgb(174, 238, 197)",
                                //   outline: "0px",
                                // },
                                ".css-3rzyxo-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                    outline: "none",
                                  },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid rgb(206, 212, 218)",
                                    boxShadow:
                                      "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
                                    borderColor: "rgb(174, 238, 197)",
                                    outline: "0px",
                                  },
                              }}
                            >
                              {AuthMethods.map((data, index) => (
                                <MenuItem key={index} value={data.value}>
                                  {data.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Wrapper>
                      </Box>
                    </Box>
                    <StickyBtn />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default React.memo(Home);

// ":focus": {
//   boxShadow:
//     "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
//   borderColor: "rgb(174, 238, 197)",
//   outline: "10px",
// },
// "& fieldset": {
//   // borderRadius: "50px",
//   "&:focus": {
//     boxShadow:
//       "rgba(92, 221, 139, 0.25) 0px 0px 0px 0.25rem",
//     borderColor: "rgb(174, 238, 197)",
//     outline: "10px",
//   },
// },
