import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setURL(url);

        const createdAt = timestamp();
        // const date = new Date(createdAtStart * 1000);
        // // Hours part from the timestamp
        // const hours = date.getHours();
        // // Minutes part from the timestamp
        // const minutes = "0" + date.getMinutes();
        // // Seconds part from the timestamp
        // const seconds = "0" + date.getSeconds();
        // // Will display time in 10:30:23 format
        // const formattedTime =
        //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

        // const createdAt = formattedTime;

        collectionRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
