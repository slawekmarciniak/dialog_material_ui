import AlertDialog from "./components/AlertDialog";

import "./App";

function App() {
  const handleConfirmDialogButton = () => {
    console.log("confirmed");
  };
  const handleAbortDialogButton = () => {
    console.log("aborted");
  };

  return (
    <div className="App">
      <AlertDialog
        handleConfirm={handleConfirmDialogButton}
        handleAbort={handleAbortDialogButton}
      />
    </div>
  );
}

export default App;
