import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  if (!title) {
    throw new Error("El título no existe");
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

FirstApp.defaultProps = {
  title: "No hay ningún título",
  subtitle: "Hola",
};
