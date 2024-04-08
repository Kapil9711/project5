import { Stack, Button } from "@mui/material";
import { useState } from "react";

const data = [
  {
    url: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "img",
  },
  {
    url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "img",
  },
];

const BoxWrapper = ({
  id,
  url,
  handleMouseEnter,
  handleMouseLeave,
  active,
  children,
}) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      id={id}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        height: "100%",
        width: active[0] ? (active.includes(id) ? "70%" : "30%") : "50%",
        background: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "width .5s ease",
      }}
    >
      <Button
        id={id}
        variant={active.includes(id) ? "contained" : "outlined"}
        color={id === "img0" ? "success" : "secondary"}
        size="large"
        sx={{ padding: "12px 48px" }}
      >
        Buy Now
      </Button>
    </Stack>
  );
};

const SplitedComponent = () => {
  const [active, setActive] = useState(() => []);
  const handleMouseEnter = (e) => {
    console.log(e.target.id);
    setActive([e.target.id]);
    console.log(active);
  };
  const handleMouseLeave = (e) => {
    console.log(e.target.id);
    setActive([]);
    console.log(active);
  };

  return (
    <Stack direction={"row"} sx={{ height: "100vh" }}>
      {data.map(({ url, id }, i) => {
        return (
          <BoxWrapper
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            id={id + i}
            key={id + i}
            url={url}
            active={active}
          ></BoxWrapper>
        );
      })}
    </Stack>
  );
};

export default SplitedComponent;
