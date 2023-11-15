"use client";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = () => {
  return (
    <Dimmer active inverted>
      <Loader size="massive" inverted>
        Loading
      </Loader>
    </Dimmer>
  );
};
export default Loading;
