import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImgGrid = () => {
  const { docs } = useFirestore("images");

  // TESTING OUT CONVERTION TO NORMAL HUMAN DATE FROM MELLISECONDS
  // function consoleThing() {
  //   var i = 0;
  //   if (i < docs.length) {
  //     console.log(docs[i].createdAt.toDate());
  //     i++;
  //   }
  // }
  // setTimeout(consoleThing, 3000);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
          >
            <a
              href={doc.url}
              data-lightbox="mygallery"
              data-title={`UPLOADED : <br /> ${
                doc.createdAt && doc.createdAt.toDate()
              }`}
            >
              <motion.img
                src={doc.url}
                alt="uploadedPic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
              />
            </a>
          </motion.div>
        ))}
    </div>
  );
};

export default ImgGrid;
