// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { AppDispatch } from "../types/declarations";
import { removeCollaborator } from "../redux/collaboration/collaboration.slice";
import { useNavigate } from "react-router-dom";

const CollaborationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { collaboratedCountries } = useSelector(
    (state: any) => state.collaboration
  );

  // useEffect(() => {
  //   console.log(collaboratedCountries);
  // }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-wrap w-[95%] h-[85vh] bg-[#E7E5E4] overflow-y-auto rounded-lg p-2 shadow-xl">
        <div className="flex flex-wrap w-full overflow-y-auto scrollbar-hide rounded-lg bg-stone-300">
          <TableContainer
            component={Paper}
            className="flex flex-col justify-start items-center rounded-lg shadow-md p-5 max-h-[44.3rem] overflow-y-auto scrollbar-hide"
          >
            <h1 className="flex font-semibold text-2xl my-4">
              Country Collaborators
            </h1>
            {collaboratedCountries?.length > 0 ? (
              <Table className="flex justify-center items-center max-w-[40rem]">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      className="font-semibold text-center"
                    >
                      flag
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-semibold text-center"
                    >
                      Country Name
                    </TableCell>
                    <TableCell align="center" className="font-semibold">
                      action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="flex h-full overflow-y-auto scrollbar-hide">
                  {collaboratedCountries.map((collaborator: any, i: number) => (
                    <TableRow
                      key={i}
                      className="hover:bg-slate-300 cursor-pointer"
                    >
                      <TableCell
                        onClick={() =>
                          navigate(
                            `/${collaborator?.name?.common}/${collaborator?.cca2}`
                          )
                        }
                        align="center"
                        className="flex items-center justify-center"
                      >
                        <img
                          src={collaborator?.flags?.png}
                          alt={`${collaborator?.name?.common} flag`}
                          className="max-w-[5rem] h-auto "
                        />
                        {/* {collaborator?.flags?.png} */}
                      </TableCell>
                      <TableCell
                        align="center"
                        onClick={() =>
                          navigate(
                            `/${collaborator?.name?.common}/${collaborator?.cca2}`
                          )
                        }
                      >
                        {collaborator?.name?.common}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          className="ml-2"
                          onClick={() =>
                            dispatch(
                              removeCollaborator(collaborator?.name?.common)
                            )
                          }
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-full justify-center items-center">
                <div className="flex flex-col px-3 justify-center items-center text-center h-[8rem] min-w-[15rem] border text-wrap rounded-2xl">
                  <h2 className="flex text-base my-4">
                    No country collaboration at this time.
                  </h2>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className="w-[20%]"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Button>
                </div>
              </div>
            )}
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;
