import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getSingleBook } from "../../lib/api";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import Detail from "./Components/Detail";

const BookDetail = (props) => {
  const params = useParams();

  const { bookId } = params;

  console.log(bookId);

  const {
    sendRequest,
    status,
    data: loadedBook,
    error,
  } = useHttp(getSingleBook, true);

  console.log(loadedBook);

  useEffect(() => {
    sendRequest(bookId);
  }, [sendRequest, bookId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedBook.bookId) {
    return <p>No book found!</p>;
  }

  return (
    <Fragment>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6"></div>
              <Detail book={loadedBook} />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default BookDetail;
