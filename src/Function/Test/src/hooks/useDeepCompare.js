import { isEqual } from "lodash";
import { useEffect, useRef, useState } from "react";

const useDeepCompare = (props) => {
  const previousState = useRef(props);
  const [data, updateData] = useState(props);
  useEffect(() => {
    if (!isEqual(previousState.current, props)) {
      updateData(props);
      previousState.current = props;
    }
  }, [props]);
  return data;
};

export default useDeepCompare;
