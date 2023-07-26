const newMessage = {
  title: "Jonathan",
  message: "Hola mundo",
};

function getResult() {
  return 4 + 4;
}

export const FirstApp = () => {
  return (
    <>
      <h1>{getResult()}</h1>
      <p>{newMessage.message}</p>
    </>
  );
};
